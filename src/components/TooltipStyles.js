// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var container = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.relative),
      /* :: */[
        TypedGlamor.display(TypedGlamor.inlineFlex),
        /* :: */[
          TypedGlamor.zIndex(TypedGlamor.$$int(50)),
          /* [] */0
        ]
      ]
    ]);

var tooltip = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.absolute),
      /* :: */[
        TypedGlamor.zIndex(TypedGlamor.$$int(55)),
        /* :: */[
          TypedGlamor.offsetBottom(TypedGlamor.pct(100)),
          /* :: */[
            TypedGlamor.offsetLeft(TypedGlamor.pct(50)),
            /* :: */[
              TypedGlamor.transforms(/* :: */[
                    TypedGlamor.translate(TypedGlamor.pct(-50), TypedGlamor.em(-0.5)),
                    /* [] */0
                  ]),
              /* :: */[
                TypedGlamor.color(Theme.Color[/* text */4]),
                /* :: */[
                  TypedGlamor.select("&::before", /* :: */[
                        TypedGlamor.position(TypedGlamor.absolute),
                        /* :: */[
                          TypedGlamor.width(TypedGlamor.zero),
                          /* :: */[
                            TypedGlamor.height(TypedGlamor.zero),
                            /* :: */[
                              TypedGlamor.offsetBottom(TypedGlamor.em(-0.5)),
                              /* :: */[
                                TypedGlamor.offsetLeft(TypedGlamor.pct(50)),
                                /* :: */[
                                  TypedGlamor.marginLeft(TypedGlamor.em(-0.5)),
                                  /* :: */[
                                    TypedGlamor.transforms(/* :: */[
                                          TypedGlamor.translateY(TypedGlamor.px(-1)),
                                          /* [] */0
                                        ]),
                                    /* :: */[
                                      TypedGlamor.borderLeft3(TypedGlamor.em(0.5), TypedGlamor.solid, TypedGlamor.transparent),
                                      /* :: */[
                                        TypedGlamor.borderRight3(TypedGlamor.em(0.5), TypedGlamor.solid, TypedGlamor.transparent),
                                        /* :: */[
                                          TypedGlamor.borderTop3(TypedGlamor.em(0.5), TypedGlamor.solid, TypedGlamor.hex("eee")),
                                          /* :: */[
                                            TypedGlamor.unsafe("content", " "),
                                            /* :: */[
                                              TypedGlamor.zIndex(TypedGlamor.$$int(60)),
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
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

exports.container = container;
exports.tooltip = tooltip;
/* container Not a pure module */
