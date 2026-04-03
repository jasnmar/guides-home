export enum transferCaseSelections {
  twoHigh = "2H",
  fourHigh = "4H",
  fourAuto = "4A",
  fourLow = "4L"
}

export enum tractionControlSetttings {
  normal = "Normal",
  off = "Off",
  extra = "Extra",
}

export enum onOff {
  off = "Off",
  on = "On"
}

export enum throttleSetting {
  normal = "Normal",
  soft = "Soft",
  aggressive = "Aggressive"
}

export enum steeringSetting {
  normal = "Normal",
  soft = "Soft",
  tight = "Tight"
}

export interface modeData {
  mode: string
  sub?: string
  icon: string
  transferCase: transferCaseSelections
  tcOptions: transferCaseSelections[]
  tractionControl: tractionControlSetttings
  frontDiffLocker: onOff
  fdLockerOptions: onOff[]
  rearDiffLocker: onOff
  rdLockerOptions: onOff[]
  throttle: throttleSetting
  steering: steeringSetting
  stayBarDisconnect: onOff
  sbDisconnectOptions: onOff[]
}

export interface mode {
  modename: string
  enabled: boolean
}

export interface goatModesForEachModel {
  model: string
  modes: mode[]
}

import bajaMode from "../assets/bronco/goatmodes/baja.jpeg"
import ecoMode from "../assets/bronco/goatmodes/eco.jpeg"
import mudRutsMode from "../assets/bronco/goatmodes/mudruts.jpeg"
import normalMode from "../assets/bronco/goatmodes/normal.jpeg"
import rockCrawlMode from "../assets/bronco/goatmodes/rockcrawl.jpeg"
import sandMode from "../assets/bronco/goatmodes/sand.jpeg"
import slipperyMode from "../assets/bronco/goatmodes/slippery.jpeg"
import sportMode from "../assets/bronco/goatmodes/sport.jpeg"

export const GoatModeData: modeData[] = [
  {
    mode:"Normal", 
    icon: normalMode.src,
    transferCase:transferCaseSelections["twoHigh"], 
    tcOptions:[transferCaseSelections["twoHigh"],transferCaseSelections["fourHigh"], transferCaseSelections["fourAuto"],transferCaseSelections["fourLow"]], 
    tractionControl:tractionControlSetttings["normal"], 
    frontDiffLocker:onOff["off"], 
    fdLockerOptions:[onOff["off"], onOff["on"]], 
    rearDiffLocker:onOff["off"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["normal"], 
    steering:steeringSetting["normal"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["on"], onOff["off"]]
  },
  {
    mode:"Eco", 
    icon: ecoMode.src,
    transferCase:transferCaseSelections["twoHigh"], 
    tcOptions:[transferCaseSelections["twoHigh"],transferCaseSelections["fourHigh"], transferCaseSelections["fourAuto"]], 
    tractionControl:tractionControlSetttings["normal"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"]], 
    rearDiffLocker:onOff["off"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["soft"], 
    steering:steeringSetting["soft"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"]]
  },
  {
    mode:"Sport", 
    sub: "4",
    icon: sportMode.src,
    transferCase:transferCaseSelections["fourAuto"], 
    tcOptions:[transferCaseSelections["twoHigh"], transferCaseSelections["fourAuto"],transferCaseSelections["fourLow"] ], 
    tractionControl:tractionControlSetttings["off"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"]], 
    rearDiffLocker:onOff["off"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["aggressive"], 
    steering:steeringSetting["tight"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"]]
  },
  {
    mode:"Slippery", 
    sub: "5",
    icon: slipperyMode.src,
    transferCase:transferCaseSelections["fourAuto"], 
    tcOptions:[transferCaseSelections["fourAuto"], transferCaseSelections["fourHigh"],transferCaseSelections["fourLow"]], 
    tractionControl:tractionControlSetttings["extra"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"],onOff["on"]], 
    rearDiffLocker:onOff["off"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["soft"], 
    steering:steeringSetting["soft"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"]]
  },
  {
    mode:"Sand", 
    icon: sandMode.src,
    transferCase:transferCaseSelections["fourHigh"], 
    tcOptions:[transferCaseSelections["fourHigh"], transferCaseSelections["fourLow"],], 
    tractionControl:tractionControlSetttings["extra"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"],onOff["on"]], 
    rearDiffLocker:onOff["on"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["aggressive"], 
    steering:steeringSetting["soft"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"],onOff["on"]]
  },
  {
    mode:"Mud and Ruts", 
    icon: mudRutsMode.src,
    transferCase:transferCaseSelections["fourHigh"], 
    tcOptions:[transferCaseSelections["fourHigh"], transferCaseSelections["fourLow"],], 
    tractionControl:tractionControlSetttings["off"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"],onOff["on"]], 
    rearDiffLocker:onOff["on"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["normal"], 
    steering:steeringSetting["soft"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"],onOff["on"]]
  },
  {
    mode:"Rock Crawl", 
    icon: rockCrawlMode.src,
    transferCase:transferCaseSelections["fourLow"], 
    tcOptions:[transferCaseSelections["fourLow"],], 
    tractionControl:tractionControlSetttings["off"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"],onOff["on"]], 
    rearDiffLocker:onOff["on"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["soft"], 
    steering:steeringSetting["tight"], 
    stayBarDisconnect:onOff["on"], 
    sbDisconnectOptions:[onOff["off"],onOff["on"]]
  },
  {
    mode:"Baja",
    icon: bajaMode.src,
    transferCase:transferCaseSelections["fourHigh"], 
    tcOptions:[transferCaseSelections["fourHigh"], transferCaseSelections["fourLow"],], 
    tractionControl:tractionControlSetttings["off"],
    frontDiffLocker:onOff["off"],
    fdLockerOptions:[onOff["off"],onOff["on"]], 
    rearDiffLocker:onOff["on"],
    rdLockerOptions:[onOff["off"],onOff["on"]], 
    throttle:throttleSetting["aggressive"], 
    steering:steeringSetting["tight"], 
    stayBarDisconnect:onOff["off"], 
    sbDisconnectOptions:[onOff["off"],onOff["on"]]
  }
]

export const goatModesByModel : goatModesForEachModel[] = [
  {
    model:"Base",
    modes:[
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: false},
      {modename:"rockCrawl",enabled: false},
      {modename:"baja",enabled: false}
    ],
    
  },
  {
    model:"Big Bend",
    modes:[
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: false},
      {modename:"baja",enabled: false}
    ],
  },
  {
    model:"Black Diamond",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: true},
      {modename:"baja",enabled: false}
    ]
  },
  {
    model:"Outer Banks",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: false},
      {modename:"baja",enabled: false}
    ]
  },
  {
    model:"Badlands",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: false},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: true},
      {modename:"baja",enabled: true}
    ]
  },
  {
    model:"Wildtrack",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: false},
      {modename:"baja",enabled: true}
    ]
  },
  {
    model:"First Edition",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: false},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: true},
      {modename:"baja",enabled: true}
    ]
  },
  {
    model:"Everglades",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: true},
      {modename:"baja",enabled: false}
    ]
  },
  {
    model:"Heritage",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: false},
      {modename:"rockCrawl",enabled: false},
      {modename:"baja",enabled: false}
    ]
  },
  {
    model:"Heritage Limited",
    modes: [
      {modename:"normal",enabled: true},
      {modename:"eco",enabled: true},
      {modename:"sport",enabled: true},
      {modename:"slippery",enabled: true},
      {modename:"sand",enabled: true},
      {modename:"mudRuts",enabled: true},
      {modename:"rockCrawl",enabled: true},
      {modename:"baja",enabled: false}
    ]
  }
]
