import "./Offroad.css"
import "./Boards/GroundSchool"
import "./Boards/Orientation"
import { Link } from "react-router-dom"

function Offroad() {
  return (
    <>
      <h1>Offroading</h1>
      <p>These are some of the items that we usually talk about at our ORX (Offroad Adventure) course</p>
      <ul>
        <li>
          <Link to="/groundschool">Ground School</Link><br></br>
        </li>
        <li>
          <Link to="/orientation">Orientation</Link><br></br>
        </li>
        <li>
          <Link to="/softsand">Soft Sand</Link><br></br>
        </li>
        <li>
          <Link to="/hillclimb">Hill Climb</Link><br></br>
        </li>
        <li>
          <Link to="/crossings">Crossings</Link><br></br>
        </li>
        <li>
          <Link to="/hilldescent">Hill Descent</Link><br></br>
        </li>
        <li>
          <Link to="/basicrockcrawl">Basic Rock Crawl</Link><br></br>
        </li>
        <li>
          <Link to="/sidetilts">Side Tilts</Link><br></br>
        </li>
        <li>
          <Link to="/articulationmounds">Articulation Mounds</Link><br></br>
        </li>
        <li>
          <Link to="/waterfording">Water Fording</Link><br></br>
        </li>
        <li>
          <Link to="/advancedrockcrawl">Advanced Rock Crawl</Link>
        </li>

      </ul>
    </>
  )
}

export default Offroad
