import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function GroundSchoolfromData() {
  const bName="GroundSchool"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default GroundSchoolfromData