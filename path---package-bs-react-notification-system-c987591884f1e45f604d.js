webpackJsonp([0x929c4688c514],{1146:function(s,a){s.exports={data:{package:{id:"bs-react-notification-system",stars:0,name:"bs-react-notification-system",version:"0.0.6",category:"binding",flags:[],platforms:["browser"],description:"Reason bindings for react-notification-system",keywords:["react","ui"],license:"MIT",updated:"2018-06-23T04:32:45.662Z",type:"published",score:.48460689413700175,quality:.4957769143864582,popularity:.01818186019020269,maintenance:.9414576250128381,readme:'<h1 id="reason-bindings-for-react-notification-system"><a href="#reason-bindings-for-react-notification-system" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for react-notification-system</h1>\n<p><a href="https://www.npmjs.com/package/bs-react-notification-system"><img src="https://img.shields.io/npm/v/bs-react-notification-system.svg" alt="npm"></a>  </p>\n<p><a href="https://reasonml.github.io/">Reason</a> bindings for <a href="https://github.com/igorprado/react-notification-system">react-notification-system</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>🚧 This is a WIP, not everything is supported yet. 🚧</p>\n<p>Feel free to create an issue or PR if you find anything missing.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-react-notification-system\nyarn add react-notification-system@0.2.x</code></pre></div>\n<p>Then add <code>bs-react-notification-system</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-react-notification-system"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> action =\n  | <span class="hljs-type">AddNotification</span>(string);\n\n<span class="hljs-keyword">type</span> state = {\n    _notificationSystem: <span class="hljs-keyword">ref</span>(option(<span class="hljs-type">ReasonReact</span>.reactRef)),\n};\n\n<span class="hljs-keyword">let</span> setNotificationSystemRef = (notificationRef, {<span class="hljs-type">ReasonReact</span>.state}) =&gt; \n  state._notificationSystem := <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(notificationRef) ;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent(<span class="hljs-string">"Notifications"</span>);\n\n<span class="hljs-keyword">let</span> addNotification = (message, state) =&gt; {   \n    <span class="hljs-keyword">switch</span> state._notificationSystem^ {\n    | <span class="hljs-type">None</span> =&gt; ()\n    | <span class="hljs-type">Some</span>(r) =&gt; <span class="hljs-type">ReasonReact</span>.refToJsObj(r)##addNotification({<span class="hljs-string">"message"</span>: message, <span class="hljs-string">"level"</span>: <span class="hljs-string">"success"</span>});      \n    }\n};\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n    ...component,\n    initialState: () =&gt; {_notificationSystem: <span class="hljs-keyword">ref</span>(<span class="hljs-type">None</span>) },\n    reducer: (action, state) =&gt;\n        <span class="hljs-keyword">switch</span> action {\n            | <span class="hljs-type">AddNotification</span>(message) =&gt;  <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">SideEffects</span>(((<span class="hljs-number">_</span>) =&gt; addNotification(message, state)))\n        },\n    render: ({handle, <span class="hljs-built_in">reduce</span>}) =&gt; (\n    &lt;div&gt;             \n        &lt;<span class="hljs-type">ReactNotificationSystem</span> <span class="hljs-keyword">ref</span>=(handle(setNotificationSystemRef)) /&gt;\n        &lt;button onClick=(<span class="hljs-built_in">reduce</span>( (<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">AddNotification</span>(<span class="hljs-string">"Hello"</span>))) &gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Click"</span>)) &lt;/button&gt; \n    &lt;/div&gt;\n  )\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> action =\n  | <span class="hljs-type">AddNotification</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">string</span>\n<span class="hljs-keyword">type</span> state = {\n  _notificationSystem: <span class="hljs-type">ReasonReact</span>.reactRef option <span class="hljs-built_in">ref</span>;}\n<span class="hljs-keyword">let</span> setNotificationSystemRef notificationRef { <span class="hljs-type">ReasonReact</span>.state = state } =\n  state._notificationSystem := (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt notificationRef)\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent <span class="hljs-string">"Notifications"</span>\n<span class="hljs-keyword">let</span> addNotification message state =\n  <span class="hljs-keyword">match</span> !(state._notificationSystem) <span class="hljs-keyword">with</span>\n  | <span class="hljs-type">None</span>  -&gt; <span class="hljs-literal">()</span>\n  | ((<span class="hljs-type">Some</span> (r))[@explicit_arity ]) -&gt;\n      (## (<span class="hljs-type">ReasonReact</span>.refToJsObj r) addNotification)\n        ([%bs.obj { message; level = <span class="hljs-string">"success"</span> }])\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    initialState = (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; { _notificationSystem = (<span class="hljs-built_in">ref</span> <span class="hljs-type">None</span>) });\n    reducer =\n      (<span class="hljs-keyword">fun</span> action  -&gt;\n         <span class="hljs-keyword">fun</span> state  -&gt;\n           <span class="hljs-keyword">match</span> action <span class="hljs-keyword">with</span>\n           | ((<span class="hljs-type">AddNotification</span> (message))[@explicit_arity ]) -&gt;\n               ((<span class="hljs-type">ReasonReact</span>.<span class="hljs-type">SideEffects</span>\n                   (((<span class="hljs-keyword">fun</span> _  -&gt; addNotification message state))))[@explicit_arity\n                                                                   ]));\n    render =\n      (<span class="hljs-keyword">fun</span> { handle; reduce }  -&gt;\n         ((div\n             ~children:[((<span class="hljs-type">ReactNotificationSystem</span>.createElement\n                            ~<span class="hljs-built_in">ref</span>:(handle setNotificationSystemRef)\n                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                       ((button\n                           ~onClick:(reduce\n                                       (<span class="hljs-keyword">fun</span> _  -&gt;\n                                          ((<span class="hljs-type">AddNotification</span> (<span class="hljs-string">"Hello"</span>))\n                                          [@explicit_arity ])))\n                           ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement <span class="hljs-string">"Click"</span>] <span class="hljs-literal">()</span>)\n                       [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="bindings"><a href="#bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> NotificationSystem</li>\n</ul>\n',homepageUrl:"https://github.com/bernalrs/bs-react-notification-system#readme",repositoryUrl:"https://github.com/bernalrs/bs-react-notification-system",npmUrl:"https://www.npmjs.com/package/bs-react-notification-system",issuesUrl:"https://github.com/bernalrs/bs-react-notification-system/issues",slug:"/package/bs-react-notification-system"}},pathContext:{id:"bs-react-notification-system"}}}});
//# sourceMappingURL=path---package-bs-react-notification-system-c987591884f1e45f604d.js.map