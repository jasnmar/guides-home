import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"

function SideTilts() {
  const prevPage="/basicrockcrawl"
  const nextPage="/articulationmounds"
  const info1 = [
    {id:901, data:"Vehicle Weight"},
    {id:902, data:"Onboard passenger and cargo weight"},
    {id:903, data:"Suspension and tire modifications"},
    {id:904, data:"Vehicle speed and trail conditions"},
    {id:905, data:"Roof rack loads"}
  ]
  const info2 = [
    {id:907, data:"ESCV technology was designed to utilize posistion sensitive damping, allowing the passengers to enjoy on-road comfort while maximizing off-road control and stability."},
    {id:908, data:"When weight is transferred during a tilt, ESCV provides additional control of the vehicle."}
  ]
  const info3 = [
    {id:906, data:"If the vehicle starts to slip or roll, turn downhill and lightly accelerate to balance the vehicle. Take a deep breath"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Side Tilts" sub="& Center of Gravity" />
      <div className="data-container">
        <div className="offroad-left-half">
          <SmallLeadInfo small="" intro="This angle is how far the vehicle can lean safely and can be influenced by several factors:" large="Maximum Side Tilt Angle" bullets={info1}/>
          <Aside asideText="Don't Panic!" asideBullets={info3} />
          
        </div>
        <div className="offroad-right-half">
        <SmallLeadInfo small="End Stop Control Valve (ESCV) Technology" intro={undefined} large="Bilstein Shock Absorbers" bullets={info2}/>
        </div>

      </div>
    </>
  )
}

export default SideTilts