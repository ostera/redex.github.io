webpackJsonp([0xb401a0082632],{1282:function(e,a){e.exports={data:{package:{id:"unpublished/slogsdon/bsb-native-starter",stars:1,name:"slogsdon/bsb-native-starter",version:"1.0.0",category:"boilerplate",flags:["neglected"],platforms:["node"],description:"",keywords:["boilerplate"],license:"MIT",updated:"2018-07-09T16:51:26.902Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bsb-native-starter"><a href="#bsb-native-starter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsb-native-starter</h1>\n<p>Quick and simple starter project to leverage <a href="https://github.com/bsansouci/bsb-native"><code>bsb-native</code></a> and <a href="https://reasonml.github.io/">Reason</a>/<a href="https://ocaml.org/">OCaml</a> in order to build an application.</p>\n<h2 id="install-dependencies"><a href="#install-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Dependencies</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn install <span class="hljs-comment"># or npm install</span></code></pre></div>\n<h2 id="build-project"><a href="#build-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Project</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build <span class="hljs-comment"># or npm run build</span></code></pre></div>\n<h2 id="run-project"><a href="#run-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run Project</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn start <span class="hljs-comment"># or npm start</span></code></pre></div>\n<h2 id="use-the-bytecode-backend"><a href="#use-the-bytecode-backend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use the <code>bytecode</code> Backend</h2>\n<p>By default, this project will build using the <code>native</code> backend for <code>bsb</code>. To use the <code>bytecode</code> backend, update the <code>build</code> script in <code>package.json</code> to remove <code>-backend native</code> or update it to <code>-backend bytecode</code>. This will also require a change to the <code>start</code> script in <code>package.json</code>, which defaults to <code>./lib/bs/native/main.native</code>, to be changed to <code>./lib/bs/bytecode/main.byte</code>.</p>\n<blockquote>\n<p>Note: The <code>bytecode</code> backend is already configured in <code>bsconfig.json</code>.</p>\n</blockquote>\n<h2 id="add-the-js-backend"><a href="#add-the-js-backend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add the <code>js</code> Backend</h2>\n<p>In theory, this project will also support generating JavaScript code by configuring the <code>js</code> backend in <code>bsconfig.json</code>\'s <code>entries</code> property:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"entries"</span>: [\n    {\n      <span class="hljs-string">"backend"</span>: <span class="hljs-string">"js"</span>,\n      <span class="hljs-string">"main-module"</span>: <span class="hljs-string">"Main"</span>\n    }\n  ]\n}</code></pre></div>\n<p>This will ultimately depend on how this project is developed.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>\n<p>This starter project is licensed under the MIT License. See <a href="LICENSE">LICENSE</a> for more details.</p>\n',homepageUrl:null,repositoryUrl:"https://github.com/slogsdon/bsb-native-starter",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/slogsdon/bsb-native-starter"}},pathContext:{id:"unpublished/slogsdon/bsb-native-starter"}}}});
//# sourceMappingURL=path---package-unpublished-slogsdon-bsb-native-starter-629799f09160701b58ed.js.map