import "./Offroad.css"
import "./Boards/GroundSchool"
import "./Boards/Orientation"
import { Link } from "react-router-dom"

function Offroad() {
  return (
    <>
      <h1>Offroading</h1>
      <Link to="/groundschool">Ground School</Link><br></br>
      <Link to="/orientation">Orientation</Link><br></br>
      <Link to="/softsand">Soft Sand</Link><br></br>
      <Link to="/hillclimb">Hill Climb</Link><br></br>
      <Link to="/crossings">Crossings</Link><br></br>
      <Link to="/hilldescent">Hill Descent</Link><br></br>
      <Link to="/basicrockcrawl">Basic Rock Crawl</Link><br></br>
      <Link to="/sidetilts">Side Tilts</Link><br></br>
      <Link to="/articulationmounds">Articulation Mounds</Link><br></br>
      <Link to="/waterfording">Water Fording</Link><br></br>
      <Link to="/advancedrockcrawl">Advanced Rock Crawl</Link>
    </>
  )
}

export default Offroad
