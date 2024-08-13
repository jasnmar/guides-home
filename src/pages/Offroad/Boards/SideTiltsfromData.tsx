import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function SideTiltsfromData() {
  const bName="SideTilts"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default SideTiltsfromData