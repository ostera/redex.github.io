webpackJsonp([0xb8f6d2c8362a],{1276:function(e,s){e.exports={data:{package:{id:"unpublished/Schmavery/reprocessing",stars:386,name:"Schmavery/reprocessing",version:"0.1.0",category:"library",flags:[],platforms:["browser","native"],description:"Processing library for Reason",keywords:["opengl","graphics"],license:"MIT",updated:"2018-06-20T09:10:45.012Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reprocessing"><a href="#reprocessing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reprocessing</h1>\n<p><a href="https://travis-ci.org/Schmavery/reprocessing"><img src="https://travis-ci.org/Schmavery/reprocessing.svg?branch=master" alt="Build Status"></a>\n<a href="https://ci.appveyor.com/project/Schmavery/reprocessing/branch/master"><img src="https://ci.appveyor.com/api/projects/status/jgaaw641624db0pq/branch/master?svg=true&#x26;passingText=windows%20-%20OK&#x26;failingText=windows%20-%20Failing" alt="Build status"></a></p>\n<p>This is a high-level drawing library, inspired by <a href="https://processing.org">Processing</a>, allowing you to write code that\'ll run on the web (using WebGL) and natively (using OpenGL).</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>The <a href="https://schmavery.github.io/reprocessing/">web environment</a> is the simplest way to try reprocessing. (It uses an older verison of the Reason syntax though, we\'re working on fixing that).</p>\n<p>The 2nd simplest way to try is to clone <a href="https://github.com/bsansouci/reprocessing-example">reprocessing-example</a>.</p>\n<p>See <a href="#projects-using-reprocessing">below</a> for projects using Reprocessing!</p>\n<!--!\n```reason;shared(sandbox)\n[@bs.val] external sandboxCanvasId: string = "";\n[@bs.val] external sandboxCanvas: \'canvas = "";\n[@bs.val] external containerDiv: \'node = "";\n[@bs.send] external addEventListener: (\'node, string, \'eventT => unit) => unit = "addEventListener";\nlet id = sandboxCanvasId;\naddEventListener(containerDiv, "mouseleave", (_) => Reprocessing.playPause(id, false) |> ignore);\naddEventListener(containerDiv, "mouseenter", (_) => Reprocessing.playPause(id, true) |> ignore);\nReprocessing.setScreenId(sandboxCanvasId);\n```\n-->\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install schmavery/reprocessing</code></pre></div>\n<h3 id="example-1"><a href="#example-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;use(sandbox);canvas"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n\n<span class="hljs-keyword">let</span> setup = (env) =&gt; {\n  <span class="hljs-type">Env</span>.size(~width=<span class="hljs-number">200</span>, ~height=<span class="hljs-number">200</span>, env);\n};\n\n<span class="hljs-keyword">let</span> draw = (_state, env) =&gt; {\n  <span class="hljs-type">Draw</span>.background(<span class="hljs-type">Constants</span>.black, env);\n  <span class="hljs-type">Draw</span>.fill(<span class="hljs-type">Constants</span>.red, env);\n  <span class="hljs-type">Draw</span>.rect(~pos=(<span class="hljs-number">50</span>, <span class="hljs-number">50</span>), ~width=<span class="hljs-number">100</span>, ~height=<span class="hljs-number">100</span>, env)\n};\n\nrun(~setup, ~draw, <span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h3>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run build</code></pre></div>\n<p>This will draw a simple red square on a black background.  Compare this to <a href="https://github.com/bsansouci/reasonglexampleproject/blob/simple/src/index.re">reglexampleproject</a>, which takes 200+ lines to do the exact same thing.  This difference is even more notable on bigger projects.  Check out the code for a <a href="https://github.com/Schmavery/reprocessing/blob/master/examples/redsquare.re">draggable red square</a>.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p>There are a couple demos inside <code>examples</code>. Run <code>npm i</code> to install all deps and <code>npm run build</code> to build to JS (default). Open <code>index.html</code> in safari (or use <code>python -m SimpleHTTPServer 8000</code> to spawn a static server and go to <code>localhost:8000</code> in chrome).</p>\n<p>Run <code>npm run build:bytecode</code> to build to a bytecode executable and run <code>./lib/bs/bytecode/index.byte</code>.</p>\n<p>Run <code>npm run build:native</code> to build to a native executable and run <code>./lib/bs/native/index.native</code>.</p>\n<p>See also <a href="https://github.com/Schmavery/FlappyBird">FlappyBird</a> or <a href="https://github.com/bsansouci/reprocessing-example/tree/2048">2048</a> for slightly bigger examples.</p>\n<h1 id="some-differences-from-processing"><a href="#some-differences-from-processing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some Differences from Processing</h1>\n<ul>\n<li>\n<p>There is no magic - everything is proper Reason code.  This means that you have to call <code>Reprocessing.run</code> with the functions that you want to use.  You also have a couple of options about which utility modules to open.  See the <code>examples</code> directory for some different ways to do this.  It is recommended to <code>open Reprocessing</code> at the top, and then you can optionally open <code>Draw</code>, <code>Env</code> and <code>Utils</code> to make it look more like Processing code. Alternatively, they can be used directly, as can be seen above.</p>\n</li>\n<li>\n<p>For state management, we encourage the use of the <code>state</code> value that Reprocessing manages for the user.  To use this, decide on a datatype representing the state and return the initial value from <code>setup</code>.  This will be persisted behind the scenes and passed to every callback (such as <code>draw</code> and <code>mouseDown</code>).  Each callback should return the new value of the state (or the old value if it doesn\'t change).</p>\n</li>\n<li>\n<p>There are no built-in variables like <code>width</code> and <code>mouseX</code>.  Instead, these are functions that are called, passing in an environment object that is always provided.</p>\n</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(1);no-run"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n<span class="hljs-keyword">let</span> draw = (state, env) =&gt; {\n  <span class="hljs-keyword">let</span> w = <span class="hljs-type">Env</span>.width(env);\n  print_endline(<span class="hljs-string">"The current width is:"</span> ++ string_of_int(w))\n};</code></pre></div>\n<ul>\n<li>\n<p>The builtin <code>map</code> function is called <code>remap</code> instead to avoid confusion with the well-known <code>List.map</code> function which maps over a list of values. As, according to the Processing docs, this function "Re-maps a number from one range to another.", this naming seems appropriate.</p>\n</li>\n<li>\n<p>Because of the limitations of Reason, several utility functions that would otherwise accept either an integer or a float now expose a version with an <code>f</code> suffix, which supports floats.  Ex: <code>random</code> vs <code>randomf</code>.</p>\n</li>\n<li>\n<p>Points are expressed as tuples.  Instead of exposing a <code>mouseX</code> and <code>mouseY</code>, there is a <code>mouse</code>, which is a tuple of x and y values.</p>\n</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(1);no-run"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n<span class="hljs-keyword">let</span> draw = (state, env) =&gt; {\n  <span class="hljs-keyword">let</span> (x, y) = <span class="hljs-type">Env</span>.mouse(env);\n  print_endline(<span class="hljs-string">"The current mouse position is:"</span> ++ (string_of_int(x) ++ string_of_int(y)))\n};</code></pre></div>\n<h1 id="using-fonts"><a href="#using-fonts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Fonts</h1>\n<p>The story for using fonts in your Reprocessing app is still under some development to make it nicer.  Right now we have support for writing text in a font defined in the <a href="http://www.angelcode.com/products/bmfont/">Angel Code font</a> format. This is basically a bitmap of packed glyph textures along with a text file that describes it.</p>\n<p>Check out <a href="https://github.com/bsansouci/font-generator">font-generator</a> for a tool that can take any truetype or opentype font and output font files that Reprocessing can use.</p>\n<p>The assets folder of this repo also has an <a href="https://github.com/Schmavery/reprocessing/tree/master/assets/font">example</a> of a font that can be copied to your project and used.  In order to use a font once you have the files:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reason ;prefix(2);suffix(1);no-run"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Reprocessing</span>;\n<span class="hljs-keyword">let</span> fn = (filename, env) =&gt; {\n  <span class="hljs-keyword">let</span> font = <span class="hljs-type">Draw</span>.loadFont(~filename, env);\n  <span class="hljs-type">Draw</span>.text(~font, ~body=<span class="hljs-string">"Test!!!"</span>, ~pos=(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>), env);\n}</code></pre></div>\n<h2 id="projects-using-reprocessing"><a href="#projects-using-reprocessing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Projects using Reprocessing</h2>\n<ul>\n<li><a href="https://github.com/jaredly/gravitron">Gravitron</a></li>\n<li><a href="https://github.com/bsansouci/ludum-dare-40">Oh No! Zombies!</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/2048">2048</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/livestream-flappybird">FlappyBird</a></li>\n<li><a href="https://github.com/illbexyz/repong">Pong</a></li>\n<li><a href="https://github.com/ekosz/reprocessing-example-flow-field">Perlin Noise Flow Field</a></li>\n<li><a href="https://github.com/Rigellute/L-system-reasonml">L-System</a></li>\n</ul>\n',homepageUrl:"https://github.com/Schmavery/reprocessing#readme",repositoryUrl:"https://github.com/Schmavery/reprocessing",npmUrl:null,issuesUrl:"https://github.com/Schmavery/reprocessing/issues",slug:"/package/unpublished/Schmavery/reprocessing"}},pathContext:{id:"unpublished/Schmavery/reprocessing"}}}});
//# sourceMappingURL=path---package-unpublished-schmavery-reprocessing-63cf9cc563fbf9fa5c70.js.map