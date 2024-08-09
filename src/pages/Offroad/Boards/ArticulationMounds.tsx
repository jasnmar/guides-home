import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"

function ArticulationMounds() {
  const prevPage="/sidetilt"
  const nextPage="/waterfording"
  const info1 = [
    {id:1001, data:"Locking differentials force the two wheels of an axle to turn at the same speed when engaged"},
    {id:1002, data:"Locking differentials prevent the wheel without traction from spinning and delivers torque with traction"},
    {id:1003, data:"Should not be left engaged on dry pavement (causes wheel scrubbing and driveline damage"}
  ]
  const info2 = [
    {id:1004, data:"Use when going over large rocks or very uneven terrain"},
    {id:1005, data:"Allows full articulation to help keep the extended wheel on the ground"},
    {id:1006, data:"Hydraulically actuated - the stabilizer bar con disconnect under load"},
    {id:1007, data:"Must be in off-road G.O.A.T. Modes to disconnect - Sand, Mud/Ruts, Rock Crawl, Baja or Normal"},
    {id:1008, data:"Must be at speeds below 20 mph"},
    {id:1009, data:"Automatically disconnects when in Rock Crawl mode"},
    {id:1010, data:"Automaticallly reconnects once back on level ground and at 20 mph"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Articulation Mounds" sub="" />
      <div className="data-container">
        <div className="offroad-left-half">
          <SmallLeadInfo small="Getting Tourque to the Wheels with Electronic" intro={undefined} large="Locking Differentials" bullets={info1}/>
        </div>
        <div className="offroad-right-half">
        <SmallLeadInfo small="Front Stabilizer Bar Disconnecting System" intro={undefined} large="Maximizing Articulation" bullets={info2}/>
        </div>

      </div>
    </>
  )
}

export default ArticulationMounds