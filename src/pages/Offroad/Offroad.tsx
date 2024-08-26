import "./Offroad.css"
import { Link } from "react-router-dom"

function Offroad() {
  return (
    <>
      <main className="page-content">
        <h1>Offroading</h1>
        <h2>The pages below represent the signs that are scattered around the ORX (Off-Road Experience) Course that guests start the day on (including ground school, which we talk about differently).</h2>
        <ul className="offroad--list">
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
      <h2>Offroading while you are visiting us</h2>
      <h3>We often get questions about where to off-road while you are visiting, or if you are a local, what are some of the ways to find local roads. Below are some of your best resources for that</h3>
      <h4>New Hampshire</h4>
      <ul className="offroad--list">
        <li><a href="http://www.exploringnh.com" target="_blank">Exploring New Hampshire</a> is a site that includes user forums, primarily targeted at offroaders, but also offers things like off-road driving training, safety courses, etc. A great place to join if you are from New England.</li>
        <li><a href="https://nhroads.com/" target="_blank">NH Roads</a> tries to maintain a database of NH roads, including the "Class 6" roads that many New Hampshire Off-roaders use as their "trails". It's a great starting point to do your research on where to go off-roading.</li>
      </ul>
      </main>
    </>
  )
}

export default Offroad
