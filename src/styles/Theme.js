// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var primary = TypedGlamor.hex("dd4c39");

var darkPrimary = TypedGlamor.hsl(TypedGlamor.num(6.9), 65, 50);

var darkBackground = TypedGlamor.hex("ececec");

var text = TypedGlamor.hex("444");

var subtleBorder = TypedGlamor.hex("eee");

var bad = TypedGlamor.rgba(255, 0, 0, 0.75);

var reason = TypedGlamor.hex("DD4C39");

var ocaml = TypedGlamor.hex("C87A27");

var javascript = TypedGlamor.hex("F7E018");

var Color = /* module */[
  /* primary */primary,
  /* darkPrimary */darkPrimary,
  /* background */TypedGlamor.whitesmoke,
  /* darkBackground */darkBackground,
  /* text */text,
  /* link */primary,
  /* subtleBorder */subtleBorder,
  /* bad */bad,
  /* reason */reason,
  /* ocaml */ocaml,
  /* javascript */javascript
];

var Color$1 = /* module */[/* background */TypedGlamor.white];

var Panel = /* module */[/* Color */Color$1];

var block = TypedGlamor.rgba(255, 255, 255, 0.1);

var highlightedBlock = TypedGlamor.rgba(255, 255, 255, 0.2);

var Color$2 = /* module */[
  /* background */primary,
  /* text */TypedGlamor.white,
  /* block */block,
  /* highlightedBlock */highlightedBlock
];

var Inverted = /* module */[/* Color */Color$2];

var overlay = TypedGlamor.shadow(TypedGlamor.ex(1), TypedGlamor.ex(1), /* Some */[TypedGlamor.em(1)], /* None */0, /* None */0, TypedGlamor.rgba(0, 0, 0, 0.1));

var panel = TypedGlamor.shadow(TypedGlamor.px(1), TypedGlamor.px(1), /* None */0, /* Some */[TypedGlamor.px(1)], /* None */0, TypedGlamor.rgba(0, 0, 0, 0.05));

var Shadow = /* module */[
  /* overlay */overlay,
  /* panel */panel
];

exports.Color = Color;
exports.Panel = Panel;
exports.Inverted = Inverted;
exports.Shadow = Shadow;
/* primary Not a pure module */
