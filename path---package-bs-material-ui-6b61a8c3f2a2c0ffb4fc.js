webpackJsonp([0x6f0f65e91548],{1121:function(s,e){s.exports={data:{package:{id:"bs-material-ui",stars:44,name:"bs-material-ui",version:"0.4.0",category:"binding",flags:[],platforms:["browser"],description:"Reason bindings for material-ui",keywords:["react","ui"],license:"MIT",updated:"2018-06-27T06:48:36.288Z",type:"published",score:.5323290484538095,quality:.5245626020735727,popularity:.07156583785015184,maintenance:.99974921309767,readme:'<h1 id="reason-bindings-for-material-ui"><a href="#reason-bindings-for-material-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for Material-UI</h1>\n<p><a href="https://www.npmjs.com/package/bs-material-ui"><img src="https://img.shields.io/npm/v/bs-material-ui.svg" alt="npm"></a></p>\n<p><a href="https://reasonml.github.io/">Reason</a> bindings for <a href="https://github.com/callemall/material-ui">material-ui</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>🚧 This is a WIP, not everything is supported yet. 🚧</p>\n<p>Feel free to create an issue or PR if you find anything missing.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-material-ui\nyarn add material-ui@next</code></pre></div>\n<p>Then add <code>bs-material-ui</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-material-ui"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Header"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">AppBar</span> position=<span class="hljs-string">"static"</span> color=<span class="hljs-string">"default"</span>&gt;\n      &lt;<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Toolbar</span>&gt;\n        &lt;<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Typography</span>\n          _type=<span class="hljs-string">"title"</span> color=<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Typography</span>.<span class="hljs-type">Color</span>.<span class="hljs-type">Inherit</span>&gt;\n          (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Title"</span>))\n        &lt;/<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Typography</span>&gt;\n      &lt;/<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Toolbar</span>&gt;\n    &lt;/<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">AppBar</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"Header"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">AppBar</span>.createElement ~position:<span class="hljs-string">"static"</span>\n             ~color:<span class="hljs-string">"default"</span>\n             ~children:[((<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Toolbar</span>.createElement\n                            ~children:[((<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Typography</span>.createElement\n                                           ~_type:<span class="hljs-string">"title"</span>\n                                           ~color:<span class="hljs-type">MaterialUI</span>.<span class="hljs-type">Typography</span>.<span class="hljs-type">Color</span>.<span class="hljs-type">Inherit</span>\n                                           ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement\n                                                        <span class="hljs-string">"Title"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])]\n                            <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<blockquote>\n<p>It is not recommended to open this module as it will clash with other modules.<br>\nIf you wish to do so please be aware that the <code>List</code> component will clash with the standard library <code>List</code> module.</p>\n</blockquote>\n<h2 id="bindings"><a href="#bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> AppBar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Avatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Badge</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigationButton</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigation</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ButtonBase</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Button</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardHeader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardMedia</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Card</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Checkbox</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Chip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CircularProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Collapse</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContentText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogTitle</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dialog</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Divider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Drawer</li>\n<li class="task-list-item"><input type="checkbox" disabled> Fade</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControlLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControl</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormGroup</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormHelperText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormLabel</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitleBar</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitle</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridList</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Grid</li>\n<li class="task-list-item"><input type="checkbox" disabled> Grow</li>\n<li class="task-list-item"><input type="checkbox" disabled> Hidden</li>\n<li class="task-list-item"><input type="checkbox" disabled> IconButton</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Icon</li>\n<li class="task-list-item"><input type="checkbox" disabled> InputAdornment</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> InputLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Input</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> LinearProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemAvatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemIcon</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemSecondaryAction</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItem</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListSubheader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MenuItem</li>\n<li class="task-list-item"><input type="checkbox" disabled> MenuList</li>\n<li class="task-list-item"><input type="checkbox" disabled> Menu</li>\n<li class="task-list-item"><input type="checkbox" disabled> MobileStepper</li>\n<li class="task-list-item"><input type="checkbox" disabled> MuiThemeProvider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Paper</li>\n<li class="task-list-item"><input type="checkbox" disabled> Popover</li>\n<li class="task-list-item"><input type="checkbox" disabled> RadioGroup</li>\n<li class="task-list-item"><input type="checkbox" disabled> Radio</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Select</li>\n<li class="task-list-item"><input type="checkbox" disabled> Slide</li>\n<li class="task-list-item"><input type="checkbox" disabled> SnackbarContent</li>\n<li class="task-list-item"><input type="checkbox" disabled> Snackbar</li>\n<li class="task-list-item"><input type="checkbox" disabled> SvgIcon</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Switch</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Tab</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableBody</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableCell</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableFooter</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableHead</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TablePagination</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableRow</li>\n<li class="task-list-item"><input type="checkbox" disabled> TableSortLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Table</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Tabs</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TextField</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Toolbar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Tooltip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Typography</li>\n</ul>\n',homepageUrl:"https://github.com/InsidersByte/bs-material-ui#readme",repositoryUrl:"https://github.com/InsidersByte/bs-material-ui",npmUrl:"https://www.npmjs.com/package/bs-material-ui",issuesUrl:"https://github.com/InsidersByte/bs-material-ui/issues",slug:"/package/bs-material-ui"}},pathContext:{id:"bs-material-ui"}}}});
//# sourceMappingURL=path---package-bs-material-ui-6b61a8c3f2a2c0ffb4fc.js.map