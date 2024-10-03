import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function ArticulationMoundsfromData() {
  const bName="ArticulationMounds"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default ArticulationMoundsfromData