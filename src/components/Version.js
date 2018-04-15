// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var Tooltip = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var VersionStyles = require("./VersionStyles.js");

var component = ReasonReact.statelessComponent("Version");

function make(version, isPublished, _) {
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
              return React.createElement("div", {
                          className: "version " + TypedGlamor.toString(VersionStyles.root(isPublished))
                        }, isPublished ? Vrroom.text(version) : ReasonReact.element(/* None */0, /* None */0, Tooltip.make(React.createElement("div", {
                                        className: TypedGlamor.toString(VersionStyles.tooltip)
                                      }, Vrroom.text("Unpublished")), Vrroom.text(version))));
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
exports.component = component;
exports.make = make;
/* component Not a pure module */
