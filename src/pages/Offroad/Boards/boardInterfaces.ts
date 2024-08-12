export interface boardDataInterface {
  boardName: string,
  title: string,
  subtitle?: string,
  layouts: layouts,
  prevPage?: string,
  nextPage?: string
  index?: number
}

export interface layout {
  position: position,
  displayType: displayType,
  large: string,
  small?: string,
  intro?: string,
  bullets?: bullets,
  border?: boolean
}

export interface layouts extends Array<layout>{}

export enum position {
  lefthalf = "offroad-left-half",
  righthalf = "offroad-right-half",
}

export enum displayType {
  smallLead = "small-lead",
  aside = "aside"
}

export interface bullet {
  data: string
}

export interface bullets extends Array<bullet>{}