import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function AdvancedRockCrawlfromData() {
  const bName="AdvancedRockCrawl"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}





export default AdvancedRockCrawlfromData