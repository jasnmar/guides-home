//Initial state of the equipment list


export interface radioAnswer {
    answer:string, 
    action?:string, 
    execute?:() => void, 
    selected?:boolean
}

export enum considerations {
  rollaway = "Rolling Away",
  commercial = "Commercial Off-Road Recovery",
  distance = "Distance To Assistance",
  communication = "Communication Methods",
  supplies = "Survival Supplies",
  firstAid = "Wilderness First Aid"
}

export interface rMethods {
  method: string,
  category?: string,
  equipment: string[]
}

export interface equipment {
  key: string
  value: boolean | undefined
}

export const equipmentList: equipment[] = [
  {key: 'traction', value: undefined},
  {key: 'tools', value: undefined},
  {key: "hWinch", value: undefined},
  {key: "pWinch", value: undefined},
  {key: "tStrap", value: undefined},
  {key: "shackles", value: undefined},
  {key: "rStrap", value: undefined},
  {key: "additionalVehicle", value: undefined}
]

export const recoveryMethods:rMethods[] = [
  {method:"Traction", category:"Self", equipment:["traction"]},
  {method:"Field Repair", category:"Self", equipment:["tools"]},
  {method:"Hand Winch", category:"Self", equipment:["hWinch"]},
  {method:"Powered Winch", category:"Self", equipment:["pWinch"]},
  {method:"Towing", category:"Vehicle Assisted", equipment:["additionalVehicle","tStrap", "shackles"]},
  {method:"Kinetic Energy", category:"Vehicle Assisted", equipment:["additionalVehicle","rStrap", "shackles"] },
]

export interface answerItem {
  aId: string
  aData: answerData
  answer: string
  action?: string
  execute: (val:answerData) => void
  selected: boolean | undefined
}

export interface answerData {
  qId:string, 
  id:string,
  equipment:string,
  value: boolean, 
  falseList:string[]
}

export interface question {
  id: string
  question: string,
  answerList: answerItem[]
}