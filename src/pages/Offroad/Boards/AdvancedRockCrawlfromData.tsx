import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function AdvancedRockCrawlfromData() {
  const bName="AdvancedRockCrawl"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}





export default AdvancedRockCrawlfromData