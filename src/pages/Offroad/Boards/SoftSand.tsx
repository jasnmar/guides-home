import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import FrontBack from "../../../components/FrontBack/FrontBack"

function SoftSand() {
  const prevPage="/orientation"
  const nextPage="/hillclimb"
  const info1 = [
    {id:401, data:"Maintain a steady, quicker pace to 'float' the vehicle on top of the sand"},
    {id:402, data:"Make gentle, wider turns to prevent the tires from digging into the sand"},
    {id:403, data:"Be smooth with both the throttle and brakes to minimize weight transfer"},
    {id:404, data:"Consider airing down the tires to increase tire footprint"}
  ]
  const info2 = [
    {id:501, data:"Designed for soft, dry sand (also useful in deep snow)"},
    {id:502, data:"Optimizes powertrain, steering, and traction control response for these conditions"},
    {id:503, data:"Engages 4H and locks the rear differential (if equipped) when selected"}
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
}

export default SoftSand