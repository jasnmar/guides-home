import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import FrontBack from "../../../components/FrontBack/FrontBack"
import Aside from "../../../components/Aside/Aside"

function AdvancedRockCrawl() {
  const prevPage="/waterfording"
  const nextPage="/groundschool"
  const info1 = [
    {id:1301, data:"Press the center button on the 4x4 selector to turn on or off"},
    {id:1302, data:"Depress the accelerator pedal to speed up"},
    {id:1303, data:"Back off the accelerator with your foot still on the pedal to slow down"},
    {id:1304, data:"Release the pedal completely to come to a complete stop"}
  ]
  const info2 = [
    {id:1401, data:"Stay in 4L for max throttle control. Slow and precise wins the day"},
    {id:1402, data:"Look and think ahead. Take the time to choose the correct line through the rocks."},
    {id:1403, data:"Modulate the throttle. Too much or too little can make a big difference."},
    {id:1404, data:"Minimize steering inputs. Subtle movements will get you through"},
    {id:1405, data:"Keep your tires on top of the rocks. The path of least resistance."},
    {id:1406, data:"Watch your sidewalls. Sharp rocks can puncture the side of a tire."}
  ]

  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Rock Crawling" sub="Advanced" />
      <div className="data-container">
        <div className="offroad-left-half lborder">
          <SmallLeadInfo small="(2.7L EcoBoost)" intro="Allows you to speed up and slow down using only the accelerator pedal, so you can stay focused on navigating difficult terrain ahead. Renders two-footed drving obsolete for low-speed, off-road crawling" large="Bronco Trail 1-Pedal Drive" bullets={info1} />
        </div>
        <div className="offroad-right-half">
          <Aside asideText="Put your off-roading skills to the test and follow these guidelines:" asideBullets={info2} />
        </div>
      </div>
    </>
  )
}

export default AdvancedRockCrawl