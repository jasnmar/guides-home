import "../Offroad.css"
import { renderBoard } from "./renderBoard"

function WaterFordingfromData() {
  const bName="WaterFording"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default WaterFordingfromData