// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css      = require("bs-css/src/Css.js");
var CssEx    = require("../utils/CssEx.js");
var Theme    = require("../styles/Theme.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function root(type_, flags, isFocused) {
  return Css.style(/* :: */[
              Css.unsafe("label", "search-result-item"),
              /* :: */[
                Css.display(/* Flex */3),
                /* :: */[
                  Css.justifyContent(/* SpaceBetween */5),
                  /* :: */[
                    Css.unsafe("padding", "1.1em 2em"),
                    /* :: */[
                      Css.borderTop(Css.px(1), /* Solid */2, Theme.Color[/* subtleBorder */6]),
                      /* :: */[
                        Css.cursor(/* Pointer */5),
                        /* :: */[
                          Css.selector("> *", /* :: */[
                                Css.opacity(Caml_obj.caml_equal(flags, /* array */[]) || isFocused ? 1 : 0.25),
                                /* [] */0
                              ]),
                          /* :: */[
                            Css.hover(/* :: */[
                                  Css.unsafe("backgroundColor", "hsl(6.9, 0%, 90%)"),
                                  /* :: */[
                                    Css.selector("> *", /* :: */[
                                          Css.opacity(1),
                                          /* [] */0
                                        ]),
                                    /* [] */0
                                  ]
                                ]),
                            /* :: */[
                              Css.backgroundColor(CssEx.else_(Theme.Panel[/* Color */0][/* background */0], CssEx.if_(isFocused, "hsl(6.9, 90%, 90%)"))),
                              /* :: */[
                                Css.unsafe("backgroundImage", CssEx.if_(+(type_ === "unpublished"), Theme.Panel[/* crosshatchBackground */1])),
                                /* :: */[
                                  Css.selector("> *:last-child", /* :: */[
                                        Css.textAlign(/* Right */2),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var name = Css.style(/* :: */[
      Css.color(Theme.Color[/* link */5]),
      /* [] */0
    ]);

var version = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.fontStyle(/* Italic */1),
        /* :: */[
          Css.marginLeft(Css.em(0.5)),
          /* [] */0
        ]
      ]
    ]);

var description = Css.style(/* :: */[
      Css.unsafe("textOverflow", "ellipsis"),
      /* :: */[
        Css.overflow(/* Hidden */1),
        /* [] */0
      ]
    ]);

var updated = Css.style(/* :: */[
      Css.opacity(0.5),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* [] */0
        ]
      ]
    ]);

var stars = Css.style(/* :: */[
      Css.opacity(0.5),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* [] */0
        ]
      ]
    ]);

var starIcon = Css.style(/* :: */[
      Css.marginLeft(Css.em(0.25)),
      /* :: */[
        Css.transform(Css.translateY(Css.px(-1))),
        /* :: */[
          Css.opacity(0.5),
          /* [] */0
        ]
      ]
    ]);

exports.root        = root;
exports.name        = name;
exports.version     = version;
exports.description = description;
exports.updated     = updated;
exports.stars       = stars;
exports.starIcon    = starIcon;
/* name Not a pure module */
