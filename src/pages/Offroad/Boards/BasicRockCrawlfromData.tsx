import "../Offroad.css"
import { RenderBoard } from "../renderBoard"


function BasicRockCrawlfromData() {
  const bName="BasicRockCrawl"
  const boardElement = RenderBoard({board: bName})
  
  return (
    <>
      {boardElement}
    </>
  )
}

export default BasicRockCrawlfromData