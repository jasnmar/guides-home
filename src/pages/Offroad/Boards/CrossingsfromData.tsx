import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function CrossingfromData() {
  const bName="Crossings"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default CrossingfromData