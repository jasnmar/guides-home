import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import FrontBack from "../../../components/FrontBack/FrontBack"

function HillClimb() {
  const prevPage="/softsand"
  const nextPage="/groundschool"
  const info1 = [
    {id:501, data:"Scout the hill's crest - don't guess what's on the other side!"},
    {id:502, data:"Plan your line parallel to the fall line (the natural path a ball would take rolling down)"},
    {id:503, data:"Engage HDC or Trail Control in case of a failed hill climb"}
  ]
  const info2 = [
    {id:501, data:"Point the vehicle up the hill and make sure the wheels are straight"},
    {id:502, data:"Shift into Drive and let the transmission do the work - it will choose the best gear to maintain your momentum"},
    {id:503, data:"As you reach the top of thhe hill, ease up on the throttle and slow to a crawl (or stop) to evaluate the descent on the other side"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Hill Climb" sub="" />
      <div className="data-container">
      <div className="offroad-left-two-thirds">
        <SmallLeadInfo small="Before You Drive..." large="Survey the Hill" bullets={info1}/>
        <SmallLeadInfo small="As You Drive..." large="Constant & Steady Acceleration" bullets={info2}/>
      </div>
      </div>
    </>
  )
}

export default HillClimb