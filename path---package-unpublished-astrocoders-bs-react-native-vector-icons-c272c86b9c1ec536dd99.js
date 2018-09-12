webpackJsonp([0x9d930b1329d6],{1268:function(e,i){e.exports={data:{package:{id:"unpublished/Astrocoders/bs-react-native-vector-icons",stars:6,name:"Astrocoders/bs-react-native-vector-icons",version:"2.0.0-beta.1",category:"binding",flags:["neglected"],platforms:["browser"],description:"BuckleScript bindings for react-native-vector-icons",keywords:["react","ui","react-native"],license:"MIT",updated:"2018-09-12T21:10:32.154Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-react-native-vector-icons"><a href="#bs-react-native-vector-icons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-native-vector-icons</h1>\n<p>BuckleScript bindings for react-native-vector-icons</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add react-native-vector-icons bs-react-native-vector-icons</code></pre></div>\n<p>Follow the instructor of installation from react-native-vector-icons also then update your <code>bsconfig.json</code> <code>"bs-dependencies"</code></p>\n<h2 id="generating"><a href="#generating" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generating</h2>\n<p>Bindings are generated with <code>node generate</code>.</p>\n<p>Update it to add more</p>\n<h2 id="included-bindings"><a href="#included-bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Included bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> FontAwesome</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FontAwesome 5</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Ionicons</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MaterialIcons</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Feather</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MaterialCommunityIcons</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Entypo</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Foundation</li>\n<li class="task-list-item"><input type="checkbox" disabled> SimpleLineIcons</li>\n<li class="task-list-item"><input type="checkbox" disabled> Octicons</li>\n<li class="task-list-item"><input type="checkbox" disabled> Zocial</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/Astrocoders/bs-react-native-vector-icons",npmUrl:null,issuesUrl:"https://github.com/Astrocoders/bs-react-native-vector-icons/issues",slug:"/package/unpublished/Astrocoders/bs-react-native-vector-icons"}},pathContext:{id:"unpublished/Astrocoders/bs-react-native-vector-icons"}}}});
//# sourceMappingURL=path---package-unpublished-astrocoders-bs-react-native-vector-icons-c272c86b9c1ec536dd99.js.map