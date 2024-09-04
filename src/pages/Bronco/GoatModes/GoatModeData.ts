import { 
  modeData, 
  transferCaseSelections, 
  tractionControlSetttings,
  onOff,
  throttleSetting,
  steeringSetting,
  goatModesForEachModel} from "./GoatModeInterfaces"

export const GoatModeData: modeData[] = [
  {
    mode:"Normal", 
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
    transferCase:transferCaseSelections["fourAuto"], 
    tcOptions:[transferCaseSelections["twoHigh"], transferCaseSelections["fourAuto"]], 
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
    transferCase:transferCaseSelections["fourAuto"], 
    tcOptions:[transferCaseSelections["fourAuto"], transferCaseSelections["fourHigh"]], 
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
    transferCase:transferCaseSelections["fourHigh"], 
    tcOptions:[transferCaseSelections["fourHigh"], transferCaseSelections["fourLow"],], 
    tractionControl:tractionControlSetttings["extra"],
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
    mode:"Mud and Ruts", 
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