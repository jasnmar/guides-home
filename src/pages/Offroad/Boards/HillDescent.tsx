import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"

function HillDescent() {
  const prevPage="crossings"
  const nextPage="basicrockcrawl"
  const info1 = [
    {id:"701", data:"Scout the descent for possible obstacles"},
    {id:"702", data:"Plan your line parallel to the fall line (the natural path a ball would take rolling down). Avoid turning diagonally to the fall line, as this increases the risk of roll over"}
  ]
  const info2 = [
    {id:"703", data:"Point the vehicle down the hill and keep turns minimal"},
    {id:"704", data:"Select 1st gear, 4L on the transfer case, for maximum engine braking and control"},
    {id:"705", data:"Maintain a slow, controlled speed - minimize brake useage to reduce the change of wheel lock up or sliding"}
  ]
  const info3 = [
    {id:"706", data:"If not already on engage Trail Control (automatic transmission) or Hill Descent Control (manual transmission) and begin your descent"},
    {id:"707", data:"Don't touch the brake or throttle - Trail Control and Hill Descent Control will manage the rate of descent by applying individual brakes as necessary"},
    {id:"708", data:"Adjust your speed using the SET+ and SET- buttons on the steering wheel, or accelerate as needed"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Hill Descent" sub="" />
      <div className="data-container">
        <div className="offroad-left-two-thirds">
          <SmallLeadInfo small="Before you Drive..." intro={undefined} large="Survey the Hill" bullets={info1}/>
          <SmallLeadInfo small="As you Drive..." intro={undefined} large="Constant & Steady Acceleration" bullets={info2}/>
        </div>
        <div className="offroad-right-one-third">
          <Aside asideText="Bronco Trail Control & Hill Descent Control" asideBullets={info3} />
        </div>

      </div>
    </>
  )
}

export default HillDescent