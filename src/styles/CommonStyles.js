// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("./Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var GlobalStyles = require("./GlobalStyles.js");

var widthContainer = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.label("width-container"),
      /* :: */[
        TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.auto),
        /* :: */[
          TypedGlamor.maxWidth(TypedGlamor.px(960)),
          /* :: */[
            TypedGlamor.minWidth(TypedGlamor.px(359)),
            /* :: */[
              TypedGlamor.width(TypedGlamor.pct(100)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var html = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.select("& h1", /* :: */[
            TypedGlamor.fontSize(TypedGlamor.rem(2.25)),
            /* :: */[
              TypedGlamor.fontWeight(TypedGlamor.bold),
              /* :: */[
                TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
                /* :: */[
                  TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                  /* [] */0
                ]
              ]
            ]
          ]),
      /* :: */[
        TypedGlamor.select("& h2", /* :: */[
              TypedGlamor.fontSize(TypedGlamor.rem(1.62671)),
              /* :: */[
                TypedGlamor.fontWeight(TypedGlamor.bold),
                /* :: */[
                  TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
                  /* :: */[
                    TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                    /* [] */0
                  ]
                ]
              ]
            ]),
        /* :: */[
          TypedGlamor.select("& h3", /* :: */[
                TypedGlamor.fontSize(TypedGlamor.rem(1.38316)),
                /* :: */[
                  TypedGlamor.fontWeight(TypedGlamor.bold),
                  /* :: */[
                    TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
                    /* :: */[
                      TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                      /* [] */0
                    ]
                  ]
                ]
              ]),
          /* :: */[
            TypedGlamor.select("& h1, & h2, & h3, & h4, & h5", /* :: */[
                  TypedGlamor.select("& > a.anchor", /* :: */[
                        TypedGlamor.marginLeft(TypedGlamor.px(-20)),
                        /* :: */[
                          TypedGlamor.paddingRight(TypedGlamor.px(4)),
                          /* :: */[
                            TypedGlamor.select("& > svg", /* :: */[
                                  TypedGlamor.visibility(TypedGlamor.hidden),
                                  /* [] */0
                                ]),
                            /* [] */0
                          ]
                        ]
                      ]),
                  /* :: */[
                    TypedGlamor.hover(/* :: */[
                          TypedGlamor.select("& > a.anchor > svg", /* :: */[
                                TypedGlamor.visibility(TypedGlamor.visible),
                                /* [] */0
                              ]),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]),
            /* :: */[
              TypedGlamor.select("& p", /* :: */[
                    TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                    /* :: */[
                      TypedGlamor.select("& *:last-child", /* :: */[
                            TypedGlamor.marginBottom(TypedGlamor.zero),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]
                  ]),
              /* :: */[
                TypedGlamor.select("& b, & strong", /* :: */[
                      TypedGlamor.fontWeight(TypedGlamor.bold),
                      /* [] */0
                    ]),
                /* :: */[
                  TypedGlamor.select("& i, & em", /* :: */[
                        TypedGlamor.fontStyle(TypedGlamor.italic),
                        /* [] */0
                      ]),
                  /* :: */[
                    TypedGlamor.select("& ol, & ul", /* :: */[
                          TypedGlamor.margin(TypedGlamor.zero),
                          /* :: */[
                            TypedGlamor.marginLeft(TypedGlamor.rem(1.45)),
                            /* :: */[
                              TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                              /* :: */[
                                TypedGlamor.unsafe("listStylePosition", "outside"),
                                /* :: */[
                                  TypedGlamor.unsafe("listStyleImage", "none"),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]),
                    /* :: */[
                      TypedGlamor.select("& li", /* :: */[
                            TypedGlamor.marginBottom(TypedGlamor.rem(1.45 / 2)),
                            /* :: */[
                              TypedGlamor.select("& > ol, & > ul", /* :: */[
                                    TypedGlamor.marginLeft(TypedGlamor.rem(1.45)),
                                    /* :: */[
                                      TypedGlamor.marginBottom(TypedGlamor.rem(1.45 / 2)),
                                      /* :: */[
                                        TypedGlamor.marginTop(TypedGlamor.rem(1.45 / 2)),
                                        /* [] */0
                                      ]
                                    ]
                                  ]),
                              /* :: */[
                                TypedGlamor.select("& *:last-child", /* :: */[
                                      TypedGlamor.marginBottom(TypedGlamor.zero),
                                      /* [] */0
                                    ]),
                                /* :: */[
                                  TypedGlamor.select("& > p", /* :: */[
                                        TypedGlamor.marginBottom(TypedGlamor.rem(1.45 / 2)),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]),
                      /* :: */[
                        TypedGlamor.select("& ol", /* :: */[
                              TypedGlamor.unsafe("listStyleType", "decimal"),
                              /* :: */[
                                TypedGlamor.select("& li", /* :: */[
                                      TypedGlamor.paddingLeft(TypedGlamor.zero),
                                      /* [] */0
                                    ]),
                                /* [] */0
                              ]
                            ]),
                        /* :: */[
                          TypedGlamor.select("& ul", /* :: */[
                                TypedGlamor.unsafe("listStyleType", "disc"),
                                /* :: */[
                                  TypedGlamor.select("& li", /* :: */[
                                        TypedGlamor.paddingLeft(TypedGlamor.zero),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]),
                          /* :: */[
                            TypedGlamor.select("& code", /* :: */[
                                  TypedGlamor.background(TypedGlamor.hsla(TypedGlamor.num(0), 0, 0, 0.04)),
                                  /* :: */[
                                    TypedGlamor.fontFamilies(/* :: */[
                                          "'SFMono-Regular'",
                                          /* :: */[
                                            "Consolas",
                                            /* :: */[
                                              "'Roboto Mono'",
                                              /* :: */[
                                                "'Droid Sans Mono'",
                                                /* :: */[
                                                  "'Liberation Mono'",
                                                  /* :: */[
                                                    "Menlo",
                                                    /* :: */[
                                                      "Courier",
                                                      /* :: */[
                                                        "monospace",
                                                        /* [] */0
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]),
                                    /* :: */[
                                      TypedGlamor.fontSize(TypedGlamor.rem(0.85)),
                                      /* :: */[
                                        TypedGlamor.lineHeight(TypedGlamor.rem(1.45)),
                                        /* :: */[
                                          TypedGlamor.padding2(TypedGlamor.em(0.2), TypedGlamor.zero),
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]),
                            /* :: */[
                              TypedGlamor.select("& pre", /* :: */[
                                    TypedGlamor.marginBottom(TypedGlamor.rem(1.45)),
                                    /* :: */[
                                      TypedGlamor.fontSize(TypedGlamor.rem(0.85)),
                                      /* :: */[
                                        TypedGlamor.lineHeight(TypedGlamor.rem(1.42)),
                                        /* :: */[
                                          TypedGlamor.background(TypedGlamor.hsla(TypedGlamor.num(0), 0, 0, 0.04)),
                                          /* :: */[
                                            TypedGlamor.overflow(TypedGlamor.auto),
                                            /* :: */[
                                              TypedGlamor.unsafe("wordWrap", "normal"),
                                              /* :: */[
                                                TypedGlamor.padding(TypedGlamor.rem(1.45)),
                                                /* :: */[
                                                  TypedGlamor.select("& code", /* :: */[
                                                        TypedGlamor.background(TypedGlamor.none),
                                                        /* :: */[
                                                          TypedGlamor.lineHeight(TypedGlamor.em(1.42)),
                                                          /* [] */0
                                                        ]
                                                      ]),
                                                  /* [] */0
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]),
                              /* :: */[
                                TypedGlamor.select("& a", /* :: */[
                                      TypedGlamor.color(Theme.Color[/* link */5]),
                                      /* :: */[
                                        TypedGlamor.textDecoration(TypedGlamor.none),
                                        /* :: */[
                                          TypedGlamor.hover(/* :: */[
                                                TypedGlamor.textDecoration(TypedGlamor.underline),
                                                /* [] */0
                                              ]),
                                          /* [] */0
                                        ]
                                      ]
                                    ]),
                                /* :: */[
                                  TypedGlamor.select("& img", /* :: */[
                                        TypedGlamor.maxWidth(TypedGlamor.pct(100)),
                                        /* [] */0
                                      ]),
                                  /* :: */[
                                    TypedGlamor.select("& .redex-codeblock.m-tabbed", /* :: */[
                                          TypedGlamor.display(TypedGlamor.flex),
                                          /* :: */[
                                            TypedGlamor.position(TypedGlamor.relative),
                                            /* :: */[
                                              TypedGlamor.select("& > ul", /* :: */[
                                                    TypedGlamor.display(TypedGlamor.flex),
                                                    /* :: */[
                                                      TypedGlamor.position(TypedGlamor.absolute),
                                                      /* :: */[
                                                        TypedGlamor.flexDirection(TypedGlamor.column),
                                                        /* :: */[
                                                          TypedGlamor.margin(TypedGlamor.zero),
                                                          /* :: */[
                                                            TypedGlamor.opacity(0),
                                                            /* :: */[
                                                              TypedGlamor.transitions(/* :: */[
                                                                    /* tuple */[
                                                                      TypedGlamor.AnimatableProperty[/* opacity */76],
                                                                      TypedGlamor.ms(400),
                                                                      TypedGlamor.easeInOut,
                                                                      TypedGlamor.ms(200)
                                                                    ],
                                                                    /* [] */0
                                                                  ]),
                                                              /* :: */[
                                                                TypedGlamor.transforms(/* :: */[
                                                                      TypedGlamor.translateX(TypedGlamor.pct(-100)),
                                                                      /* [] */0
                                                                    ]),
                                                                /* :: */[
                                                                  TypedGlamor.height(TypedGlamor.pct(100)),
                                                                  /* :: */[
                                                                    TypedGlamor.select("& > li", /* :: */[
                                                                          TypedGlamor.cursor(TypedGlamor.pointer),
                                                                          /* :: */[
                                                                            TypedGlamor.margin(TypedGlamor.zero),
                                                                            /* :: */[
                                                                              TypedGlamor.display(TypedGlamor.inlineBlock),
                                                                              /* :: */[
                                                                                TypedGlamor.padding2(TypedGlamor.em(0.35), TypedGlamor.em(0.75)),
                                                                                /* :: */[
                                                                                  TypedGlamor.color(TypedGlamor.white),
                                                                                  /* :: */[
                                                                                    TypedGlamor.textTransform(TypedGlamor.lowercase),
                                                                                    /* :: */[
                                                                                      TypedGlamor.fontVariant(TypedGlamor.smallCaps),
                                                                                      /* :: */[
                                                                                        TypedGlamor.select("&:not(.s-selected)", /* :: */[
                                                                                              TypedGlamor.opacity(0.5),
                                                                                              /* :: */[
                                                                                                TypedGlamor.boxShadows(/* :: */[
                                                                                                      TypedGlamor.shadow(TypedGlamor.zero, TypedGlamor.px(-4), /* Some */[TypedGlamor.px(-2)], /* Some */[TypedGlamor.px(-2)], /* Some */[true], TypedGlamor.rgba(0, 0, 0, 0.1)),
                                                                                                      /* [] */0
                                                                                                    ]),
                                                                                                /* :: */[
                                                                                                  TypedGlamor.hover(/* :: */[
                                                                                                        TypedGlamor.opacity(1),
                                                                                                        /* [] */0
                                                                                                      ]),
                                                                                                  /* [] */0
                                                                                                ]
                                                                                              ]
                                                                                            ]),
                                                                                        /* :: */[
                                                                                          TypedGlamor.select("&.reason", /* :: */[
                                                                                                TypedGlamor.backgroundColor(Theme.Color[/* reason */8]),
                                                                                                /* [] */0
                                                                                              ]),
                                                                                          /* :: */[
                                                                                            TypedGlamor.select("&.ml", /* :: */[
                                                                                                  TypedGlamor.backgroundColor(Theme.Color[/* ocaml */9]),
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
                                                  ]),
                                              /* :: */[
                                                TypedGlamor.hover(/* :: */[
                                                      TypedGlamor.select("& > ul", /* :: */[
                                                            TypedGlamor.opacity(1),
                                                            /* [] */0
                                                          ]),
                                                      /* [] */0
                                                    ]),
                                                /* :: */[
                                                  TypedGlamor.select("& > .codeblock", /* :: */[
                                                        TypedGlamor.display(TypedGlamor.none),
                                                        /* :: */[
                                                          TypedGlamor.flex_(TypedGlamor.$$int(1)),
                                                          /* :: */[
                                                            TypedGlamor.maxWidth(TypedGlamor.pct(100)),
                                                            /* :: */[
                                                              TypedGlamor.select("&.s-selected", /* :: */[
                                                                    TypedGlamor.display(TypedGlamor.block),
                                                                    /* [] */0
                                                                  ]),
                                                              /* :: */[
                                                                TypedGlamor.select("& > pre", /* :: */[
                                                                      TypedGlamor.marginTop(TypedGlamor.zero),
                                                                      /* :: */[
                                                                        TypedGlamor.select("&.lang-reason", /* :: */[
                                                                              TypedGlamor.borderLeft3(TypedGlamor.px(2), TypedGlamor.solid, Theme.Color[/* reason */8]),
                                                                              /* [] */0
                                                                            ]),
                                                                        /* :: */[
                                                                          TypedGlamor.select("&.lang-ml", /* :: */[
                                                                                TypedGlamor.borderLeft3(TypedGlamor.px(2), TypedGlamor.solid, Theme.Color[/* ocaml */9]),
                                                                                /* [] */0
                                                                              ]),
                                                                          /* [] */0
                                                                        ]
                                                                      ]
                                                                    ]),
                                                                /* [] */0
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]),
                                                  /* [] */0
                                                ]
                                              ]
                                            ]
                                          ]
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
              ]
            ]
          ]
        ]
      ]
    ]);

var _reset = GlobalStyles._reset;

var _global = GlobalStyles._global;

exports._reset = _reset;
exports._global = _global;
exports.widthContainer = widthContainer;
exports.html = html;
/* widthContainer Not a pure module */
