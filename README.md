<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ssorthp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Sort a single-precision floating-point strided array using heapsort.



<section class="usage">

## Usage

```javascript
import ssorthp from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssorthp@deno/mod.js';
```

#### ssorthp( N, order, x, stride )

Sorts a single-precision floating-point strided array `x` using heapsort.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );

ssorthp( x.length, 1.0, x, 1 );
// x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to sort every other element

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var N = floor( x.length / 2 );

ssorthp( N, -1.0, x, 2 );
// x => <Float32Array>[ 3.0, -2.0, 1.0, -4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

// Initial array...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Sort every other element...
ssorthp( N, -1.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### ssorthp.ndarray( N, order, x, stride, offset )

Sorts a single-precision floating-point strided array `x` using heapsort and alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );

ssorthp.ndarray( x.length, 1.0, x, 1, 0 );
// x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

ssorthp.ndarray( 3, 1.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions return `x` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
-   The algorithm is **unstable**, meaning that the algorithm may change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided array is sorted **in-place** (i.e., the input strided array is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import ssorthp from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssorthp@deno/mod.js';

var rand;
var sign;
var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

ssorthp( x.length, -1.0, x, -1 );
console.log( x );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284][@williams:1964a].
-   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103][@floyd:1964a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsorthp`][@stdlib/blas/ext/base/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using heapsort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsorthp`][@stdlib/blas/ext/base/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a strided array using heapsort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssort2hp`][@stdlib/blas/ext/base/ssort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ssorthp.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ssorthp

[test-image]: https://github.com/stdlib-js/blas-ext-base-ssorthp/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/blas-ext-base-ssorthp/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ssorthp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ssorthp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ssorthp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ssorthp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ssorthp/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ssorthp/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ssorthp/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ssorthp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ssorthp/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@williams:1964a]: https://doi.org/10.1145/512274.512284

[@floyd:1964a]: https://doi.org/10.1145/355588.365103

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsorthp]: https://github.com/stdlib-js/blas-ext-base-dsorthp/tree/deno

[@stdlib/blas/ext/base/gsorthp]: https://github.com/stdlib-js/blas-ext-base-gsorthp/tree/deno

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas-ext-base-ssort2hp/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
