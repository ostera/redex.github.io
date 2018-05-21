webpackJsonp([51120383573075],{1151:function(s,a){s.exports={data:{package:{id:"bs-react-pdf",stars:1,name:"bs-react-pdf",version:"0.0.13",category:"binding",flags:[],platforms:["browser","node"],description:"react-pdf bindings for bucklescript",keywords:["react"],license:"MIT",updated:"2018-05-10T00:33:18.953Z",type:"published",score:.4647779817840326,quality:.44115564575018873,popularity:.025097427530981112,maintenance:.9247062526375218,readme:'<h1 id="bs-react-pdf-npm-version"><a href="#bs-react-pdf-npm-version" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-pdf <a href="https://www.npmjs.com/package/bs-react-pdf"><img src="https://img.shields.io/npm/v/bs-react-pdf.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/diegomura/react-pdf">react-pdf</a> bindings for <a href="https://bucklescript.github.io/bucklescript/">bucklescript</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li><code>$ npm i bs-react-pdf</code></li>\n<li>Add <code>bs-react-pdf</code> to <code>bs-dependencies</code> section of your <code>bsconfig.json</code></li>\n</ol>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/meafmira/bs-react-pdf/tree/master/examples">Examples</a></h2>\n<h3 id="document"><a href="#document" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Document</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReactPdf</span>.<span class="hljs-type">Core</span>;\n\n<span class="hljs-keyword">let</span> styles =\n  <span class="hljs-type">StyleSheet</span>.create({\n    <span class="hljs-string">"page"</span>: {<span class="hljs-string">"flexDirection"</span>: <span class="hljs-string">"row"</span>, <span class="hljs-string">"backgroundColor"</span>: <span class="hljs-string">"#fff"</span>},\n    <span class="hljs-string">"section"</span>: {<span class="hljs-string">"margin"</span>: <span class="hljs-number">10</span>, <span class="hljs-string">"padding"</span>: <span class="hljs-number">10</span>, <span class="hljs-string">"flexGrow"</span>: <span class="hljs-number">1</span>}\n  });\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent(<span class="hljs-string">"MyDocument"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  reducer: ((), _state: unit) =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">NoUpdate</span>,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">Document</span>&gt;\n      &lt;<span class="hljs-type">Page</span> size=<span class="hljs-string">"A4"</span> style=styles##page&gt;\n        &lt;<span class="hljs-type">View</span> style=styles##section&gt;\n          &lt;<span class="hljs-type">Text</span> key=<span class="hljs-string">"hello"</span>&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Section #1"</span>)) &lt;/<span class="hljs-type">Text</span>&gt;\n        &lt;/<span class="hljs-type">View</span>&gt;\n        &lt;<span class="hljs-type">View</span> style=styles##section&gt;\n          &lt;<span class="hljs-type">Text</span>&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Section #2"</span>)) &lt;/<span class="hljs-type">Text</span>&gt;\n        &lt;/<span class="hljs-type">View</span>&gt;\n      &lt;/<span class="hljs-type">Page</span>&gt;\n    &lt;/<span class="hljs-type">Document</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReactPdf</span>.<span class="hljs-type">Core</span>\n<span class="hljs-keyword">let</span> styles =\n  <span class="hljs-type">StyleSheet</span>.create\n    ([%bs.obj\n       {\n         page =\n           ([%bs.obj { flexDirection = <span class="hljs-string">"row"</span>; backgroundColor = <span class="hljs-string">"#fff"</span> }]);\n         section = ([%bs.obj { margin = <span class="hljs-number">10</span>; padding = <span class="hljs-number">10</span>; flexGrow = <span class="hljs-number">1</span> }])\n       }])\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent <span class="hljs-string">"MyDocument"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    reducer = (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-keyword">fun</span> (_state : <span class="hljs-built_in">unit</span>)  -&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">NoUpdate</span>);\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Document</span>.createElement\n             ~children:[((<span class="hljs-type">Page</span>.createElement ~size:<span class="hljs-string">"A4"</span>\n                            ~style:(## styles page)\n                            ~children:[((<span class="hljs-type">View</span>.createElement\n                                           ~style:(## styles section)\n                                           ~children:[((<span class="hljs-type">Text</span>.createElement\n                                                          ~key:<span class="hljs-string">"hello"</span>\n                                                          ~children:[\n                                                                    <span class="hljs-type">ReasonReact</span>.stringToElement\n                                                                    <span class="hljs-string">"Section #1"</span>]\n                                                          <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ]);\n                                      ((<span class="hljs-type">View</span>.createElement\n                                          ~style:(## styles section)\n                                          ~children:[((<span class="hljs-type">Text</span>.createElement\n                                                         ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement\n                                                                    <span class="hljs-string">"Section #2"</span>]\n                                                         <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h3 id="save-in-a-file"><a href="#save-in-a-file" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Save in a file</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReactPdfNode</span>.render(&lt;<span class="hljs-type">MyDocument</span> /&gt;, <span class="hljs-string">"example.pdf"</span>)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(() =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve @@ <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Pdf created"</span>));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  (<span class="hljs-type">ReactPdfNode</span>.render ((<span class="hljs-type">MyDocument</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n     <span class="hljs-string">"example.pdf"</span>)\n    |&gt;\n    (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_\n       (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve @@ (<span class="hljs-type">Js</span>.log <span class="hljs-string">"Pdf created"</span>)))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/meafmira/bs-react-pdf#readme",repositoryUrl:"https://github.com/meafmira/bs-react-pdf",npmUrl:"https://www.npmjs.com/package/bs-react-pdf",issuesUrl:"https://github.com/meafmira/bs-react-pdf/issues",slug:"/package/bs-react-pdf"}},pathContext:{id:"bs-react-pdf"}}}});
//# sourceMappingURL=path---package-bs-react-pdf-c7135ae077f80af28f73.js.map