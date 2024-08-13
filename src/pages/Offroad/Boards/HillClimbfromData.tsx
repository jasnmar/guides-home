import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function HillClimbfromData() {
  const bName="HillClimb"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default HillClimbfromData