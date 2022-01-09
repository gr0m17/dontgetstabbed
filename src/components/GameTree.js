export const GAME_DATA = {
  DGS_V00: {
    videoID: 0,
    defaultNext: 53,
  },
  DGS_V01: {
    videoID: 1,
    defaultNext: 2,
  },
  DGS_V02: {
    videoID: 2,
    defaultNext: 3,
    branches: {
      b1: {
        now: 1,
        name: "Pizza!",
        videoID: 6,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Pizza!",
      },
      b2: {
        now: 1,
        name: "Fridge",
        videoID: 30,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Check the fridge.",
      },
    },
  },
  DGS_V03: {
    videoID: 3,
    defaultNext: 4,
    branches: {
      b1: {
        now: 1,
        name: "Pizza!",
        videoID: 6,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Pizza!",
      },
      b2: {
        now: 1,
        name: "Open Door",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Door",
      },
      b3: {
        now: 1,
        name: "Check Window",
        videoID: 41,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Window",
      },
      b4: {
        now: 1,
        name: "Fridge",
        videoID: 30,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Fridge",
      },
    },
  },
  DGS_V04: {
    videoID: 4,
    defaultNext: 5,
  },
  DGS_V05: {
    videoID: 5,
    defaultNext: 5,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V06: {
    videoID: 6,
    defaultNext: 7,
  },
  DGS_V07: {
    videoID: 7,
    defaultNext: 8,
    branches: {
      b1: {
        now: 1,
        name: "Open the Door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Check the Door!",
      },
      b2: {
        now: 1,
        name: "Check Window",
        videoID: 41,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Check the Window.",
      },
    },
  },
  DGS_V08: {
    videoID: 8,
    defaultNext: 9,
  },
  DGS_V09: {
    videoID: 9,
    defaultNext: 10,
    branches: {
      b1: {
        now: 1,
        name: "Open Door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
      b2: {
        now: 1,
        name: "Check the window",
        videoID: 22,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Check the window.",
      },
    },
  },
  DGS_V10: {
    videoID: 10,
    defaultNext: 11,
  },
  DGS_V11: {
    videoID: 11,
    defaultNext: 11,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V12A: {
    videoID: 12,
    defaultNext: 14,
    description: "stabbed after wallet",
  },
  DGS_V12B: {
    videoID: 13,
    defaultNext: 15,
    description: "stabbed after wallet",
  },
  DGS_V13A: {
    videoID: 14,
    defaultNext: 14,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V13B: {
    videoID: 15,
    defaultNext: 15,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V14A: {
    videoID: 16,
    defaultNext: 19,
  },
  DGS_V14B: {
    videoID: 17,
    defaultNext: 20,
  },
  DGS_V14C: {
    videoID: 18,
    defaultNext: 21,
  },
  DGS_V15A: {
    videoID: 19,
    defaultNext: 19,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V15B: {
    videoID: 20,
    defaultNext: 20,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V15C: {
    videoID: 21,
    defaultNext: 21,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V16: {
    videoID: 22,
    defaultNext: 23,
  },
  DGS_V17: {
    videoID: 23,
    defaultNext: 24,
    branches: {
      b1: {
        now: 1,
        name: "Open the door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
    },
  },
  DGS_V18: {
    videoID: 24,
    defaultNext: 25,
  },
  DGS_V19: {
    videoID: 25,
    defaultNext: 26,
    branches: {
      b1: {
        now: 1,
        name: "Open the door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
    },
  },
  DGS_V20: {
    videoID: 26,
    defaultNext: 27,
  },
  DGS_V21: {
    videoID: 27,
    defaultNext: 28,
    branches: {
      b1: {
        now: 1,
        name: "Open the door!",
        videoID: 16,
        cpuOffset: function () {
          return Math.floor(Math.random() * 3);
        },
        buttonText: "Open the Door!",
      },
    },
  },
  DGS_V22: {
    videoID: 28,
    defaultNext: 29,
  },
  DGS_V23: {
    videoID: 29,
    defaultNext: 29,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V24: {
    videoID: 30,
    defaultNext: 31,
  },
  DGS_V25: {
    videoID: 31,
    defaultNext: 32,
    branches: {
      b1: {
        now: 1,
        name: "open the door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
      b2: {
        now: 1,
        name: "check window",
        videoID: 41,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Check the window.",
      },
    },
  },
  DGS_V26: {
    videoID: 32,
    defaultNext: 33,
  },
  DGS_V27: {
    videoID: 33,
    defaultNext: 34,
    branches: {
      b1: {
        now: 1,
        name: "Mystery Salad!",
        videoID: 36,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Mystery Salad!",
      },
      b2: {
        now: 1,
        name: "Pot Roast",
        videoID: 38,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Pot Roast.",
      },
    },
  },
  DGS_V28: {
    videoID: 34,
    defaultNext: 35,
  },
  DGS_V29: {
    videoID: 35,
    defaultNext: 35,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V30: {
    videoID: 36,
    defaultNext: 37,
  },
  DGS_V31: {
    videoID: 37,
    defaultNext: 37,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V32: {
    videoID: 38,
    defaultNext: 40,
  },
  DGS_V33: {
    videoID: 39,
    defaultNext: 40,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V34: {
    videoID: 40,
    defaultNext: 40,
  },
  DGS_V35: {
    videoID: 41,
    defaultNext: 42,
  },
  DGS_V36: {
    videoID: 42,
    defaultNext: 43,
    branches: {
      b1: {
        now: 1,
        name: "open the door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
    },
    b2: {
      now: 1,
      name: "open the door!",
      videoID: 47,
      cpuOffset: function () {
        return 0;
      },
      buttonText: "Open the Door!",
    },
  },

  DGS_V37: {
    videoID: 43,
    defaultNext: 44,
  },
  DGS_V38: {
    videoID: 44,
    defaultNext: 45,
    branches: {
      b1: {
        now: 1,
        name: "open the door!",
        videoID: 47,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Open the Door!",
      },
    },
  },
  DGS_V39: {
    videoID: 45,
    defaultNext: 46,
  },
  DGS_V40: {
    videoID: 46,
    defaultNext: 46,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V41: {
    videoID: 47,
    defaultNext: 48,
  },
  DGS_V42: {
    videoID: 48,
    defaultNext: 49,
    branches: {
      b1: {
        now: 1,
        name: "hand it over!",
        videoID: 12,
        cpuOffset: function () {
          return Math.floor(Math.random() * 2);
        },
        buttonText: "Hand it over...",
      },
      b2: {
        name: "Fridge",
        videoID: 51,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "No Way!",
      },
    },
  },
  DGS_V43: {
    videoID: 49,
    defaultNext: 50,
  },
  DGS_V44: {
    videoID: 50,
    defaultNext: 50,
    branches: {
      b1: {
        now: 1,
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V45: {
    videoID: 51,
    defaultNext: 52,
  },
  DGS_V46: {
    videoID: 52,
    defaultNext: 52,
    branches: {
      b1: {
        name: "Try Again!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "Try Again!",
      },
    },
  },
  DGS_V000B: {
    videoID: 53,
    defaultNext: 1,
    branches: {
      b1: {
        now: 1,
        name: "Start Game!",
        videoID: 1,
        cpuOffset: function () {
          return 0;
        },
        buttonText: "I'm ready. Let's play!",
        now: 1,
      },
    },
  },
};
