(function() {var type_impls = {
"diesel":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#impl-Clone-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#impl-Debug-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Expression-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#55-60\">source</a><a href=\"#impl-Expression-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"diesel/prelude/trait.Expression.html\" title=\"trait diesel::prelude::Expression\">Expression</a> for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    Subselect&lt;T, <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a>&gt;: <a class=\"trait\" href=\"diesel/prelude/trait.Expression.html\" title=\"trait diesel::prelude::Expression\">Expression</a>,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.SqlType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SqlType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/prelude/trait.Expression.html#associatedtype.SqlType\" class=\"associatedtype\">SqlType</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a></h4></section></summary><div class='docblock'>The type that this expression represents in SQL</div></details></div></details>","Expression","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryFragment%3CDB%3E-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#69-77\">source</a><a href=\"#impl-QueryFragment%3CDB%3E-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, DB&gt; <a class=\"trait\" href=\"diesel/query_builder/trait.QueryFragment.html\" title=\"trait diesel::query_builder::QueryFragment\">QueryFragment</a>&lt;DB&gt; for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"diesel/backend/trait.Backend.html\" title=\"trait diesel::backend::Backend\">Backend</a>,\n    Self: <a class=\"trait\" href=\"diesel/query_builder/trait.QueryFragment.html\" title=\"trait diesel::query_builder::QueryFragment\">QueryFragment</a>&lt;DB, DB::<a class=\"associatedtype\" href=\"diesel/backend/trait.SqlDialect.html#associatedtype.ExistsSyntax\" title=\"type diesel::backend::SqlDialect::ExistsSyntax\">ExistsSyntax</a>&gt;,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.walk_ast\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#74-76\">source</a><a href=\"#method.walk_ast\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#tymethod.walk_ast\" class=\"fn\">walk_ast</a>&lt;'b&gt;(&amp;'b self, pass: <a class=\"struct\" href=\"diesel/query_builder/struct.AstPass.html\" title=\"struct diesel::query_builder::AstPass\">AstPass</a>&lt;'_, 'b, DB&gt;) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Walk over this <code>QueryFragment</code> for all passes. <a href=\"diesel/query_builder/trait.QueryFragment.html#tymethod.walk_ast\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_sql\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#233-236\">source</a><a href=\"#method.to_sql\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.to_sql\" class=\"fn\">to_sql</a>(&amp;self, out: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/backend/trait.Backend.html#associatedtype.QueryBuilder\" title=\"type diesel::backend::Backend::QueryBuilder\">QueryBuilder</a>, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Converts this <code>QueryFragment</code> to its SQL representation. <a href=\"diesel/query_builder/trait.QueryFragment.html#method.to_sql\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect_binds\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#247-254\">source</a><a href=\"#method.collect_binds\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.collect_binds\" class=\"fn\">collect_binds</a>&lt;'b&gt;(\n    &amp;'b self,\n    out: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/backend/trait.Backend.html#associatedtype.BindCollector\" title=\"type diesel::backend::Backend::BindCollector\">BindCollector</a>&lt;'b&gt;,\n    metadata_lookup: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/sql_types/trait.TypeMetadata.html#associatedtype.MetadataLookup\" title=\"type diesel::sql_types::TypeMetadata::MetadataLookup\">MetadataLookup</a>,\n    backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'b DB</a>\n) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Serializes all bind parameters in this query. <a href=\"diesel/query_builder/trait.QueryFragment.html#method.collect_binds\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_safe_to_cache_prepared\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#274-278\">source</a><a href=\"#method.is_safe_to_cache_prepared\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_safe_to_cache_prepared\" class=\"fn\">is_safe_to_cache_prepared</a>(&amp;self, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Is this query safe to store in the prepared statement cache? <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_safe_to_cache_prepared\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_noop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#284-288\">source</a><a href=\"#method.is_noop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_noop\" class=\"fn\">is_noop</a>(&amp;self, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Does walking this AST have any effect?</div></details></div></details>","QueryFragment<DB>","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryFragment%3CDB,+AnsiSqlExistsSyntax%3E-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#79-90\">source</a><a href=\"#impl-QueryFragment%3CDB,+AnsiSqlExistsSyntax%3E-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, DB&gt; <a class=\"trait\" href=\"diesel/query_builder/trait.QueryFragment.html\" title=\"trait diesel::query_builder::QueryFragment\">QueryFragment</a>&lt;DB, <a class=\"struct\" href=\"diesel/backend/sql_dialect/exists_syntax/struct.AnsiSqlExistsSyntax.html\" title=\"struct diesel::backend::sql_dialect::exists_syntax::AnsiSqlExistsSyntax\">AnsiSqlExistsSyntax</a>&gt; for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"diesel/backend/trait.Backend.html\" title=\"trait diesel::backend::Backend\">Backend</a> + <a class=\"trait\" href=\"diesel/backend/trait.SqlDialect.html\" title=\"trait diesel::backend::SqlDialect\">SqlDialect</a>&lt;ExistsSyntax = <a class=\"struct\" href=\"diesel/backend/sql_dialect/exists_syntax/struct.AnsiSqlExistsSyntax.html\" title=\"struct diesel::backend::sql_dialect::exists_syntax::AnsiSqlExistsSyntax\">AnsiSqlExistsSyntax</a>&gt;,\n    T: <a class=\"trait\" href=\"diesel/query_builder/trait.QueryFragment.html\" title=\"trait diesel::query_builder::QueryFragment\">QueryFragment</a>&lt;DB&gt;,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.walk_ast\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#84-89\">source</a><a href=\"#method.walk_ast\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#tymethod.walk_ast\" class=\"fn\">walk_ast</a>&lt;'b&gt;(&amp;'b self, out: <a class=\"struct\" href=\"diesel/query_builder/struct.AstPass.html\" title=\"struct diesel::query_builder::AstPass\">AstPass</a>&lt;'_, 'b, DB&gt;) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Walk over this <code>QueryFragment</code> for all passes. <a href=\"diesel/query_builder/trait.QueryFragment.html#tymethod.walk_ast\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_sql\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#233-236\">source</a><a href=\"#method.to_sql\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.to_sql\" class=\"fn\">to_sql</a>(&amp;self, out: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/backend/trait.Backend.html#associatedtype.QueryBuilder\" title=\"type diesel::backend::Backend::QueryBuilder\">QueryBuilder</a>, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Converts this <code>QueryFragment</code> to its SQL representation. <a href=\"diesel/query_builder/trait.QueryFragment.html#method.to_sql\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect_binds\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#247-254\">source</a><a href=\"#method.collect_binds\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.collect_binds\" class=\"fn\">collect_binds</a>&lt;'b&gt;(\n    &amp;'b self,\n    out: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/backend/trait.Backend.html#associatedtype.BindCollector\" title=\"type diesel::backend::Backend::BindCollector\">BindCollector</a>&lt;'b&gt;,\n    metadata_lookup: &amp;mut DB::<a class=\"associatedtype\" href=\"diesel/sql_types/trait.TypeMetadata.html#associatedtype.MetadataLookup\" title=\"type diesel::sql_types::TypeMetadata::MetadataLookup\">MetadataLookup</a>,\n    backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'b DB</a>\n) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Serializes all bind parameters in this query. <a href=\"diesel/query_builder/trait.QueryFragment.html#method.collect_binds\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_safe_to_cache_prepared\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#274-278\">source</a><a href=\"#method.is_safe_to_cache_prepared\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_safe_to_cache_prepared\" class=\"fn\">is_safe_to_cache_prepared</a>(&amp;self, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Is this query safe to store in the prepared statement cache? <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_safe_to_cache_prepared\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_noop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/mod.rs.html#284-288\">source</a><a href=\"#method.is_noop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryFragment.html#method.is_noop\" class=\"fn\">is_noop</a>(&amp;self, backend: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;DB</a>) -&gt; <a class=\"type\" href=\"diesel/prelude/type.QueryResult.html\" title=\"type diesel::prelude::QueryResult\">QueryResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Does walking this AST have any effect?</div></details></div></details>","QueryFragment<DB, AnsiSqlExistsSyntax>","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryId-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#impl-QueryId-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"diesel/query_builder/trait.QueryId.html\" title=\"trait diesel::query_builder::QueryId\">QueryId</a>&gt; <a class=\"trait\" href=\"diesel/query_builder/trait.QueryId.html\" title=\"trait diesel::query_builder::QueryId\">QueryId</a> for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.QueryId\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.QueryId\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/query_builder/trait.QueryId.html#associatedtype.QueryId\" class=\"associatedtype\">QueryId</a> = <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;&lt;T as <a class=\"trait\" href=\"diesel/query_builder/trait.QueryId.html\" title=\"trait diesel::query_builder::QueryId\">QueryId</a>&gt;::<a class=\"associatedtype\" href=\"diesel/query_builder/trait.QueryId.html#associatedtype.QueryId\" title=\"type diesel::query_builder::QueryId::QueryId\">QueryId</a>&gt;</h4></section></summary><div class='docblock'>A type which uniquely represents <code>Self</code> in a SQL query. <a href=\"diesel/query_builder/trait.QueryId.html#associatedtype.QueryId\">Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.HAS_STATIC_QUERY_ID\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#associatedconstant.HAS_STATIC_QUERY_ID\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"diesel/query_builder/trait.QueryId.html#associatedconstant.HAS_STATIC_QUERY_ID\" class=\"constant\">HAS_STATIC_QUERY_ID</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a> = _</h4></section></summary><div class='docblock'>Can the SQL generated by <code>Self</code> be uniquely identified by its type? <a href=\"diesel/query_builder/trait.QueryId.html#associatedconstant.HAS_STATIC_QUERY_ID\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.query_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/query_id.rs.html#59-65\">source</a><a href=\"#method.query_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryId.html#method.query_id\" class=\"fn\">query_id</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a>&gt;</h4></section></summary><div class='docblock'>Returns the type id of <code>Self::QueryId</code> if <code>Self::HAS_STATIC_QUERY_ID</code>.\nReturns <code>None</code> otherwise. <a href=\"diesel/query_builder/trait.QueryId.html#method.query_id\">Read more</a></div></details></div></details>","QueryId","diesel::expression::functions::helper_types::exists"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValidGrouping%3CGB%3E-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#62-67\">source</a><a href=\"#impl-ValidGrouping%3CGB%3E-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, GB&gt; <a class=\"trait\" href=\"diesel/expression/trait.ValidGrouping.html\" title=\"trait diesel::expression::ValidGrouping\">ValidGrouping</a>&lt;GB&gt; for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    Subselect&lt;T, <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a>&gt;: <a class=\"trait\" href=\"diesel/expression/trait.ValidGrouping.html\" title=\"trait diesel::expression::ValidGrouping\">ValidGrouping</a>&lt;GB&gt;,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.IsAggregate\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsAggregate\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/expression/trait.ValidGrouping.html#associatedtype.IsAggregate\" class=\"associatedtype\">IsAggregate</a> = &lt;Subselect&lt;T, <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a>&gt; as <a class=\"trait\" href=\"diesel/expression/trait.ValidGrouping.html\" title=\"trait diesel::expression::ValidGrouping\">ValidGrouping</a>&lt;GB&gt;&gt;::<a class=\"associatedtype\" href=\"diesel/expression/trait.ValidGrouping.html#associatedtype.IsAggregate\" title=\"type diesel::expression::ValidGrouping::IsAggregate\">IsAggregate</a></h4></section></summary><div class='docblock'>Is this expression aggregate? <a href=\"diesel/expression/trait.ValidGrouping.html#associatedtype.IsAggregate\">Read more</a></div></details></div></details>","ValidGrouping<GB>","diesel::expression::functions::helper_types::exists"],["<section id=\"impl-AppearsOnTable%3CQS%3E-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#99-104\">source</a><a href=\"#impl-AppearsOnTable%3CQS%3E-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, QS&gt; <a class=\"trait\" href=\"diesel/prelude/trait.AppearsOnTable.html\" title=\"trait diesel::prelude::AppearsOnTable\">AppearsOnTable</a>&lt;QS&gt; for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"diesel/prelude/trait.Expression.html\" title=\"trait diesel::prelude::Expression\">Expression</a>,\n    Subselect&lt;T, <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a>&gt;: <a class=\"trait\" href=\"diesel/prelude/trait.AppearsOnTable.html\" title=\"trait diesel::prelude::AppearsOnTable\">AppearsOnTable</a>&lt;QS&gt;,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section>","AppearsOnTable<QS>","diesel::expression::functions::helper_types::exists"],["<section id=\"impl-Copy-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#48\">source</a><a href=\"#impl-Copy-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;</h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section>","Copy","diesel::expression::functions::helper_types::exists"],["<section id=\"impl-SelectableExpression%3CQS%3E-for-Exists%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/expression/exists.rs.html#92-97\">source</a><a href=\"#impl-SelectableExpression%3CQS%3E-for-Exists%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, QS&gt; <a class=\"trait\" href=\"diesel/prelude/trait.SelectableExpression.html\" title=\"trait diesel::prelude::SelectableExpression\">SelectableExpression</a>&lt;QS&gt; for <a class=\"struct\" href=\"diesel/expression/exists/struct.Exists.html\" title=\"struct diesel::expression::exists::Exists\">Exists</a>&lt;T&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"diesel/prelude/trait.AppearsOnTable.html\" title=\"trait diesel::prelude::AppearsOnTable\">AppearsOnTable</a>&lt;QS&gt;,\n    Subselect&lt;T, <a class=\"struct\" href=\"diesel/sql_types/struct.Bool.html\" title=\"struct diesel::sql_types::Bool\">Bool</a>&gt;: <a class=\"trait\" href=\"diesel/prelude/trait.SelectableExpression.html\" title=\"trait diesel::prelude::SelectableExpression\">SelectableExpression</a>&lt;QS&gt;,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>i-implement-a-third-party-backend-and-opt-into-breaking-changes</code></strong> only.</div></span></section>","SelectableExpression<QS>","diesel::expression::functions::helper_types::exists"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()