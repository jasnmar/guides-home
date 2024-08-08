import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"
import FrontBack from "../../../components/FrontBack/FrontBack"

function Orientation() {
  const prevPage="/groundschool"
  const nextPage="/softsand"
  const info1 = [
    {id:201, data:"Front Stabilizer Bar Disconnect"},
    {id:202, data:"Front Locking Differential"},
    {id:203, data:"Rear Locking Differential"},
    {id:204, data:"Trail Turn Assist"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Orientation" sub="ORX Course Start" />
      <div className="data-container">
        <div className="offroad-left-two-thirds">
          <SmallLeadInfo small="Off-Road Switch Pack with" large="Push-Button Controls" bullets={info1} />
        </div>
        <div className="offroad-right-one-third">
          <Aside asideText="Trail Turn Assist helps manage tight turns on the trail by reducing the turning radius by as much as 40%. It does this by applying the brake to the inside rear wheel as the vehicle turns in low-speed off-road environments" asideBullets={undefined} />
        </div>
      </div>
    </>
  )
}

export default Orientation