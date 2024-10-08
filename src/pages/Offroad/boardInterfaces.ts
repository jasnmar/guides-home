export interface boardDataInterface {
  boardName: string,
  address?: string,
  linkImage?: string,
  title: string,
  subtitle?: string,
  layouts: layouts,
  prevPage?: string,
  nextPage?: string
  index: number
}

export interface layout {
  position: position,
  border?: boolean
  components: component[],
}

export interface layouts extends Array<layout>{}

export interface component {
  displayType: displayType,
  large: string,
  small?: string,
  intro?: string,
  bullets?: bullets,
  imageref?: string
}

export enum position {
  lefthalf = "offroad-left-half",
  righthalf = "offroad-right-half",
  lefttwothirds = "offroad-left-two-thirds",
  rightonethird = "offroad-right-one-third"
}

export enum displayType {
  smallLead = "small-lead",
  aside = "aside"
}

export interface bullet {
  data: string,
  image?: string
}

export interface bullets extends Array<bullet>{}