import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import FrontBack from "../../../components/FrontBack/FrontBack"
import Aside from "../../../components/Aside/Aside"

function HillClimb() {
  const prevPage="softsand"
  const nextPage="crossings"
  const info1 = [
    {id:"501", data:"Scout the hill's crest - don't guess what's on the other side!"},
    {id:"502", data:"Plan your line parallel to the fall line (the natural path a ball would take rolling down)"},
    {id:"503", data:"Engage Hill Descent Control or Trail Control in case of a failed hill climb"}
  ]
  const info2 = [
    {id:"504", data:"Point the vehicle up the hill and make sure the wheels are straight"},
    {id:"505", data:"Shift into Drive and let the transmission do the work - it will choose the best gear to maintain your momentum"},
    {id:"506", data:"As you reach the top of thhe hill, ease up on the throttle and slow to a crawl (or stop) to evaluate the descent on the other side"}
  ]
  const info3 = [
    {id:"507", data:"Stay calm and come to a stop - adjust your steering as needed to direct the vehicle back down the hill!"},
    {id:"508", data:"If not already on, engage Trail Control (automatic transmission) or Hill Descent Controls (manual transmission)"},
    {id:"509", data:"Put the vehicle in Reverse and look over your shoulde or use your mirrors as you slowly back down the hill"},
    {id:"510", data:"Don't touch the brake or throttle - Trail Control and Hill Descent Control will manage the rate of descent by applying individual brakes as necessary"},
    {id:"511", data:"Adjust you speed using the SET+ and SET- buttons on the steering wheel or accelerate as needed"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Hill Climb" sub="" />
      <div className="data-container">
      <div className="offroad-left-half">
        <SmallLeadInfo small="Before You Drive..." intro={undefined} large="Survey the Hill" bullets={info1}/>
        <SmallLeadInfo small="As You Drive..." intro={undefined} large="Constant & Steady Acceleration" bullets={info2}/>
      </div>
      <div className="offroad-right-half">
        <Aside asideText="What if I can't make it up the hill?" asideBullets={info3}></Aside>
      </div>
      </div>
    </>
  )
}

export default HillClimb