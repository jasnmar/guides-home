import "../Offroad.css"
import { renderBoard } from "../renderBoard"


function OrientationfromData() {
  const bName="Orientation"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default OrientationfromData