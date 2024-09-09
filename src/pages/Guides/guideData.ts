import { guideDataInterface } from "./GuideInterfaces"
import { 
  anonymousBio,
  jasonBio,
  jasonVenmo 
} from "../../assets/images"

export const guideData : guideDataInterface[] = [
  {id: 0,
    firstName: "Place",
    lastName: "Holder",
    location: "New Hampshire",
    bio: ["Place first got into offroading because he's bad at reading maps and makes terrible decisions. He would often find himself on an unmaintained road somewhere, and would have to figure out how to get his Ford Pinto through these roads.",
      "more than none", 
      "some additional stuffs"],
    started: "July 19, 2022",
    headshot: anonymousBio,
    venmoImage: jasonVenmo,
    venmoLink: "https://account.venmo.com/pay?recipients=jasonmartin603",
    level: "Base",
  },
  {id: 1, 
    firstName: "Jason", 
    location: "New Hampshire", 
    bio: ["blah, blah","blue, blue"],
    headshot: jasonBio,
    venmoImage: jasonVenmo,
    venmoLink: "https://account.venmo.com/pay?recipients=jasonmartin603",
    started: "May 2023",
    level: "Black Diamond"
  },
  {id: 2, 
    firstName: "Bob", 
    location: "New Hampshire", 
    bio: ["more blah"],
    headshot:"string",
    level:"Base"}
  ]