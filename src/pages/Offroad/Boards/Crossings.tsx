import "../Offroad.css"
import FrontBack from "../../../components/FrontBack/FrontBack"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"

function Crossings() {
  const prevPage="/hillclimb"
  const nextPage="/groundschool"
  return (
    <>
      <FrontBack nextPage={prevPage} previousPage={nextPage}/>
      <InfoComponentTitle title="Crossings" sub="Ditch & Log" />
    </>
  )
}

export default Crossings