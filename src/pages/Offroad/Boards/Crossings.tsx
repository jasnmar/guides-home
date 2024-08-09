import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"


function Crossings() {
  const prevPage="/hillclimb"
  const nextPage="/hilldescent"
  const info1 = [
    {id:601, data:"Stop immediately."},
    {id:602, data:"Slowly come forward. Can be used one-handed with other signams, such as steer left or right"},
    {id:603, data:"Steer and Come Forward. Hold this steering input until direct to change"},
    {id:604, data:"Just a Little Bit. Can be added to to other signamls such as steer left or come forward a little bit"},
    {id:605, data:"Slow Down!"},
    {id:606, data:"Go Back"}
  ]
  const info2 = [
    {id:607, data:"Try to cross a ditch with one wheel in the ditch at a time"},
    {id:608, data:"Cross logs at an angle, one wheel at a time, to decrease clearance needed and to maximize traction"},
    {id:609, data:"Can't make it over and obstacle? Consider using a ramp. If you didn't bring one with you, look around to see if anything is available (rocks or logs) to create a makeshift one. Remember to always tread lightly!"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Crossings" sub="Ditch & Log" />
      <div className="data-container">
        <div className="offroad-left-two-thirds">
          <SmallLeadInfo small="Know Your Off-Road" intro={undefined} large="Hand Signals" bullets={info1}/>
        </div>
        <div className="offroad-right-one-third">
          <Aside asideText="Crossing Tips" asideBullets={info2} />
        </div>

      </div>
    </>
  )
}

export default Crossings