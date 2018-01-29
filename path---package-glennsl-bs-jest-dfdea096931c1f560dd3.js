webpackJsonp([99835779810684],{1089:function(s,e){s.exports={data:{package:{id:"@glennsl/bs-jest",stars:61,name:"@glennsl/bs-jest",version:"0.3.3",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings to the Jest testing framework",keywords:["testing"],license:"MIT",updated:"2018-01-21T19:42:22.407Z",type:"published",score:.5252931945304821,quality:.8531083364692399,popularity:.10296300299471006,maintenance:.666638978690176,readme:'<h1 id="bs-jest"><a href="#bs-jest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-jest</h1>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/facebook/jest">Jest</a> - Very very <strong>experimental</strong> (yep, that\'s one less "very" than before! Progress!) and <strong>WIP</strong></p>\n<p><a href="https://npmjs.org/@glennsl/bs-jest"><img src="https://img.shields.io/npm/v/@glennsl/bs-jest.svg" alt="npm"></a>\n<a href="https://travis-ci.org/glennsl/bs-jest"><img src="https://img.shields.io/travis/glennsl/bs-jest/master.svg" alt="Travis"></a>\n<a href="https://coveralls.io/github/glennsl/bs-jest?branch=master"><img src="https://img.shields.io/coveralls/glennsl/bs-jest/master.svg" alt="Coveralls"></a>\n<a href="https://github.com/glennsl/bs-jest/blob/master/package.json"><img src="https://img.shields.io/david/glennsl/bs-jest.svg" alt="Dependencies"></a>\n<a href="https://github.com/glennsl/bs-jest/issues"><img src="https://img.shields.io/github/issues/glennsl/bs-jest.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/bs-jest/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/bs-jest.svg" alt="Last Commit"></a></p>\n<p><strong>NOTE:</strong> <em>NPM package has moved to <code>@glennsl/bs-jest</code>. Remember to update both <code>package.json</code> AND <code>bsconfig.json</code>.</em></p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<ul>\n<li><a href="https://facebook.github.io/jest/docs/en/api.html">Global</a>: Fully implemented and tested, apart from <code>require.*</code></li>\n<li><a href="https://facebook.github.io/jest/docs/en/expect.html">Expect</a>: Mostly implemented. Functionality that makes sense only for JS interop have been moved to <code>ExpectJs</code>. Some functionality does not make sense in a typed language, or is not possible to implement sensibly in ML.</li>\n<li><a href="https://facebook.github.io/jest/docs/en/mock-function-api.html">Mock Functions</a>: Experimental and unsafe implementation, very much in flux. The Jest bindings will most likely be relegated to the <code>MockJs</code> module as it\'s very quirky to use with native code. A separate native from-scratch implementation might suddenly appear as <code>Mock</code>.</li>\n<li><a href="https://facebook.github.io/jest/docs/en/jest-object.html">The Jest Object</a>: Fake timers are fully implemented and tested. Mock functionality has been moved to <code>JestJs</code>. It\'s mostly implemented, but experimental and largely untested.</li>\n<li><strong>Snapshotting</strong>: Expect functions exist and work, but there\'s currently no way to implement custom snapshot serializers.</li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\n\ndescribe(<span class="hljs-string">"Expect"</span>, () =&gt; {\n  open <span class="hljs-type">Expect</span>;\n\n  test(<span class="hljs-string">"toBe"</span>, () =&gt;\n    expect(<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) |&gt; toBe(<span class="hljs-number">3</span>))\n});\n\ndescribe(<span class="hljs-string">"Expect.Operators"</span>, () =&gt; {\n    open <span class="hljs-type">Expect</span>;\n    open! <span class="hljs-type">Expect</span>.<span class="hljs-type">Operators</span>;\n\n    test(<span class="hljs-string">"=="</span>, () =&gt;\n      expect(<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) === <span class="hljs-number">3</span>)\n  }\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"Expect"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span> <span class="hljs-keyword">in</span>\n         test <span class="hljs-string">"toBe"</span> (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; (expect (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>)) |&gt; (toBe <span class="hljs-number">3</span>)))\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"Expect.Operators"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span> <span class="hljs-keyword">in</span>\n         <span class="hljs-keyword">let</span> <span class="hljs-keyword">open!</span> <span class="hljs-type">Expect</span>.<span class="hljs-type">Operators</span> <span class="hljs-keyword">in</span>\n           test <span class="hljs-string">"=="</span> (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; (expect (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>)) == <span class="hljs-number">3</span>))</code></pre>\n      </div>\n    </div>\n  \n<p>See <a href="https://github.com/glennsl/bs-jest/tree/master/__tests__">the tests</a> for more examples.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save-dev @glennsl/bs-jest</code></pre></div>\n<p>Then add <code>@glennsl/bs-jest</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"@glennsl/bs-jest"</span>]\n}</code></pre></div>\n<p>Then add <code>__tests__</code> to <code>sources</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-string">"sources"</span>: [\n  {\n    <span class="hljs-string">"dir"</span>: <span class="hljs-string">"src"</span>\n  },\n  {\n    <span class="hljs-string">"dir"</span>: <span class="hljs-string">"__tests__"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"dev"</span>\n  }\n]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Put tests in a <code>__tests__</code> directory and use the suffix <code>*test.ml</code>/<code>*test.re</code> (Make sure to use valid module names. e.g. <code>&#x3C;name>_test.re</code> is valid while <code>&#x3C;name>.test.re</code> is not). When compiled they will be put in a <code>__tests__</code> directory under <code>lib</code>, with a <code>*test.js</code> suffix, ready to be picked up when you run <code>jest</code>. If you\'re not already familiar with <a href="https://github.com/facebook/jest">Jest</a>, see <a href="https://facebook.github.io/jest/">the Jest documentation</a>.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>For the moment, please refer to <a href="https://github.com/glennsl/bs-jest/blob/master/src/jest.mli">Jest.mli</a>.</p>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>git <span class="hljs-built_in">clone</span> https://github.com/glennsl/bs-jest.git\n<span class="hljs-built_in">cd</span> bs-jest\nnpm install</code></pre></div>\n<p>Then build and run tests with <code>npm test</code>, start watchers for <code>bsb</code>and <code>jest</code> with <code>npm run watch:bsb</code> and <code>npm run watch:jest</code> respectively. Install <code>screen</code> to be able to use <code>npm run watch:screen</code> to run both watchers in a single terminal window.</p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="031"><a href="#031" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.3.1</h3>\n<ul>\n<li>Moved repository from <code>reasonml-community/bs-jest</code> to <code>glennsl/bs-jest</code></li>\n<li>Renamed NPM package from <code>bs-jest</code> to <code>@glennsl/bs-jest</code></li>\n</ul>\n<h3 id="030"><a href="#030" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.3.0</h3>\n<ul>\n<li>Added <code>toThrowException</code></li>\n<li>Fixed an issue with custom Runner implementation shadowing the global <code>test</code> function from jest</li>\n<li>Fixed a typo in the js boundary of <code>not_ |> toBeLessThanEqual</code></li>\n</ul>\n<h3 id="020"><a href="#020" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.0</h3>\n<ul>\n<li>Removed deprecations</li>\n<li>Added <code>testAll</code>, <code>Only.testAll</code>, <code>Skip.testAll</code> that generates tests from a list of inputs</li>\n<li>Fixed type signature of <code>fail</code></li>\n<li>Added <code>expectFn</code></li>\n</ul>\n',homepageUrl:"https://github.com/glennsl/bs-jest#readme",repositoryUrl:"https://github.com/glennsl/bs-jest",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Fbs-jest",issuesUrl:"https://github.com/glennsl/bs-jest/issues",slug:"/package/@glennsl/bs-jest"}},pathContext:{id:"@glennsl/bs-jest"}}}});
//# sourceMappingURL=path---package-glennsl-bs-jest-dfdea096931c1f560dd3.js.map