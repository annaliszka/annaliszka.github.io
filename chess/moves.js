
const ruy_lopez = {
    "e4": {
        "e5": {
            "Nf3": {
                "Nc6": {
                    "Bb5": {
                        "a6": {
                            "Ba4": {
                                "end": "Main line",
                                "Nf6": {
                                    "O-O": {
                                        "b5": {
                                            "Bb3": {
                                                "Bb7": { "end": "Archangel" }
                                            }
                                        },
                                        "Be7": {
                                            "end": "Closed variation",
                                            "Re1": {
                                                "b5": {
                                                    "Bb3": {
                                                        "O-O": {
                                                            "c3": {
                                                                "d5": { "end": "Marshall attack" }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "Nxe4": { "end": "Open variation" }
                                    }
                                }
                            },
                            "Bxc6": {
                                "dxc6": { "end": "Exchange variation" }
                            }
                        },
                        "Nf6": {
                            "O-O": {
                                "Nxe4": {
                                    "d4": {
                                        "Nd6": {
                                            "Bxc6": {
                                                "dxc6": {
                                                    "dxe5": {
                                                        "Nf5": {
                                                            "Qxd8+": {
                                                                "Kxd8": { "end": "Berlin Defense" }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const sicilian = {
    "e4": {
        "c5": {
            "Nf3": {
                "d6": {
                    "d4": {
                        "cxd4": {
                            "Nxd4": {
                                "Nf6": {
                                    "Nc3": { "end": "Open Variation" }
                                }
                            }
                        }
                    }
                },
                "Nc6": {
                    "d4": {
                        "cxd4": {
                            "Nxd4": {
                                "Nf6": {
                                    "Nc3": { "end": "Accelerated Dragon" }
                                }
                            }
                        }
                    }
                }
            },
            "c3": {
                "d5": {
                    "exd5": {
                        "Qxd5": {
                            "d4": { "end": "Alapin Variation" }
                        }
                    }
                }
            }
        }
    }
};

const caro_kann = {
    "e4": {
        "c6": {
            "d4": {
                "d5": {
                    "Nc3": {
                        "dxe4": {
                            "Nxe4": { "end": "Classical Variation" }
                        }
                    },
                    "e5": {
                        "Bf5": { "end": "Advance Variation" }
                    }
                }
            }
        }
    }
};

const queens_gambit = {
    "d4": {
        "d5": {
            "c4": {
                "e6": {
                    "Nc3": {
                        "Nf6": {
                            "Bg5": { "end": "Queen's Gambit Declined" }
                        }
                    }
                },
                "c6": {
                    "Nc3": {
                        "Nf6": {
                            "Nf3": { "end": "Slav Defense" }
                        }
                    }
                }
            },
            "Nf3": {
                "Nf6": {
                    "c4": {
                        "e6": {
                            "Nc3": { "end": "Queen's Gambit Declined (Delayed Nf3)" }
                        }
                    }
                }
            }
        }
    }
};

const vienna = {
    "e4": {
        "e5": {
            "Nc3": {
                "Nc6": {
                    "Bc4": {
                        "Nf6": {
                            "d3": {
                                "Bc5": {
                                    "f4": {
                                        "d6": {
                                            "Nf3": {
                                                "Ng4": {
                                                    "Ng5": {
                                                        "Nf2": {
                                                            "Qh5": { "end": "Right side attack" }
                                                        },
                                                        "O-O": {
                                                            "f5": {
                                                                "Nf2": {
                                                                    "Qh5": { "end": "Right side castle attack" }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "Bg4": {
                                                    "Na4": { "end": "Main line alt" }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "Bc5?": {
                            "Qg4": {
                                "Qf6?": {
                                    "Nd5": {
                                        "Qxf2?": {
                                            "Kd1": {
                                                "g6": {
                                                    "Nh3": { "end": "Copycat(?)" }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "Nf6": {
                    "f4": { // Vienna Gambit
                        "d5": {
                            "fxe5": {
                                "Nxe4": {
                                    "Qf3": {
                                        "Nxc3": {
                                            "bxc3": {
                                                "c5": {
                                                    "Qg3": { "end": "Vienna Gambit 2" }
                                                }
                                            }
                                        },
                                        "Nc6": {
                                            "Bb5": {
                                                "Nxc3": {
                                                    "dxc3": { "end": "Vienna Gambit 3" }
                                                }
                                            }
                                        },
                                        "f5": {
                                            "d3": {
                                                "Nxc3": {
                                                    "bxc3": { "end": "Vienna Gambit 4" }
                                                }
                                            }
                                        }
                                    },
                                    "d3": {
                                        "Nxc3": {
                                            "bxc3": {
                                                "d4": { "end": "Vienna Gambit d3 1" }
                                            }
                                        },
                                        "Qh4?": {
                                            "g3": {
                                                "Nxg3": {
                                                    "Nf3": {
                                                        "Nd5": {
                                                            "Na6?": {
                                                                "Nf4": {
                                                                    "Ne2": { "end": "Vienna Gambit d3 2" }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "d6": {
                            "Nf3": {
                                "Nc6": {
                                    "Bb5": {
                                        "Bd7": {
                                            "d3": { "end": "Vienna Gambit" }
                                        }
                                    }
                                }
                            }
                        },
                        "exf4?": {
                            "e5": {
                                "Ng8": {
                                    "Nf3": {
                                        "d6": {
                                            "d4": {
                                                "dxe5": {
                                                    "Qe2": { "end": "Vienna Gambit Accepted(?)" }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "Nc6?": {
                            "fxe5": {
                                "Nxe5": {
                                    "d4": {
                                        "Ng6": {
                                            "e5": {
                                                "d6": {
                                                    "Bc4": {
                                                        "dxe5": {
                                                            "O-O": {
                                                                "exd4": {
                                                                    "Ng5": { "end": "Vienna Gambit Declined(?)" }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            }
        }
    }
};

const stafford = {
    "e4": {
        "e5": {
            "Nf3": {
                "Nf6": {
                    "Nxe5": {
                        "Nc6": {
                            "Nxc6": {
                                "dxc6": {
                                    //"end": "Stafford Gambit",
                                    "d3": {
                                        "Bc5": {
                                            "Be2": {
                                                "h5": {
                                                    "h3": {
                                                        "Qd6": {
                                                            "O-O": {
                                                                "Ng4": { "end": "Safe bishop" }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "Nc3?": {
                                                "Ng4": {
                                                    "Be3": {
                                                        "Nxe3": {
                                                            "fxe3": {
                                                                "Bxe3": { "end": "Gain a pawn" }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "Bg5": {
                                                "Nxe4": {
                                                    "Bxd8": {
                                                        "Bxf2+": {
                                                            "Ke2": {
                                                                "Bg4#": { "end": "Queen sac trap" }
                                                            }
                                                        }
                                                    },
                                                    "dxe4": {
                                                        "Bxf2+": {
                                                            "Kxf2": {
                                                                "Qxd1": { "end": "Queen sac denied trap" }
                                                            }
                                                        }
                                                    },
                                                    "Be3": {
                                                        "Bxe3": {
                                                            "fxe3": {
                                                                "Qh4+": {
                                                                    "g3": {
                                                                        "Nxg3": { "end": "Bishop defense" }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "e5": {
                                        "Ne4": {
                                            "d3?": {
                                                "Bc5": {
                                                    "dxe4": {
                                                        "Bxf2+": {
                                                            "Ke2": {
                                                                "Bg4+": { "end": "d3 blunder" }
                                                            }
                                                        }
                                                    },
                                                    "Be3": {
                                                        "Bxe3": {
                                                            "fxe3": {
                                                                "Qh4+": {
                                                                    "g3": {
                                                                        "Nxg3": {
                                                                            "hxg3": {
                                                                                "Qxh1": { "end": "Win a rook" }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "d4": {
                                                "Qh4": {
                                                    "g3?": {
                                                        "Nxg3": {
                                                            "fxg3": {
                                                                "Qe4+": { "end": "KR fork" }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Nc3?": {
                                        "Bc5": {
                                            "Bc4": {
                                                "Ng4": {
                                                    "O-O": {
                                                        "Qh4": { "end": "Castle attack" }
                                                    }
                                                }
                                            },
                                            "h3": {
                                                "h5": {
                                                    "Be2?": {
                                                        "Qd4": {
                                                            "O-O": {
                                                                "Ng4": {
                                                                    "hxg4": {
                                                                        "hxg4": {
                                                                            "d3": {
                                                                                "Qe5": {
                                                                                    "g3": {
                                                                                        "Qxg3#": { "end": "Open h-file" }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const openings = {
    "Stafford": stafford,
    "Vienna": vienna,
    "Ruy Lopez": ruy_lopez,
    "Sicilian": sicilian,
    "Caro-Kann": caro_kann,
    "Queen's Gambit": queens_gambit,
};