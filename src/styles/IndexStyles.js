// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.margin(TypedGlamor.em(1.45)),
      /* [] */0
    ]);

var keywords = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.label("keywords"),
      /* :: */[
        TypedGlamor.textAlign(TypedGlamor.center),
        /* :: */[
          TypedGlamor.marginTop(TypedGlamor.em(3)),
          /* :: */[
            TypedGlamor.lineHeight(TypedGlamor.em(1.5)),
            /* :: */[
              TypedGlamor.select("& > a", /* :: */[
                    TypedGlamor.display(TypedGlamor.inlineBlock),
                    /* :: */[
                      TypedGlamor.textDecoration(TypedGlamor.none),
                      /* :: */[
                        TypedGlamor.margin2(TypedGlamor.zero, TypedGlamor.ex(1)),
                        /* :: */[
                          TypedGlamor.whiteSpace(TypedGlamor.nowrap),
                          /* :: */[
                            TypedGlamor.select("& > .count", /* :: */[
                                  TypedGlamor.marginLeft(TypedGlamor.ex(0.5)),
                                  /* :: */[
                                    TypedGlamor.opacity(0.5),
                                    /* [] */0
                                  ]
                                ]),
                            /* :: */[
                              TypedGlamor.select("&:hover > .label", /* :: */[
                                    TypedGlamor.textDecoration(TypedGlamor.underline),
                                    /* [] */0
                                  ]),
                              /* [] */0
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
    ]);

var lists = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.label("lists"),
      /* :: */[
        TypedGlamor.display(TypedGlamor.flex),
        /* :: */[
          TypedGlamor.justifyContent(TypedGlamor.spaceAround),
          /* :: */[
            TypedGlamor.marginTop(TypedGlamor.em(3)),
            /* :: */[
              TypedGlamor.select("& > *", /* :: */[
                    TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.em(1)),
                    /* :: */[
                      TypedGlamor.width(TypedGlamor.pct(40)),
                      /* :: */[
                        TypedGlamor.minWidth(TypedGlamor.px(300)),
                        /* :: */[
                          TypedGlamor.select("& > h2", /* :: */[
                                TypedGlamor.textAlign(TypedGlamor.center),
                                /* :: */[
                                  TypedGlamor.fontSize(TypedGlamor.em(1.1)),
                                  /* :: */[
                                    TypedGlamor.fontWeight(TypedGlamor.bold),
                                    /* :: */[
                                      TypedGlamor.margin2(TypedGlamor.em(0.5), TypedGlamor.zero),
                                      /* :: */[
                                        TypedGlamor.textTransform(TypedGlamor.lowercase),
                                        /* :: */[
                                          TypedGlamor.fontVariant(TypedGlamor.smallCaps),
                                          /* :: */[
                                            TypedGlamor.paddingBottom(TypedGlamor.em(0.5)),
                                            /* :: */[
                                              TypedGlamor.borderBottom3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.rgba(255, 255, 255, 0.5)),
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
                            TypedGlamor.select("& > div", /* :: */[
                                  TypedGlamor.background(TypedGlamor.none),
                                  /* :: */[
                                    TypedGlamor.border(TypedGlamor.none),
                                    /* :: */[
                                      TypedGlamor.padding(TypedGlamor.zero),
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
              /* :: */[
                TypedGlamor.select("@media (max-width: 600px)", /* :: */[
                      TypedGlamor.flexDirection(TypedGlamor.column),
                      /* :: */[
                        TypedGlamor.alignItems(TypedGlamor.center),
                        /* :: */[
                          TypedGlamor.select("& > *", /* :: */[
                                TypedGlamor.width(TypedGlamor.pct(100)),
                                /* :: */[
                                  TypedGlamor.maxWidth(TypedGlamor.px(450)),
                                  /* [] */0
                                ]
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
      ]
    ]);

exports.root = root;
exports.keywords = keywords;
exports.lists = lists;
/* root Not a pure module */
