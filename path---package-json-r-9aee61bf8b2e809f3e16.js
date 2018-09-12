webpackJsonp([0x6450e990ad87],{1158:function(s,e){s.exports={data:{package:{id:"json-r",stars:7,name:"json-r",version:"2.3.0",category:"library",flags:[],platforms:["browser","node"],description:"A BuckleScript lib for handling JSON in `Result` favor, written in [ReasonML](http://facebook.github.io/reason/).",keywords:["json","data serialization"],license:"MIT",updated:"2018-03-03T15:34:28.120Z",type:"published",score:.6047360854850343,quality:.8134015466979254,popularity:.03081743448152861,maintenance:.9997986268774908,readme:'<h1 id="jsonr"><a href="#jsonr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JsonR</h1>\n<p>A BuckleScript lib for handling JSON in <code>Result</code> favor, written in <a href="http://facebook.github.io/reason/">ReasonML</a>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Add <code>json-r</code> to your project\'s dependencies by <code>yarn</code> or <code>npm</code>, And add it to <code>bs-dependencies</code> for <code>bsconfig.json</code>, e.g.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n    <span class="hljs-string">"name"</span>: <span class="hljs-string">"coolproj"</span>,\n    <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"json-r"</span>\n    ]\n}</code></pre></div>\n<h3 id="basic-example"><a href="#basic-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic example</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">JsonR</span>.<span class="hljs-type">Json</span>;\nopen <span class="hljs-type">Js_result</span>;\n\n<span class="hljs-keyword">let</span> json = parse_result json_source;\n\n<span class="hljs-comment">/* Access a field and its value, return a Js_result type */</span>\n\n<span class="hljs-keyword">let</span> title = json |&gt; string_for <span class="hljs-string">"title"</span>;\n\n<span class="hljs-comment">/* or more verbose */</span>\n<span class="hljs-keyword">let</span> title = json |&gt; member <span class="hljs-string">"title"</span> |&gt; to_string;\n\n\n<span class="hljs-comment">/* you can also pass key path */</span>\n<span class="hljs-keyword">let</span> age = json |&gt; int_for <span class="hljs-string">"author.age"</span>;\n\n/ * or */\n<span class="hljs-keyword">let</span> age = json |&gt; member <span class="hljs-string">"author.age"</span> |&gt; to_int;\n\n<span class="hljs-keyword">switch</span> age {\n| <span class="hljs-type">Ok</span> a =&gt; <span class="hljs-type">DoWhatYouWant</span> a\n| <span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">HeyWeCantParseOutTheAge_CheckTheErrorMessage</span> e\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>You can open <code>__tests__/test.re</code> to view more examples.</p>\n<h3 id="advance-usage"><a href="#advance-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advance usage</h3>\n<p>Need to use the another <code>Result</code> type such as <code>Containers.Result</code>? Just <code>Module Json = JsonR.Impl Containers.Result;</code>.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>\n<p>MIT.</p>\n',homepageUrl:"https://github.com/cxa/JsonR",repositoryUrl:"https://github.com/cxa/JsonR",npmUrl:"https://www.npmjs.com/package/json-r",issuesUrl:"https://github.com/cxa/JsonR/issues",slug:"/package/json-r"}},pathContext:{id:"json-r"}}}});
//# sourceMappingURL=path---package-json-r-9aee61bf8b2e809f3e16.js.map