import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function OrientationfromData() {
  const bName="Orientation"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default OrientationfromData