import { boardDataInterface, position, displayType } from "./boardInterfaces"

export const boardData:boardDataInterface[] = [
  {
    boardName: "AdvancedRockCrawl",
    title: "Rock Crawling",
    subtitle: "Advanced",
    index: 10,
    prevPage: "waterfording",
    nextPage: "groundschool",
    layouts: [
      {
        position: position["lefthalf"],
        border: true,
        components: [
          {
          displayType: displayType["smallLead"],
          large: "Bronco Trail 1-Pedal Drive",
          small: "2.7L EcoBoost",
          
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
        }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
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
      }
    ]
  },
  {    
    boardName: "WaterFording",
    title: "Water Fording",
    subtitle: "Advanced",
    index: 9,
    prevPage:"articulationmounds",
    nextPage:"advancedrockcrawl",
    layouts: [
      {
        position: position["lefthalf"],
        border: true,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Survey the Water",
            small: "Before you Drive...",
            
            intro:undefined,
            bullets: [
              {data:"If you don't know the dept, dont attemt to cross"},
              {data:"Check bottom conditions for traction - is it sand, mud, rocks?"},
              {data:"Plan a line diagonal to the current"}
            ]
          }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
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
        ]
      }
    ]},
    {
    boardName: "ArticulationMounds",
    title: "Articulation Mounds",
    subtitle: "Advanced",
    index: 8,
    prevPage:"sidetilt",
    nextPage:"waterfording",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
        components: [
          {

            displayType: displayType["smallLead"],
            large: "Locking Differentials",
            small: "Getting Tourque to the Wheels with Electronic",
            
            intro: undefined,
            bullets: [
              {data:"Locking differentials force the two wheels of an axle to turn at the same speed when engaged"},
              {data:"Locking differentials prevent the wheel without traction from spinning and delivers torque with traction"},
              {data:"Should not be left engaged on dry pavement (causes wheel scrubbing and driveline damage"}
            ]
          }
          ]
      },
      {
        position: position["righthalf"],
        components: [
          {

            displayType: displayType["smallLead"],
            large: "Maximizing Articulation",
            small: "Front Stabilizer Bar Disconnecting System",
            intro: undefined,
            bullets: [
              {data:"Use when going over large rocks or very uneven terrain"},
              {data:"Allows full articulation to help keep the extended wheel on the ground"},
              {data:"Hydraulically actuated - the stabilizer bar con disconnect under load"},
              {data:"Must be in off-road G.O.A.T. Modes to disconnect - Sand, Mud/Ruts, Rock Crawl, Baja or Normal"},
              {data:"Must be at speeds below 20 mph"},
              {data:"Automatically disconnects when in Rock Crawl mode"},
              {data:"Automaticallly reconnects once back on level ground and at 20 mph"}
            ]
          }
        ]
      }
    ]},
    {
    boardName: "BasicRockCrawl",
    title: "Rock Crawling",
    subtitle: "The Basics",
    index: 6,
    prevPage:"hilldescent",
    nextPage:"sidetilts",
    layouts: [
      {
        position: position["lefttwothirds"],
        border: false,
        components: [
          {

            displayType: displayType["smallLead"],
            large: "Air Down for More Grip",
            small: "",
            
            intro: undefined,
            bullets: [
              {data:"Increases the contact patch for better grip"},
              {data:"Be aware of reduced ground clearance"}
            ]
          }, {
            displayType: displayType["smallLead"],
            large: "Beadlock Capable Wheels",
            small: "",
            intro: undefined,
            bullets: [
              {data:"Designed to decrease the risk of a tire dismounting from the wheel when you air down"},
              {data:"Securely clamp the tire bead between the outer edge of the wheels and a bolt-on bead lock ring"}
            ]
          }
        ]
          },
      {
        position: position["rightonethird"],
        components: [
          {

            displayType: displayType["aside"],
            large: "Tips for Rock Crawling",
            small: "",
            intro: undefined,
            bullets: [
              {data:"Proceed slowly so you can choose the correct line"},
              {data:"Make small changes to steering and throttle when required"},
              {data:"Don't know the size of the rock... get out and look!"},
              {data:"Trust your spotter to guide you through the correct line"},
              {data:"Think ahead and have a plan in case a tire slips off a rock"},
              {data:"Know your ground clearance and avoid straddling large rocks"}
            ]
          }
        ]
      }
    ]

    }
]
/*

  */