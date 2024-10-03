import "../Offroad.css"
import { RenderBoard } from "../renderBoard"

function WaterFordingfromData() {
  const bName="WaterFording"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default WaterFordingfromData