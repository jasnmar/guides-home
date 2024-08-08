import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import FrontBack from "../../../components/FrontBack/FrontBack"

function GroundSchool() {
  const prevPage="/hillclimb"
  const nextPage="/orientation"
  const info1 = [
    {id:1, data:"Max Approach Angle 43.2 degrees"},
    {id:2, data:"Max Departure Angle 37.2 degrees"},
    {id:3, data:"Max Breakover Angle 29.0 degrees"},
    {id:4, data:"Max Ground Clearance 11.6 inches"}
  ]
  const info2 = [
    {id:100, data:"Front Locking Differential"},
    {id:101, data:"Rear Locking Differential"},
    {id:102, data:"7-Speed Manual Transmission (6+1 with Crawler Gear) OR 10-Speec Automatic Transmission with Trail Control"},
    {id:103, data:"Two-Speed 4x4 Transfer Case with Low-Range(4L) Ratio"}
  ]  
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Ground School" sub="" />
      <div className="data-container">
        <div className="offroad-left-half lborder">
          <SmallLeadInfo small="Clearance &" large="Capability" bullets={info1} />
        </div>
        <div className="offroad-right-half">
          <SmallLeadInfo small="Torque &" large="Traction" bullets={info2} />
        </div>
      </div>
    </>
  )
}

export default GroundSchool