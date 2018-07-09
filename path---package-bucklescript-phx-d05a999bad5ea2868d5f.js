webpackJsonp([70217186925978],{1174:function(s,e){s.exports={data:{package:{id:"bucklescript-phx",stars:20,name:"bucklescript-phx",version:"0.1.3",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript binding for Phoenix Channel/Presence to Phoenix's official JavaScript client",keywords:["utilities"],license:"LGPL-3.0",updated:"2018-07-06T12:40:41.003Z",type:"published",score:.2326020593943849,quality:.5065158139712668,popularity:.053834877433054505,maintenance:.17658602314695943,readme:'<h1 id="bucklescript-phoenix"><a href="#bucklescript-phoenix" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BuckleScript Phoenix</h1>\n<p><a href="https://nodei.co/npm/bucklescript-phx/"><img src="https://nodei.co/npm/bucklescript-phx.png?compact=true" alt="NPM"></a></p>\n<p><a href="https://travis-ci.org/OvermindDL1/bucklescript-phx"><img src="https://travis-ci.org/phoenix-china/bucklescript-phx.svg?branch=master" alt="Build Status"></a></p>\n<h4 id="bucklescript-binding-for-phoenix-channelpresence-to-phoenixs-official-javascript-client"><a href="#bucklescript-binding-for-phoenix-channelpresence-to-phoenixs-official-javascript-client" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BuckleScript binding for Phoenix Channel/Presence to Phoenix\'s official JavaScript client.</h4>\n<h4 id="this-is-usable-now"><a href="#this-is-usable-now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>This is usable now.</h4>\n<h4 id="feel-free-to-create-prs"><a href="#feel-free-to-create-prs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Feel free to create PRs.</h4>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Connect socket</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Join channel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Push event</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Handle event</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Presence</li>\n<li class="task-list-item"><input type="checkbox" disabled> Support The Elm Architecture on BuckleScript (<a href="BuckleScript-tea">https://github.com/OvermindDL1/bucklescript-tea</a>)</li>\n<li class="task-list-item"><input type="checkbox" disabled> Fallback support for polling.</li>\n</ul>\n<h4 id="to-install"><a href="#to-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>To install</h4>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install -save bucklescript-phx</code></pre></div>\n<h4 id="please-update-your-bsconfigjson-to-make-bsb-aware-of-this-dependency"><a href="#please-update-your-bsconfigjson-to-make-bsb-aware-of-this-dependency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Please update your <code>bsconfig.json</code> to make <code>bsb</code> aware of this dependency</h4>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bucklescript-phx"</span>\n  ]</code></pre></div>\n<h4 id="notice"><a href="#notice" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notice:</h4>\n<ol>\n<li>\n<p>Please add official Phoenix client as your dependency to make sure BuckleScript is able to require Phoenix\'s js.</p>\n</li>\n<li>\n<p>Meta of Presence and payload of incoming event are decalred as <code>Js_json.t</code> which means you need to decode it with your prefered decoder (in TEA it is very convenient with <code>Json.Decoder.decodeValue</code>).</p>\n</li>\n<li>\n<p>The bindings are based on <a href="DefinitelyTyped">https://github.com/DefinitelyTyped/DefinitelyTyped</a>. There might be some error on mapping the types. Please help correct them if you find anything wrong. Thank you!</p>\n</li>\n</ol>\n<h4 id="here-are-the-examples"><a href="#here-are-the-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Here are the examples:</h4>\n<p>To join a channel:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Phx</span>\n\n<span class="hljs-keyword">let</span> handleReiceive event any =\n  <span class="hljs-keyword">match</span> event <span class="hljs-keyword">with</span>\n  | <span class="hljs-string">"ok"</span> -&gt; <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleReiceive:"</span> ^ event, <span class="hljs-string">"Joined"</span>)\n  | <span class="hljs-string">"error"</span> -&gt; <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleReiceive:"</span> ^ event, <span class="hljs-string">"Failed to join channel"</span>)\n  | _ -&gt; <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleReiceive:"</span> ^ event, any)\n\n<span class="hljs-keyword">let</span> handleEvent event response =\n  <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleEvent:"</span> ^ event, response) <span class="hljs-keyword">in</span>\n  <span class="hljs-literal">()</span>\n\n\n<span class="hljs-keyword">let</span> handleSyncState response =\n  <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleSyncState"</span>, response) <span class="hljs-keyword">in</span>\n  <span class="hljs-comment">(*let _ = Js.log (Array.iter (fun key -&gt; Js.log (Js_dict.unsafeGet response key)) (Js_dict.keys response) ) in*)</span>\n  <span class="hljs-keyword">let</span> _presences  =  <span class="hljs-type">Presence</span>.syncState (<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.empty <span class="hljs-literal">()</span>) response <span class="hljs-keyword">in</span>\n  <span class="hljs-literal">()</span>\n\n<span class="hljs-keyword">let</span> handleSyncDiff diff =\n  <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleSyncDiff:diff"</span>, diff) <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> presences  =  <span class="hljs-type">Presence</span>.syncDiff (<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.empty <span class="hljs-literal">()</span>) diff <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-string">"handleSyncDiff:presences"</span>, presences) <span class="hljs-keyword">in</span>\n  <span class="hljs-literal">()</span>\n\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> socket = initSocket <span class="hljs-string">"/socket"</span>\n               |&gt; connectSocket\n               |&gt; putOnClose (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span> -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"Socket closed"</span>) <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> channel = socket\n                |&gt; initChannel <span class="hljs-string">"user:lobby"</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> _ = channel\n          |&gt; putOn <span class="hljs-string">"from_server"</span> (handleEvent <span class="hljs-string">"from:server"</span>)\n          |&gt; putOnSyncState handleSyncState\n          |&gt; putOnsyncDiff handleSyncDiff\n          |&gt; joinChannel\n          |&gt; putReceive <span class="hljs-string">"ok"</span> (handleReiceive <span class="hljs-string">"ok"</span>)\n          |&gt; putReceive <span class="hljs-string">"error"</span> (handleReiceive <span class="hljs-string">"error"</span>) <span class="hljs-keyword">in</span>\n  push <span class="hljs-string">"new:message"</span> [%bs.obj { user = <span class="hljs-string">"Hello, Elixir! This is a greeting from BuckleScript!"</span>} ] channel</code></pre></div>\n',homepageUrl:"https://github.com/phoenix-china/bucklescript-phx#readme",repositoryUrl:"https://github.com/phoenix-china/bucklescript-phx",npmUrl:"https://www.npmjs.com/package/bucklescript-phx",issuesUrl:"https://github.com/phoenix-china/bucklescript-phx/issues",slug:"/package/bucklescript-phx"}},pathContext:{id:"bucklescript-phx"}}}});
//# sourceMappingURL=path---package-bucklescript-phx-d05a999bad5ea2868d5f.js.map