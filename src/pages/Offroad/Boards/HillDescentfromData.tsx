import "../Offroad.css"
import { renderBoard } from "../renderBoard"


function HillDescentfromData() {
  const bName="HillDescent"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default HillDescentfromData