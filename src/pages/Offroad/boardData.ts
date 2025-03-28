import { boardDataInterface, position, displayType } from "./boardInterfaces"
import { 
  beadlock,
  tpmswarning,
  broncoABC,
  powerTrain,
  stabarDisconnect,
  FrontLockingDifferential,
  RearLockingDifferential,
  TrailTurnAssist,
  stop,
  ComeForward,
  PassDrive,
  SlowDown,
  groundSchool,
  orientation,
  softSand,
  downhill,
  hillclimb,
  crossing,
  rockcrawling,
  sidetilt,
  waterFord,
  advRock,
  articMounds
 } from "../../assets/images"

export const boardData: boardDataInterface[] = [
  {
    boardName: "AdvancedRockCrawl",
    address: "advancedrockcrawl",
    linkImage: advRock,
    title: "Advanced Rock Crawl",
    subtitle: "Advanced",
    index: 10,
    prevPage: "waterfording",
    nextPage: "groundschool",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
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
              {
                data: "Release the pedal completely to come to a complete stop"
              }
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
                data: "**Stay in 4L for max throttle control.** Slow and precise wins the day"
              },
              {
                data: "**Look and think ahead.** Take the time to choose the correct line through the rocks."
              },
              {
                data: "**Modulate the throttle.** Too much or too little can make a big difference."
              },
              {
                data: "**Minimize steering inputs.** Subtle movements will get you through"
              },
              {
                data: "**Keep your tires on top of the rocks.** The path of least resistance."
              },
              {
                data: "**Watch your sidewalls.** Sharp rocks can puncture the side of a tire."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "WaterFording",
    address: "waterfording",
    linkImage: waterFord,
    title: "Water Fording",
    subtitle: "Advanced",
    index: 9,
    prevPage: "articulationmounds",
    nextPage: "advancedrockcrawl",
    layouts: [
      {
        position: position["lefthalf"],
        border: true,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Survey the Water",
            small: "Before you Drive...",

            intro: undefined,
            bullets: [
              { data: "If you don't know the dept, dont attemt to cross" },
              {
                data: "Check bottom conditions for traction - is it sand, mud, rocks?"
              },
              { data: "Plan a line diagonal to the current" }
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
              { data: "Enter smoothly to prevent excessive splashing" },
              {
                data: "Maintain steady forward momentum - not too fast and not too slow"
              },
              {
                data: "Create a bow wave to disperse water away from the engine bay"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "ArticulationMounds",
    address: "articulationmounds",
    linkImage: articMounds,
    title: "Articulation Mounds",
    subtitle: "Advanced",
    index: 8,
    prevPage: "sidetilts",
    nextPage: "waterfording",
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
              {
                data: "Locking differentials force the two wheels of an axle to turn at the same speed when engaged"
              },
              {
                data: "Locking differentials prevent the wheel without traction from spinning and delivers torque with traction"
              },
              {
                data: "Should not be left engaged on dry pavement (causes wheel scrubbing and driveline damage"
              }
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
              {
                data: "Use when going over large rocks or very uneven terrain"
              },
              {
                data: "Allows full articulation to help keep the extended wheel on the ground"
              },
              {
                data: "Hydraulically actuated - the stabilizer bar con disconnect under load"
              },
              {
                data: "Must be in off-road G.O.A.T. Modes to disconnect - Sand, Mud/Ruts, Rock Crawl, Baja or Normal"
              },
              { data: "Must be at speeds below 20 mph" },
              { data: "Automatically disconnects when in Rock Crawl mode" },
              {
                data: "Automaticallly reconnects once back on level ground and at 20 mph"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "BasicRockCrawl",
    title: "Rock Crawling",
    address: "rockcrawling",
    linkImage: rockcrawling,
    subtitle: "The Basics",
    index: 6,
    prevPage: "hilldescent",
    nextPage: "sidetilts",
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
              { data: "Increases the contact patch for better grip", image:tpmswarning },
              { data: "Be aware of reduced ground clearance" }
            ]
          },
          {
            displayType: displayType["smallLead"],
            large: "Beadlock Capable Wheels",
            small: "",
            intro: undefined,
            bullets: [
              {
                data: "Designed to decrease the risk of a tire dismounting from the wheel when you air down"
              },
              {
                data: "Beadlocks securely clamp the tire bead between the outer edge of the wheels and a bolt-on bead lock ring", image:beadlock
              }
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
              { data: "Proceed slowly so you can choose the correct line" },
              {
                data: "Make small changes to steering and throttle when required"
              },
              { data: "Don't know the size of the rock... get out and look!" },
              {
                data: "Trust your spotter to guide you through the correct line"
              },
              {
                data: "Think ahead and have a plan in case a tire slips off a rock"
              },
              {
                data: "Know your ground clearance and avoid straddling large rocks"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "Crossings",
    address: "crossings",
    linkImage: crossing,
    title: "Crossings",
    subtitle: "Ditch & Log",
    index: 4,
    prevPage: "hillclimb",
    nextPage: "hilldescent",
    layouts: [
      {
        position: position["lefttwothirds"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Hand Signals",
            small: "Know Your Off-Road",
            bullets: [
              { data: "Stop immediately.", image: stop },
              {
                data: "Slowly come forward. Can be used one-handed with other signals, such as steer passenger or driver",
                image: ComeForward
              },
              {
                data: "Steer passenger or steer driver. Hold this steering input until directed to change it", image:PassDrive
              },
              { data: "Slow Down!", image:SlowDown },
              { data: "Go Back" }
            ]
          }
        ]
      },
      {
        position: position["rightonethird"],
        components: [
          {
            displayType: displayType["aside"],
            large: "Crossing Tips",
            bullets: [
              {
                data: "Try to cross a ditch with one wheel in the ditch at a time"
              },
              {
                data: "Cross logs at an angle, one wheel at a time, to decrease clearance needed and to maximize traction"
              },
              {
                data: "Can't make it over and obstacle? Consider using a ramp. If you didn't bring one with you, look around to see if anything is available (rocks or logs) to create a makeshift one. Remember to always Tread Lightly!"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "GroundSchool",
    address: "groundschool",
    linkImage: groundSchool,
    title: "Ground School",
    subtitle: "",
    index: 0,
    prevPage: "advancedrockcrawl",
    nextPage: "orientation",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Capability",
            small: "Clearance &",
            bullets: [
              { data: "Maximum Approach Angle: **43.2&deg;**" },
              { data: "Maximum Departure Angle **37.2&deg;**" },
              { data: "Maximum Breakover Angle **29.0&deg;**" },
              { data: 'Maximum Ground Clearance **11.6"**' }
            ],
            imageref:broncoABC
          }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Traction",
            small: "Torque &",
            bullets: [
              { data: "Front Locking Differential" },
              { data: "Rear Locking Differential" },
              {
                data: "7-Speed Manual Transmission (6+1 with Crawler Gear) OR 10-Speed Automatic Transmission with Trail Control"
              },
              { data: "Two-Speed 4x4 Transfer Case with Low-Range (4L)" }
            ],
            imageref:powerTrain
          }
        ]
      }
    ]
  },
  {
    boardName: "HillClimb",
    address: "hillclimb",
    linkImage: hillclimb,
    title: "Hill Climb",
    subtitle: "",
    index: 3,
    prevPage: "softsand",
    nextPage: "crossings",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Survey the Hill",
            small: "Before You Drive...",
            bullets: [
              {
                data: "Scout the hill's crest - **don't guess** what's on the other side!"
              },
              {
                data: "Plan your line parallel to the fall line (the natural path a ball would take rolling down)"
              },
              {
                data: "Engage Hill Descent Control or Trail Control in case of a failed hill climb"
              }
            ]
          },
          {
            displayType: displayType["smallLead"],
            large: "Constand & Steady Acceleration",
            small: "As You Drive...",
            bullets: [
              {
                data: "Point the vehicle up the hill and make sure the wheels are straight"
              },
              {
                data: "Shift into Drive and let the transmission do the work - it will choose the best gear to maintain your momentum"
              },
              {
                data: "As you reach the top of the hill, ease up on the throttle and slow to a crawl (or stop) to evaluate the descent on the other side"
              }
            ]
          }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
            displayType: displayType["aside"],
            large: "What if I can't make it up the hill?",
            bullets: [
              {
                data: "Stay calm and come to a stop - adjust your steering as needed to direct the vehicle back down the hill"
              },
              {
                data: "If not already on, engage Trail Control (automatic transmission) or Hill Descent Controls (manual transmission)"
              },
              {
                data: "Put the vehicle in Reverse and look over your shoulder or use your mirrors as you slowly back down the hill"
              },
              {
                data: "Don't touch the brake or throttle - Trail Control and Hill Descent Control will manage the rate of descent by applying individual brakes as necessary"
              },
              {
                data: "Adjust your speed using the SET+ and SET- buttons on the steering wheel"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "HillDescent",
    address: "hilldescent",
    linkImage: downhill,
    title: "Hill Descent",
    subtitle: "",
    index: 3,
    prevPage: "crossings",
    nextPage: "rockcrawling",
    layouts: [
      {
        position: position["lefttwothirds"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Survey the Hill",
            small: "Before You Drive...",
            bullets: [
              { data: "Scout the descent for possible obstacles" },
              {
                data: "Plan your line parallel to the fall line (the natural path a ball would take rolling down). Avoid turning diagonally to the fall line, as this increases the risk of roll over"
              }
            ]
          },
          {
            displayType: displayType["smallLead"],
            large: "Constand & Steady Acceleration",
            small: "As You Drive...",
            bullets: [
              {
                data: "Point the vehicle down the hill and keep turns minimal"
              },
              {
                data: "Select manual mode on the shifter and 1st gear (automatic transmission), 4L on the transfer case, for maximum engine braking and control"
              },
              {
                data: "Maintain a slow, controlled speed - minimize brake useage to reduce the chance of wheel lock up or sliding"
              }
            ]
          }
        ]
      },
      {
        position: position["rightonethird"],
        components: [
          {
            displayType: displayType["aside"],
            large: "Bronco Trail Control & Hill Descent Control",
            bullets: [
              {
                data: "If not already on engage Trail Control (automatic transmission) or Hill Descent Control (manual transmission) and begin your descent"
              },
              {
                data: "Don't touch the brake or throttle - Trail Control and Hill Descent Control will manage the rate of descent by applying individual brakes as necessary"
              },
              {
                data: "Adjust your speed using the SET+ and SET- buttons on the steering wheel"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "Orientation",
    address: "orientation",
    linkImage: orientation,
    title: "Orientation",
    subtitle: "ORX Course Start",
    index: 1,
    prevPage: "groundschool",
    nextPage: "softsand",
    layouts: [
      {
        position: position["lefttwothirds"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Push Button Controls",
            small: "Off-Road Switch Pack with",
            bullets: [
              { data: "Front Stabilizer Bar Disconnect", image:stabarDisconnect },
              { data: "Front Locking Differential", image:FrontLockingDifferential },
              { data: "Rear Locking Differential", image: RearLockingDifferential },
              { data: "Trail Turn Assist", image: TrailTurnAssist }
            ]
          }
        ]
      },
      {
        position: position["rightonethird"],
        components: [
          {
            displayType: displayType["aside"],
            large:
              "Trail Turn Assist helps manage tight turns on the trail by **reducing the turning radius by as much as 40%**. It does this by applying the brake to the inside rear wheel as the vehicle turns in low-speed off-road environments",
            small: ""
          }
        ]
      }
    ]
  },
  {
    boardName: "SideTilts",
    address: "sidetilts",
    linkImage: sidetilt,
    title: "Side Tilts",
    subtitle: "& Center of Gravity",
    index: 7,
    prevPage: "rockcrawling",
    nextPage: "articulationmounds",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Maximum Side Tilt Angle",
            small: "",
            bullets: [
              { data: "How much does the vehicle weigh" },
              { data: "How much do onboard passengers and cargo weigh" },
              { data: "Are there suspension and / or tire modifications" },
              { data: "Consider the vehicles speed and trail conditions" },
              { data: "Are there any roof rack loads" }
            ]
          },
          {
            displayType: displayType["aside"],
            large: "Don't Panic!",
            small: "",
            bullets: [
              {
                data: "If the vehicle starts to slip or roll, turn downhill and lightly accelerate to balance the vehicle. Take a deep breath"
              }
            ]
          }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
            displayType: displayType["smallLead"],
            small: "End Stop Control Valve (ESCV) Technology",
            large: "Bilstein Shock Absorbers",
            bullets: [
              {
                data: "ESCV technology was designed to utilize posistion sensitive damping, allowing the passengers to enjoy on-road comfort while maximizing off-road control and stability."
              },
              {
                data: "When weight is transferred during a tilt, ESCV provides additional control of the vehicle."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    boardName: "SoftSand",
    address: "softsand",
    linkImage: softSand,
    title: "Soft Sand",
    subtitle: "",
    index: 2,
    prevPage: "orientation",
    nextPage: "hillclimb",
    layouts: [
      {
        position: position["lefthalf"],
        border: false,
        components: [
          {
            displayType: displayType["smallLead"],
            large: "Driving In Sand",
            small: "Tips for",
            bullets: [
              {
                data: "Maintain a steady, quicker pace to **float** the vehicle on top of the sand"
              },
              {
                data: "Make gentle, wider turns to prevent the tires from digging into the sand"
              },
              {
                data: "Be smooth with both the throttle and brakes to minimize weight transfer"
              },
              {
                data: "**Air down** the tires to increase tire footprint"
              }
            ]
          }
        ]
      },
      {
        position: position["righthalf"],
        components: [
          {
            displayType: displayType["smallLead"],
            small: 'Dial in the **SAND**',
            large: "G.O.A.T. Modes",
            bullets: [
              {
                data: "Designed for soft, dry sand (also useful in deep snow)"
              },
              {
                data: "Optimizes powertrain, steering, and traction control response for these conditions"
              },
              {
                data: "Engages 4H and locks the rear differential (if equipped) when selected"
              }
            ]
          }
        ]
      }
    ]
  }
]
/*
  const prevPage="orientation"
  const nextPage="hillclimb"
  const info1 = [
    {data:"Maintain a steady, quicker pace to 'float' the vehicle on top of the sand"},
    {data:"Make gentle, wider turns to prevent the tires from digging into the sand"},
    {data:"Be smooth with both the throttle and brakes to minimize weight transfer"},
    {data:"Consider airing down the tires to increase tire footprint"}
  ]
  const info2 = [
    {data:"Designed for soft, dry sand (also useful in deep snow)"},
    {data:"Optimizes powertrain, steering, and traction control response for these conditions"},
    {data:"Engages 4H and locks the rear differential (if equipped) when selected"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Soft Sand" sub="" />
      <div className="data-container">
        <div className="offroad-left-half lborder">
          <SmallLeadInfo small="Tips for" intro={undefined} large="Driving in Sand" bullets={info1} />
        </div>
        <div className="offroad-right-half">
          <SmallLeadInfo small='Dial in the "SAND"' intro={undefined} large="G.O.A.T. Modes" bullets={info2}  />
        </div>
      </div>
    </>
  )
  */
