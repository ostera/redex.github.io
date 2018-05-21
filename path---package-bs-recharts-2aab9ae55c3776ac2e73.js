webpackJsonp([67752715691293],{1158:function(s,a){s.exports={data:{package:{id:"bs-recharts",stars:1,name:"bs-recharts",version:"0.0.3",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Recharts",keywords:["react","ui"],license:"MIT",updated:"2018-05-12T11:28:44.760Z",type:"published",score:.4819731653368928,quality:.40489566237594543,popularity:.035143431919407456,maintenance:.9948693298637616,readme:'<h1 id="bs-recharts"><a href="#bs-recharts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-recharts</h1>\n<p>This is Bucklescript bindings for <a href="http://recharts.org/">Recharts</a>. It is not completed, we are adding bindings as we go.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-recharts</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add bs-recharts to bs-depenencies in your bs-config. bs!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-recharts"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="usage-example"><a href="#usage-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage Example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-re"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsRecharts</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"SomeComponent"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n\n  render: (data, _self) =&gt; {\n    &lt;<span class="hljs-type">ResponsiveContainer</span> height=<span class="hljs-number">200</span>&gt;\n      &lt;<span class="hljs-type">BarChart</span>\n        barCategoryGap=<span class="hljs-number">0.5</span>\n        margin={<span class="hljs-string">"top"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"right"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"bottom"</span>: <span class="hljs-number">0</span>, <span class="hljs-string">"left"</span>: <span class="hljs-number">0</span>}\n        data=data&gt;\n        &lt;<span class="hljs-type">Bar</span>\n          name=<span class="hljs-string">"Some bar"</span>\n          dataKey=<span class="hljs-string">"key1"</span>\n          fill=<span class="hljs-string">"#2078b4"</span>\n          stackId=<span class="hljs-string">"a"</span>\n        /&gt;\n        &lt;<span class="hljs-type">Bar</span>\n          name=<span class="hljs-string">"Other bar"</span>\n          dataKey=<span class="hljs-string">"key2"</span>\n          fill=<span class="hljs-string">"#ff7f02"</span>\n          stackId=<span class="hljs-string">"a"</span>\n        /&gt;\n        &lt;<span class="hljs-type">Tooltip</span> /&gt;\n        &lt;<span class="hljs-type">Legend</span> align=<span class="hljs-string">"left"</span> iconType=<span class="hljs-string">"circle"</span> /&gt;\n      &lt;/<span class="hljs-type">BarChart</span>&gt;\n    &lt;/<span class="hljs-type">ResponsiveContainer</span>&gt;\n  }\n};</code></pre></div>\n<p>Check <a href="http://recharts.org/en-US/api">Reacharts documentation</a> for available props.</p>\n',homepageUrl:"https://github.com/ahrefs/bs-recharts#readme",repositoryUrl:"https://github.com/ahrefs/bs-recharts",npmUrl:"https://www.npmjs.com/package/bs-recharts",issuesUrl:"https://github.com/ahrefs/bs-recharts/issues",slug:"/package/bs-recharts"}},pathContext:{id:"bs-recharts"}}}});
//# sourceMappingURL=path---package-bs-recharts-2aab9ae55c3776ac2e73.js.map