// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../bindings/Icon.js");
var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var Tooltip = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var PlatformsStyles = require("./PlatformsStyles.js");

function platform(icon, name, label) {
  return React.createElement("div", undefined, icon, React.createElement("a", {
                  href: "/platform/" + name
                }, Vrroom.text(label)));
}

function tooltip(platforms) {
  var match = platforms.includes("browser");
  var match$1 = platforms.includes("node");
  var match$2 = platforms.includes("native");
  var match$3 = platforms.includes("any");
  return React.createElement("div", {
              className: TypedGlamor.toString(PlatformsStyles.tooltip)
            }, Vrroom.text("Platforms:"), match ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* array */[])), "browser", "Browser") : Vrroom.nothing, match$1 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* array */[])), "node", "Node.js") : Vrroom.nothing, match$2 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* array */[])), "native", "Native") : Vrroom.nothing, match$3 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* array */[])), "any", "Any") : Vrroom.nothing);
}

var component = ReasonReact.statelessComponent("Platforms");

function make(platforms, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var match = platforms.includes("browser");
              var match$1 = platforms.includes("node");
              var match$2 = platforms.includes("native");
              var match$3 = platforms.includes("any");
              return React.createElement("div", {
                          className: "platforms " + TypedGlamor.toString(PlatformsStyles.root)
                        }, ReasonReact.element(/* None */0, /* None */0, Tooltip.make(tooltip(platforms), ReasonReact.element(/* None */0, /* None */0, Vrroom.Fragment[/* make */0](/* array */[
                                          match ? ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* array */[])) : Vrroom.nothing,
                                          match$1 ? ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* array */[])) : Vrroom.nothing,
                                          match$2 ? ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* array */[])) : Vrroom.nothing,
                                          match$3 ? ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* array */[])) : Vrroom.nothing
                                        ])))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Styles = 0;

exports.Styles = Styles;
exports.platform = platform;
exports.tooltip = tooltip;
exports.component = component;
exports.make = make;
/* component Not a pure module */
