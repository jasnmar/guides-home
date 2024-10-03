import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function HillDescentfromData() {
  const bName="HillDescent"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default HillDescentfromData