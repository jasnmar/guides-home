import "./Recovery.css"
import Stop from "./Stop"
import Think from "./Think"
import PageTitle from "../../components/Title/PageTitle"

function StuckAssesment() {
  PageTitle("Stuck Assessment", "Learn the essential STOP and THINK method for evaluating off-road recovery situations. Safety first when you're stuck.")
  return (
    <>
      <main className="page-content">
        <h1>Stuck Assesment</h1>
        <Stop />
        <Think />
      </main>
    </>
    
  )
}

export default StuckAssesment

