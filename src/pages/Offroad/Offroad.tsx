import "./Offroad.css"
import { Link } from "react-router-dom"

function Offroad() {
  return (
    <>
      <main className="page-content">
        <h1>Offroading</h1>
        <p>The pages below represent the signs that are scattered around the ORX (Off-Road Experience) Course that guests start the day on (including ground school, which we talk about differently).</p>
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
      </main>
    </>
  )
}

export default Offroad
