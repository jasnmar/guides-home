import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function SideTiltsfromData() {
  const bName="SideTilts"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default SideTiltsfromData