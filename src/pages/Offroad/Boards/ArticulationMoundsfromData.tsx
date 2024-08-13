import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function ArticulationMoundsfromData() {
  const bName="ArticulationMounds"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}





export default ArticulationMoundsfromData