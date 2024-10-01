export const recoveryMethods = [
  {method:"Traction", category:"Self"},
  {method:"Field Repair", category:"Self"},
  {method:"Hand Winch", category:"Self"},
  {method:"Powered Winch", category:"Self"},
  {method:"Towing", category:"Vehicle Assisted"},
  {method:"Kinetic Energy", category:"Vehicle Assisted" },
]

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