// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var TooltipStyles = require("./TooltipStyles.js");

var component = ReasonReact.reducerComponent("Tooltip");

function make(content, child) {
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
          /* render */(function (param) {
              var send = param[/* send */3];
              return React.createElement("div", {
                          className: TypedGlamor.toString(TooltipStyles.container),
                          onMouseEnter: (function () {
                              return Curry._1(send, true);
                            }),
                          onMouseLeave: (function () {
                              return Curry._1(send, false);
                            })
                        }, param[/* state */1] ? React.createElement("div", {
                                className: TypedGlamor.toString(TooltipStyles.tooltip)
                              }, content) : Vrroom.nothing, child);
            }),
          /* initialState */(function () {
              return false;
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (isHovered, _) {
              return /* Update */Block.__(0, [isHovered]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Styles = 0;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* component Not a pure module */
