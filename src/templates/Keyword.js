// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Graphql        = require("../utils/Graphql.js");
var ReasonReact    = require("reason-react/src/ReasonReact.js");
var CollectionPage = require("../components/CollectionPage.js");

var component = ReasonReact.statelessComponent("Package");

function make(data, pathContext, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, CollectionPage.make(pathContext.keyword, Graphql.getNodes(data.packages), /* array */[]));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, jsProps.pathContext, /* array */[]);
      }));


  export const query = graphql`
    query KeywordQuery($keyword: String!) {
      packages: allPackages(filter: { keywords: { in: [$keyword] }}) {
        edges {
          node {
            type
            id
            name
            version
            category
            flags
            platforms
            description
            keywords
            license
            updated
            stars
            score
            quality
            popularity
            maintenance
            slug
          }
        }
      }
    }
  `

;

var Control = 0;

exports.Control   = Control;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
