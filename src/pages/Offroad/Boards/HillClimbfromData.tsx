import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function HillClimbfromData() {
  const bName="HillClimb"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default HillClimbfromData