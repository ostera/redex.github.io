webpackJsonp([0x6873898cebad],{1e3:function(e,a){e.exports={data:{package:{id:"@astrada/bs-react-fela",stars:8,name:"@astrada/bs-react-fela",version:"0.2.3",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for react-fela",keywords:["css","react"],license:"MIT",updated:"2018-01-31T00:00:33.621Z",type:"published",score:.4837301119971359,quality:.4119057981904978,popularity:.03433860946790575,maintenance:.9946853120749131,readme:'<h1 id="bs-react-fela"><a href="#bs-react-fela" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-fela</h1>\n<p>Reason/BuckleScript bindings for\n<a href="https://github.com/rofrischmann/fela/tree/master/packages/react-fela">react-fela</a>.\nSee also\n<a href="https://github.com/astrada/bs-react-fela-examples">bs-react-fela-examples</a>.</p>\n<p>From Fela <a href="http://fela.js.org/">documentation</a>:</p>\n<p>Fela is a small, high-performant and framework-agnostic toolbelt to handle\nstate-driven styling in JavaScript. It is dynamic by design and renders your\nstyles depending on your application state.</p>\n<p>It generates atomic CSS and supports all common CSS features such as media\nqueries, pseudo classes, keyframes and font-faces. Fela ships with a powerful\nplugin API adding e.g. <a href="http://fela.js.org/packages/fela-plugin-prefixer">vendor\nprefixing</a> or <a href="http://fela.js.org/packages/fela-plugin-fallback-value">fallback\nvalue</a> support.</p>\n<p>Fela can be used with\n<a href="https://github.com/rofrischmann/fela/tree/master/packages/react-fela">React</a>\nor with any other view library. It even supports <a href="http://fela.js.org/docs/guides/UsageWithReactNative.html">React\nNative</a>.</p>\n<h3 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --global bs-platform\nyarn install</code></pre></div>\n<h3 id="how-to-compile"><a href="#how-to-compile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to compile</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build</code></pre></div>\n<h3 id="how-to-use-in-your-projects"><a href="#how-to-use-in-your-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use (in your projects)</h3>\n<p>Run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add --dev bs-react-fela</code></pre></div>\n<p>to add the library to your project dependencies. And add <code>bs-react-fela</code> to <code>dependencies</code> node of your <code>bsconfig.json</code>.</p>\n',homepageUrl:"https://github.com/astrada/bs-react-fela",repositoryUrl:"https://github.com/astrada/bs-react-fela",npmUrl:"https://www.npmjs.com/package/%40astrada%2Fbs-react-fela",issuesUrl:"https://github.com/astrada/bs-react-fela/issues",slug:"/package/@astrada/bs-react-fela"}},pathContext:{id:"@astrada/bs-react-fela"}}}});
//# sourceMappingURL=path---package-astrada-bs-react-fela-199665a0db3b7f8969f6.js.map