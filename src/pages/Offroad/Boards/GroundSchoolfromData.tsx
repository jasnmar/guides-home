import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function GroundSchoolfromData() {
  const bName="GroundSchool"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default GroundSchoolfromData