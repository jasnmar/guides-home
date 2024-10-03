import Title from "../../components/Title/Title"
import "./Offroad.css"
import BoardLink from "../../components/BoardLink/BoardLink"
import { boardData } from "./boardData"
import { v4 as uuidV4} from 'uuid'

function Offroad() {
  Title("Offroading")
  boardData.sort((a,b) => {
    if(a.index < b.index) {
      return -1
    } else {
      return 1
    }
  })
  const boardLinks = boardData.map((board) => {
    return <BoardLink key={uuidV4()} title={board.title} image={board.linkImage} address={board.address}></BoardLink>
  })
  return (
    <>
      <main className="page-content">
        <h1>Offroading</h1>
        <h2>The pages below represent the signs that are scattered around the ORX (Off-Road Experience) Course that guests start the day on (including ground school, which we talk about differently).</h2>
        <div className="offroad--links">

        {boardLinks}
        </div>
        
        
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
