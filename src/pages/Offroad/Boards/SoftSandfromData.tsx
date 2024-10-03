import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function SoftSandfromData() {
  const bName="SoftSand"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default SoftSandfromData