import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"

function WaterFording() {
  const prevPage="/articulationmounds"
  const nextPage="/advancedrockcrawl"
  const info1 = [
    {id:"1101", data:"If you don't know the dept, dont attemt to cross"},
    {id:"1102", data:"Check bottom conditions for traction - is it sand, mud, rocks?"},
    {id:"1103", data:"Plan a line diagonal to the current"}
  ]
  const info2 = [
    {id:"1201", data:"Enter smoothly to prevent excessive splashing"},
    {id:"1202", data:"Maintain steady forward momentum - not too fast and not too slow"},
    {id:"1203", data:"Create a bow wave to disperse water away from the engine bay"}
  ]
  return (
    <>
    <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Water Fording" sub="" />
      <div className="data-container">
        <div className="offroad-left-half">
          <SmallLeadInfo small="Before you Drive..." intro={undefined} large="Survey the Water" bullets={info1}/>
        </div>
        <div className="offroad-right-half">
        <SmallLeadInfo small="As you drive..." intro={undefined} large="Stay Smooth & Steady" bullets={info2}/>
        </div>

      </div>
    </>
  )
}

export default WaterFording