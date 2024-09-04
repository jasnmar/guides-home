export interface modeData {
  mode: string,
  sub?: string,
  icon: string,
  transferCase: transferCaseSelections,
  tcOptions: transferCaseSelections[],
  tractionControl: tractionControlSetttings,
  frontDiffLocker: onOff,
  fdLockerOptions:onOff[],
  rearDiffLocker: onOff,
  rdLockerOptions: onOff[],
  throttle: throttleSetting,
  steering: steeringSetting,
  stayBarDisconnect: onOff,
  sbDisconnectOptions: onOff[]
}

export interface gmItem {
  [key: string]: string,
}

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

export enum goatModes {
  normal = "Normal",
  eco = "Eco",
  sport = "Sport",
  slippery = "Slippery",
  sand = "Sand",
  mudRuts = "Mud and Ruts",
  rockCrawl = "Rock Crawl",
  baja = "Baja"
}

export interface mode {
  modename: string,
  enabled: boolean
}

export interface goatModesForEachModel {
  model: string,
  modes: mode[]
}

/*
export interface goatModesForEachModel {
  model: string,
  mode:{}[]normal: boolean,
  eco: boolean,
  sport: boolean,
  slippery: boolean,
  sand: boolean,
  mudRuts: boolean,
  rockCrawl: boolean,
  baja: boolean
}
  */