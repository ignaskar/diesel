searchState.loadedDescShard("rand_core", 0, "Random number generation traits\nCodes at or above this point can be used by users to …\nA marker trait used to indicate that an <code>RngCore</code> or …\nAn extension trait that is automatically implemented for …\nError type of random number generators\nCodes below this point represent OS Errors (i.e. positive …\nA random number generator that retrieves randomness from …\nThe core of a random number generator.\nSeed type, which is restricted to types …\nA random number generator that can be explicitly seeded.\nUpcast to an <code>RngCore</code> trait object.\nThe <code>BlockRngCore</code> trait and implementation helpers\nRetrieve the error code, if any.\nFill <code>dest</code> with random data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new instance of the RNG seeded via <code>getrandom</code>.\nCreate a new PRNG seeded from another <code>Rng</code>.\nCreate a new PRNG using the given seed.\nHelper functions for implementing <code>RngCore</code> functions.\nReference the inner error (<code>std</code> only)\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLittle-Endian utilities\nConstruct from any type supporting <code>std::error::Error</code>\nReturn the next random <code>u32</code>.\nReturn the next random <code>u64</code>.\nExtract the raw OS error code (if this error came from the …\nCreate a new PRNG using a <code>u64</code> seed.\nUnwrap the inner error (<code>std</code> only)\nFill <code>dest</code> entirely with random data.\nA wrapper type implementing <code>RngCore</code> for some type …\nA wrapper type implementing <code>RngCore</code> for some type …\nA trait for RNGs which do not generate random numbers …\nResults element type, e.g. <code>u32</code>.\nResults type. This is the ‘block’ an RNG implementing …\nThe <em>core</em> part of the RNG, implementing the <code>generate</code> …\nThe <em>core</em> part of the RNG, implementing the <code>generate</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate a new block of results.\nGenerate a new set of results immediately, setting the …\nGenerate a new set of results immediately, setting the …\nGet the index into the result buffer.\nGet the index into the result buffer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>BlockRng</code> from an existing RNG implementing …\nCreate a new <code>BlockRng</code> from an existing RNG implementing …\nReset the number of available results. This will force a …\nReset the number of available results. This will force a …\nImplement <code>fill_bytes</code> via <code>next_u64</code> and <code>next_u32</code>, …\nImplement <code>fill_bytes</code> by reading chunks from the output …\nImplement <code>fill_bytes</code> by reading chunks from the output …\nImplement <code>next_u32</code> via <code>fill_bytes</code>, little-endian order.\nImplement <code>next_u64</code> via <code>fill_bytes</code>, little-endian order.\nImplement <code>next_u64</code> via <code>next_u32</code>, little-endian order.\nReads unsigned 32 bit integers from <code>src</code> into <code>dst</code>.\nReads unsigned 64 bit integers from <code>src</code> into <code>dst</code>.")