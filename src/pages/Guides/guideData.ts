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
    bio: ["*Place* first got into offroading because he's bad at reading maps and makes terrible decisions. He would often find himself on an unmaintained road somewhere, and would have to figure out how to get his Ford Pinto through these roads.",
      "Place studied nuclear science, he loved his classes, he had a crazy teacher who wore **dark glasses**.", "[Lorem ipsum](https://lipsum.com) dolor sit amet, consectetur adipiscing elit. Suspendisse semper orci nisl, ut aliquam tellus vulputate quis. Pellentesque nec tortor at arcu commodo laoreet. Integer finibus nisl mi. Integer at odio sagittis, consequat odio interdum, sollicitudin risus. Aliquam vestibulum non sem non semper. In hac habitasse platea dictumst. Sed fringilla arcu eu sapien facilisis, nec viverra massa ornare. Etiam quis cursus est. Phasellus aliquet tellus libero, sed feugiat tortor efficitur a.",
      "`some additional stuffs`"],
    started: "July 19, 2022",
    headshot: anonymousBio,
    venmoImage: jasonVenmo,
    venmoLink: "https://account.venmo.com/pay?recipients=jasonmartin603",
    level: "Base",
    fblink: "https://www.facebook.com/profile.php?id=61565644077822",
    xLink: "https://x.com/YourAnonNews",
    instaLink: "https://www.instagram.com/anonymous.leaks/",
    youTubeLink: "https://www.youtube.com/@-anonymous",
    linkedInLink: "https://www.linkedin.com/company/anonymous-content/",
    email:"mailto://offroadeoguides@gmail.com"
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