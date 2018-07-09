webpackJsonp([0xe823d96c162f],{1065:function(s,a){s.exports={data:{package:{id:"@ahrefs/bs-aws-lambda",stars:14,name:"@ahrefs/bs-aws-lambda",version:"0.8.0",category:"binding",flags:[],platforms:["node"],description:"bucklescript types for aws-lambda",keywords:["platform api"],license:"MIT",updated:"2018-06-24T10:03:03.035Z",type:"published",score:.4935618990406986,quality:.4115748527876024,popularity:.05767920705692501,maintenance:.9997192020985546,readme:'<h1 id="bs-aws-lambda"><a href="#bs-aws-lambda" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-aws-lambda</h1>\n<p><code>bs-aws-lambda</code> is a set of types to use when creating <a href="http://docs.aws.amazon.com/lambda">AWS\nlambda</a> handlers.</p>\n<p>Those types are inspired by the\n<a href="https://www.npmjs.com/package/@types/aws-lambda"><code>@types/aws-lambda</code></a>\npackage with typescript types.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @ahrefs/bs-aws-lambda</code></pre></div>\n<p>or to follow the master version:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add https:<span class="hljs-comment">//github.com/ahrefs/bs-aws-lambda.git</span></code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Add <code>@ahrefs/bs-aws-lambda</code> to the <code>bs-dependencies</code> of <code>bsconfig.json</code>.</p>\n<p>Then when you create a function handler for a lambda, you can annotate\nit with one of <code>AwsLambda.Scheduled.handler</code>,\n<code>AwsLambda.Dynamodb.streamHandler</code>, <code>AwsLambda.Sns.handler</code>, etc. This\nway you are sure to expose a function which respect the signature\nexpected by Lambda and you get types information for all the\nparameters this function will receive.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>A full example is documented\n<a href="https://tech.ahrefs.com/create-aws-lambda-using-reasonml-and-bucklescript-15a0820ff55b">here</a>. It\nis using the sources from the <a href="example"><code>example</code></a> directory.</p>\n<p>Simple echo function for the API Gateway. This might seem a little\nverbose compare to a typescript version. But using this package, you\nare sure to handle all the possible cases where a value is actually\nnull or base64 encoded. Plus the returned object given to the callback\nwill always have the expected fields and types.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@bs.send.pipe : <span class="hljs-type">Node</span>.<span class="hljs-type">Buffer</span>.t] external bufferToString : string = <span class="hljs-string">"toString"</span>;\n\n<span class="hljs-keyword">let</span> echo: <span class="hljs-type">AwsLambda</span>.<span class="hljs-type">APIGatewayProxy</span>.handler =\n  (event, _context, cb) =&gt; {\n    <span class="hljs-keyword">let</span> parameter =\n      <span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption(event##queryStringParameters)\n      |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.andThen([@bs] (params =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.<span class="hljs-keyword">get</span>(params, <span class="hljs-string">"userid"</span>)));\n    <span class="hljs-keyword">switch</span> parameter {\n    | <span class="hljs-type">Some</span>(userid) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"executing lambda for"</span>, userid)\n    | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"executing lambda for anonymous user"</span>)\n    };\n    <span class="hljs-keyword">let</span> result =\n      <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption(event##body)) {\n      | <span class="hljs-type">None</span> =&gt;\n        <span class="hljs-type">Js</span>.log(<span class="hljs-string">"error: no body available in the request"</span>);\n        <span class="hljs-type">AwsLambda</span>.<span class="hljs-type">APIGatewayProxy</span>.result(\n          ~body=`<span class="hljs-type">Plain</span>({|{<span class="hljs-string">"status"</span>: <span class="hljs-string">"no body available in the request"</span>}|}),\n          ~statusCode=<span class="hljs-number">400</span>,\n          ()\n        );\n      | <span class="hljs-type">Some</span>(body) =&gt; {\n          <span class="hljs-string">"body"</span>: body,\n          <span class="hljs-string">"statusCode"</span>: <span class="hljs-number">200</span>,\n          <span class="hljs-string">"headers"</span>: <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.null,\n          <span class="hljs-string">"isBase64Encoded"</span>: <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.<span class="hljs-keyword">return</span>(event##isBase64Encoded)\n        }\n      };\n    cb(<span class="hljs-type">Js</span>.null, result);\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve();\n  };</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">external</span> bufferToString : <span class="hljs-built_in">string</span> = <span class="hljs-string">"toString"</span>[@@bs.send.pipe :<span class="hljs-type">Node</span>.<span class="hljs-type">Buffer</span>.t]\n<span class="hljs-keyword">let</span> echo: <span class="hljs-type">AwsLambda</span>.<span class="hljs-type">APIGatewayProxy</span>.handler =\n  <span class="hljs-keyword">fun</span> event  -&gt;\n    <span class="hljs-keyword">fun</span> _context  -&gt;\n      <span class="hljs-keyword">fun</span> cb  -&gt;\n        <span class="hljs-keyword">let</span> parameter =\n          (<span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption (## event queryStringParameters)) |&gt;\n            (<span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.andThen\n               ((<span class="hljs-keyword">fun</span> params  -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.get params <span class="hljs-string">"userid"</span>)[@bs ])) <span class="hljs-keyword">in</span>\n        (<span class="hljs-keyword">match</span> parameter <span class="hljs-keyword">with</span>\n         | ((<span class="hljs-type">Some</span> (userid))[@explicit_arity ]) -&gt;\n             <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"executing lambda for"</span> userid\n         | <span class="hljs-type">None</span>  -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"executing lambda for anonymous user"</span>);\n        (<span class="hljs-keyword">let</span> result =\n           <span class="hljs-keyword">match</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption (## event body) <span class="hljs-keyword">with</span>\n           | <span class="hljs-type">None</span>  -&gt;\n               (<span class="hljs-type">Js</span>.log <span class="hljs-string">"error: no body available in the request"</span>;\n                <span class="hljs-type">AwsLambda</span>.<span class="hljs-type">APIGatewayProxy</span>.result\n                  ~body:(<span class="hljs-tag">`Plain</span>\n                           {|{<span class="hljs-string">"status"</span>: <span class="hljs-string">"no body available in the request"</span>}|})\n                  ~statusCode:<span class="hljs-number">400</span> <span class="hljs-literal">()</span>)\n           | ((<span class="hljs-type">Some</span> (body))[@explicit_arity ]) -&gt;\n               [%bs.obj\n                 {\n                   body;\n                   statusCode = <span class="hljs-number">200</span>;\n                   headers = <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.null;\n                   isBase64Encoded =\n                     (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.return (## event isBase64Encoded))\n                 }] <span class="hljs-keyword">in</span>\n         cb <span class="hljs-type">Js</span>.null result; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>The typescript equivalent of the type annotation is actually more verbose:</p>\n<div class="redex-codeblock"><pre class="hljs lang-typescript"><code><span class="hljs-built_in">export</span> const handle: Lambda.APIGatewayProxyHandler = async (\n    event: Lambda.APIGatewayEvent,\n    context: Lambda.Context,\n    cb: Lambda.APIGatewayProxyCallback) =&gt; {\n}</code></pre></div>\n',homepageUrl:"https://github.com/ahrefs/bs-aws-lambda#readme",repositoryUrl:"https://github.com/ahrefs/bs-aws-lambda",npmUrl:"https://www.npmjs.com/package/%40ahrefs%2Fbs-aws-lambda",issuesUrl:"https://github.com/ahrefs/bs-aws-lambda/issues",slug:"/package/@ahrefs/bs-aws-lambda"}},pathContext:{id:"@ahrefs/bs-aws-lambda"}}}});
//# sourceMappingURL=path---package-ahrefs-bs-aws-lambda-ca61804103c29950eb2c.js.map