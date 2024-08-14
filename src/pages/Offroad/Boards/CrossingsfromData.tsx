import "../Offroad.css"
import { renderBoard } from "../renderBoard"


function CrossingfromData() {
  const bName="Crossings"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default CrossingfromData