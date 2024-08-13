import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function SoftSandfromData() {
  const bName="SoftSand"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default SoftSandfromData