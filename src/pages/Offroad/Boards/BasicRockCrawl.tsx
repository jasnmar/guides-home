import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"

function BasicRockCrawl() {
  const prevPage="hilldescent"
  const nextPage="sidetilts"
  const info1 = [
    {id:"801", data:"Increases the contact patch for better grip"},
    {id:"802", data:"Be aware of reduced ground clearance"}
  ]
  const info2 = [
    {id:"803", data:"Designed to decrease the risk of a tire dismounting from the wheel when you air down"},
    {id:"804", data:"Securely clamp the tire bead between the outer edge of the wheels and a bolt-on bead lock ring"}
  ]
  const info3 = [
    {id:"805", data:"Proceed slowly so you can choose the correct line"},
    {id:"806", data:"Make small changes to steering and throttle when required"},
    {id:"807", data:"Don't know the size of the rock... get out and look!"},
    {id:"808", data:"Trust your spotter to guide you through the correct line"},
    {id:"809", data:"Think ahead and have a plan in case a tire slips off a rock"},
    {id:"810", data:"Know your ground clearance and avoid straddling large rocks"}
  ]
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Rock Crawling" sub="The Basics" />
      <div className="data-container">
        <div className="offroad-left-two-thirds">
          <SmallLeadInfo small="" intro={undefined} large="Air Down for More Grip" bullets={info1}/>
          <SmallLeadInfo small="" intro={undefined} large="Beadlock Capable Wheels" bullets={info2}/>
        </div>
        <div className="offroad-right-one-third">
          <Aside asideText="Tips for Rock Crawling" asideBullets={info3} />
        </div>

      </div>
    </>
  )
}

export default BasicRockCrawl