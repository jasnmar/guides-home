import { boardDataInterface, position, displayType } from "./boardInterfaces"

export const boardData:boardDataInterface[] = [
  {
    boardName: "AdvancedRockCrawl",
    title: "Rock Crawling",
    subtitle: "Advanced",
    index: 0,
    prevPage: "waterfording",
    nextPage: "groundschool",
    layouts: [
      {
        position: position["lefthalf"],
        displayType: displayType["smallLead"],
        large: "Bronco Trail 1-Pedal Drive",
        small: "2.7L EcoBoost",
        border: true,
        intro:
          "Allows you to speed up and slow down using only the accelerator pedal, so you can stay focused on navigating difficult terrain ahead. Renders two-footed drving obsolete for low-speed, off-road crawling",
        bullets: [
          {
            data: "Press the center button on the 4x4 selector to turn on or off"
          },
          { data: "Depress the accelerator pedal to speed up" },
          {
            data: "Back off the accelerator with your foot still on the pedal to slow down"
          },
          { data: "Release the pedal completely to come to a complete stop" }
        ]
      },
      {
        position: position["righthalf"],
        displayType: displayType["aside"],
        large:
          "Put your off-roading skills to the test and follow these guidelines:",
        bullets: [
          {
            data: "Stay in 4L for max throttle control. Slow and precise wins the day"
          },
          {
            data: "Look and think ahead. Take the time to choose the correct line through the rocks."
          },
          {
            data: "Modulate the throttle. Too much or too little can make a big difference."
          },
          {
            data: "Minimize steering inputs. Subtle movements will get you through"
          },
          {
            data: "Keep your tires on top of the rocks. The path of least resistance."
          },
          {
            data: "Watch your sidewalls. Sharp rocks can puncture the side of a tire."
          }
        ]
      }
    ]
  },
  {    
    boardName: "WaterFording",
    title: "Water Fording",
    subtitle: "Advanced",
    index: 0,
    prevPage:"articulationmounds",
    nextPage:"advancedrockcrawl",
    layouts: [
      {
        position: position["lefthalf"],
        displayType: displayType["smallLead"],
        large: "Survey the Water",
        small: "Before you Drive...",
        border: true,
        intro:undefined,
        bullets: [
          {data:"If you don't know the dept, dont attemt to cross"},
          {data:"Check bottom conditions for traction - is it sand, mud, rocks?"},
          {data:"Plan a line diagonal to the current"}
        ]
      },
      {
        position: position["righthalf"],
        displayType: displayType["smallLead"],
        large: "Stay Smooth & Steady",
        small: "As you drive...",
        intro: undefined,
        bullets: [
          {data:"Enter smoothly to prevent excessive splashing"},
          {data:"Maintain steady forward momentum - not too fast and not too slow"},
          {data:"Create a bow wave to disperse water away from the engine bay"}
        ]
      }
    ]}
]
