webpackJsonp([0x9cbc0c3858de],{1152:function(s,a){s.exports={data:{package:{id:"bs-reactstrap",stars:3,name:"bs-reactstrap",version:"0.1.2",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Reactstrap",keywords:["react","ui"],license:"MIT",updated:"2018-06-25T22:31:16.912Z",type:"published",score:.4731017979730718,quality:.3573834487954212,popularity:.04546834420852768,maintenance:.9999224081756022,readme:'<h1 id="bs-reactstrap"><a href="#bs-reactstrap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-reactstrap</h1>\n<p>This is Bucklescript bindings for <a href="https://reactstrap.github.io/">Reactstrap</a>. Currently they are autogenerated based on propTypes. Everything complex (basically not <code>string</code> or <code>bool</code>) is just type variable.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-reactstrap</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add bs-reactstrap to bs-depenencies in your bs-config. bs!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-reactstrap"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="usage-example"><a href="#usage-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage Example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-re"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReactstrap</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"SomeComponent"</span>);\n\n<span class="hljs-keyword">let</span> make = (~onChange, _children) =&gt; {\n  ...component,\n\n  render: _self =&gt; {\n    &lt;<span class="hljs-type">Button</span> color=<span class="hljs-string">"primary"</span> size=<span class="hljs-string">"lg"</span> onClick=(_e =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Hi!"</span>))&gt;\n      <span class="hljs-type">Hello</span>\n    &lt;/<span class="hljs-type">Button</span>&gt;\n  }\n};</code></pre></div>\n<p>Check <a href="https://reactstrap.github.io/components/">Reactstrap documentation</a> for available props.</p>\n',homepageUrl:"https://github.com/ahrefs/bs-reactstrap#readme",repositoryUrl:"https://github.com/ahrefs/bs-reactstrap",npmUrl:"https://www.npmjs.com/package/bs-reactstrap",issuesUrl:"https://github.com/ahrefs/bs-reactstrap/issues",slug:"/package/bs-reactstrap"}},pathContext:{id:"bs-reactstrap"}}}});
//# sourceMappingURL=path---package-bs-reactstrap-e1851306440014b5d5e8.js.map