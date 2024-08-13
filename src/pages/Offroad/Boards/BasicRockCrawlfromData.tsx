import "../Offroad.css"
import { renderBoard } from "./renderBoard"


function BasicRockCrawlfromData() {
  const bName="BasicRockCrawl"
  const boardElement = renderBoard(bName)
  
  return (
    <>
      {boardElement}
    </>
  )
}





export default BasicRockCrawlfromData