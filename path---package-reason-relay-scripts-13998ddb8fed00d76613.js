webpackJsonp([0x7c79dd341995],{1220:function(e,s){e.exports={data:{package:{id:"reason-relay-scripts",stars:9,name:"reason-relay-scripts",version:"0.6.11-2",category:"tool",flags:["neglected"],platforms:["node"],description:"Scripts for Create React App with ReasonML and Relay.",keywords:["react","boilerplate"],license:"BSD-3-Clause",updated:"2018-06-24T08:40:06.367Z",type:"published",score:.508218218066786,quality:.5555889629206358,popularity:.06775119741915214,maintenance:.9080817431254058,readme:'<h1 align="center">\n  <img height="300" src="https://github.com/rrdelaney/reason-relay-scripts/blob/master/docs/cra.png">\n  <br>\n  Reason Scripts\n </h1>\n<pre align="center">\n  $ yarn create react-app my-app -- --scripts-version reason-relay-scripts\n</pre>\n<p>Reason Scripts provides a JS-like development environment for developing web apps with the\n<a href="https://reasonml.github.io/">Reason</a> programming language and\n<a href="https://facebook.github.io/react">React</a>. It bootstraps an environment to automatically\ncompile all Reason code to JS, provide features like reloading and bundling, and seamlessly\nuse JS code from Reason.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<h3 id="using-yarn"><a href="#using-yarn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using <a href="https://yarnpkg.com/">Yarn</a></h3>\n<blockquote>\n<p>Note that using <code>yarn create</code> requires Yarn 0.25 or later</p>\n</blockquote>\n<p>To create a new app using Reason and React, run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install -g bs-platform\n$ yarn create react-app &lt;app-name&gt; -- --scripts-version reason-relay-scripts\n$ <span class="hljs-built_in">cd</span> &lt;app-name&gt;\n$ yarn start</code></pre></div>\n<h3 id="using-npm"><a href="#using-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using npm</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install -g bs-platform create-react-app\n$ create-react-app &lt;app-name&gt; --scripts-version reason-relay-scripts\n$ <span class="hljs-built_in">cd</span> &lt;app-name&gt;\n$ npm start</code></pre></div>\n<h3 id="directory-layout"><a href="#directory-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Directory Layout</h3>\n<p>Creating a new app makes an <code>&#x3C;app-name></code> directory with the following layout:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>&lt;app-name&gt;/\n  README.md\n  node_modules/\n  package.json\n  bsconfig.json\n  .gitignore\n  public/\n    favicon.ico\n    index.html\n  src/\n    index.re\n    index.css\n    app.re\n    app.css\n    logo.svg</code></pre></div>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<h3 id="everything-from-create-react-app"><a href="#everything-from-create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md">Everything from Create React App</a></h3>\n<ul>\n<li>Highly-optimized build configuration</li>\n<li>Pre-configured test runner</li>\n<li>Friendly developer environment</li>\n<li>"eject" Webpack config</li>\n<li>Environment variable configuration</li>\n<li>Automatic PWA configuration</li>\n<li>Low configuration builds</li>\n</ul>\n<h3 id="reason-entrypoint"><a href="#reason-entrypoint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason Entrypoint</h3>\n<p>The entry point to the app is <code>src/index.re</code>. From the start your new\napp will be based on Reason, but can seamlessly interop with existing JS\nfiles and projects!</p>\n<h3 id="automatic-compilation-of-reasonocaml-files"><a href="#automatic-compilation-of-reasonocaml-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automatic Compilation of Reason/Ocaml files</h3>\n<p>Any Reason/Ocaml file will be automatically compiled to a JS file. For example,\na file called <code>math_fns.re</code> can be required by a JS file:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>import { add } from <span class="hljs-string">\'./math_fns.re\'</span>\n\nconst sum = add(<span class="hljs-number">1</span>, <span class="hljs-number">4</span>)</code></pre></div>\n<h3 id="jest-integration"><a href="#jest-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Jest Integration</h3>\n<p>Reason Scripts will automatically configure a <a href="https://facebook.github.io/jest">Jest</a> environment\nto test Reason code. Any code found in a file ending with <code>_test.re</code>, <code>_test.ml</code>\nor <code>test.js</code> will be considered a test and run with Jest. From these files, the normal\nJest API can be used interacting with any other modules defined in your app. For example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* math_fns.re */</span>\n\n<span class="hljs-keyword">let</span> add x y =&gt; x + y;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1525</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* math_fns_test.re */</span>\n\nopen <span class="hljs-type">Jest</span>;\n\ntest <span class="hljs-string">"addition"</span> (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; {\n  <span class="hljs-keyword">let</span> num_1 = <span class="hljs-number">10</span>;\n  <span class="hljs-keyword">let</span> num_2 = <span class="hljs-number">12</span>;\n\n  expect (<span class="hljs-type">Math_fns</span>.add num_1 num_2) |&gt; toBe <span class="hljs-number">22</span>;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Or if you prefer writing your tests in JavaScript, just don\'t forget to import the tested module:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>/* maths_fns.test.js */\n\nimport Math_fns from <span class="hljs-string">\'./math_fns.re\'</span>\n\n<span class="hljs-built_in">test</span>(<span class="hljs-string">\'addition\'</span>, () =&gt; {\n  const num1 = <span class="hljs-number">10</span>\n  const num2 = <span class="hljs-number">12</span>\n\n  expect(Math_fns.add(num1, num2)).toBe(<span class="hljs-number">22</span>)\n})</code></pre></div>\n<p>For more documentation on the Jest API, see <a href="https://github.com/reasonml-community/bs-jest">bs-jest</a></p>\n<h3 id="importing-non-reason-files"><a href="#importing-non-reason-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing non-Reason files</h3>\n<p>You can require CSS files with:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%bs.raw {|require(\'./<span class="hljs-type">App</span>.css\')|}];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = [%bs.raw {|require(<span class="hljs-char">\'./App.css\'</span>)|}]</code></pre>\n      </div>\n    </div>\n  \n<p>or any other kind of file (like SVG\'s) with:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> logo : string = [%bs.raw {|require(\'./logo.svg\')|}];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> logo: <span class="hljs-built_in">string</span> = [%bs.raw {|require(<span class="hljs-char">\'./logo.svg\'</span>)|}]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="help-tips-and-tricks"><a href="#help-tips-and-tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Help, Tips, and Tricks</h2>\n<p><details>\n<summary><b>My editor isn\'t autocompleting</b></summary>\n<p>Editor support is provided by Merlin. To generate a <code>.merlin</code> file, run the app\nwith <code>npm start</code> or <code>yarn start</code>.</p>\n<p>See our full editor integration guide here: <a href="https://reasonml.github.io/guide/editor-tools/editors-plugins">https://reasonml.github.io/guide/editor-tools/editors-plugins</a></p>\n</details></p>\n<p><details>\n<summary><b>I don\'t want reason-relay-scripts to clear my terminal</b></summary>\n<p>Use <code>FORCE_COLOR=true react-scripts start | cat -</code> as your start command instead</p>\n</details></p>\n<p><details>\n<summary><b>Reason is awesome! Where can I learn more?</b></summary>\n<p>Checkout our fancy website: <a href="https://reasonml.github.io/!">https://reasonml.github.io/!</a></p>\n<p>We also have a very active Discord to come talk about Reason, and ask for help: <a href="https://discordapp.com/invite/reasonml">https://discordapp.com/invite/reasonml</a></p>\n</details></p>\n',homepageUrl:"https://github.com/dwwoelfel/reason-relay-scripts#readme",repositoryUrl:"https://github.com/dwwoelfel/reason-relay-scripts",npmUrl:"https://www.npmjs.com/package/reason-relay-scripts",issuesUrl:"https://github.com/reasonml-community/reason-scripts/issues",slug:"/package/reason-relay-scripts"}},pathContext:{id:"reason-relay-scripts"}}}});
//# sourceMappingURL=path---package-reason-relay-scripts-13998ddb8fed00d76613.js.map