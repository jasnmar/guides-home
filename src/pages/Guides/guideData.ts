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
    bio: ["If you are seeing this (and you weren't sent a link to it directly) something has gone wrong. This person isn't an offroadeo guide at all, it's just a place holder so that we can test things.","*Place* first got into offroading because he's bad at reading maps and makes terrible decisions. He would often find himself on an unmaintained road somewhere, and would have to figure out how to get his Ford Pinto through these roads.",
      "Place studied nuclear science, he loved his classes, he had a crazy teacher who wore **dark glasses**.", "[Lorem ipsum](https://lipsum.com) dolor sit amet, consectetur adipiscing elit. Suspendisse semper orci nisl, ut aliquam tellus vulputate quis. Pellentesque nec tortor at arcu commodo laoreet. Integer finibus nisl mi. Integer at odio sagittis, consequat odio interdum, sollicitudin risus. Aliquam vestibulum non sem non semper. In hac habitasse platea dictumst. Sed fringilla arcu eu sapien facilisis, nec viverra massa ornare. Etiam quis cursus est. Phasellus aliquet tellus libero, sed feugiat tortor efficitur a.",
      "`some additional words using code formatting`"],
    started: "July 2022",
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
    bio: ["Jason lives in a small town in NH, about 25 miles from Gunstock. He has lived in New Hampshire since 2002, but grew up in Oklahoma, where his father was a dirt contractor. When he was 10 years old he was driving bulldozers, scrapers, and graders. He didn't realize it at the time, but he was offroading to get to many of these job sites. He just thought that's when 10 years olds get to drive the 4 wheeled vehicles.","Jason has always owned 4 wheel drive vehicles, but a few years ago bought a new truck and gave his truck to his son. Since then they've been doing some really dumb things with mostly stock vehciles on some of NH's class VI roads.", "Jason also had a *breif* career as a motorcycle road racer. This is where he really learned the details of traction and clearance, and how important those two things are in motorsports."],
    headshot: jasonBio,
    venmoImage: jasonVenmo,
    venmoLink: "https://account.venmo.com/pay?recipients=jasonmartin603",
    started: "May 2023",
    level: "Black Diamond",
    fblink: "https://www.facebook.com/jason.martin.5243817",
    linkedInLink: "https://www.linkedin.com/in/jason-martin-58a6512/"
  },
  {id: 2, 
    firstName: "Bob", 
    location: "New Hampshire", 
    bio: ["more blah"],
    headshot:"string",
    level:"Base"}
  ]