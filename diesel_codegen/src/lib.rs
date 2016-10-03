#![feature(rustc_macro, rustc_macro_lib)]
#![deny(warnings)]

macro_rules! t {
    ($expr:expr) => {
        match $expr {
            Ok(val) => val,
            Err(e) => panic!("{}", e),
        }
    };
}

#[macro_use]
extern crate quote;
extern crate rustc_macro;
extern crate syn;

mod ast_builder;
mod attr;
mod identifiable;
mod model;
mod queryable;
mod util;

use rustc_macro::TokenStream;
use syn::parse_macro_input;
use util::{list_value_of_attr_with_name, strip_attributes};

const KNOWN_CUSTOM_DERIVES: &'static [&'static str] = &[
    "Identifiable",
    "Queryable",
];

const KNOWN_CUSTOM_ATTRIBUTES: &'static [&'static str] = &[
    "table_name",
];

#[rustc_macro_derive(Queryable)]
pub fn derive_queryable(input: TokenStream) -> TokenStream {
    expand_derive(input, queryable::derive_queryable)
}

#[rustc_macro_derive(Identifiable)]
pub fn derive_identifiable(input: TokenStream) -> TokenStream {
    expand_derive(input, identifiable::derive_identifiable)
}

fn expand_derive(input: TokenStream, f: fn(syn::MacroInput) -> quote::Tokens) -> TokenStream {
    let mut item = parse_macro_input(&input.to_string()).unwrap();
    let output = f(item.clone());

    let finished_deriving_diesel_traits = {
        let remaining_derives = list_value_of_attr_with_name(&item.attrs, "derive");
        !remaining_derives
            .unwrap_or(Vec::new())
            .iter()
            .any(|trait_name| KNOWN_CUSTOM_DERIVES.contains(&trait_name.as_ref()))
    };

    if finished_deriving_diesel_traits {
        item.attrs = strip_attributes(item.attrs, KNOWN_CUSTOM_ATTRIBUTES);
    }

    quote!(#item #output).to_string().parse().unwrap()
}