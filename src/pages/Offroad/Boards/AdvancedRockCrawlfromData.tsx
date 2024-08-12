import "../Offroad.css"
import InfoComponentTitle from "../../../components/InfoComponentTitle/InfoComponentTitle"
import ShortUniqueId from "short-unique-id"
import { bullets, layouts } from "./boardInterfaces"

import { boardData } from "./boardData"
import FrontBack from "../../../components/FrontBack/FrontBack"
import SmallLeadInfo from "../../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../../components/Aside/Aside"
import { ReactElement } from "react"


function AdvancedRockCrawlfromData() {
  console.log('boardData', boardData)
  const bName="AdvancedRockCrawl"
  const bData = boardData.find(({boardName}) => boardName === bName)
  console.log('bData', bData)
  let pPage = ""
  let nPage = ""
  let icTitle = ""
  let icSub = ""
  let boardLayouts:ReactElement[] = []
  if(bData) {
    //Previous and Next Page info
    if(bData.prevPage) {
      pPage = bData.prevPage
    }
    if(bData.nextPage) {
      nPage = bData.nextPage
    }

    //Title Info
    if(bData.title) {
      icTitle = bData.title
    }
    if(bData.subtitle) {
      icSub = bData.subtitle
    }

    //Board Layouts
    if(bData.layouts) {
      boardLayouts = buildLayouts(bData.layouts)
      console.log('boardLayouts: ', boardLayouts)
    }
  }

  function buildLayouts(layouts:layouts):ReactElement[] {
    console.log('layouts: ', layouts)
    const retLayouts = layouts.map((layout) => {
      let classList = layout.position.toString()
      if(layout.border===true) {
        classList += " lborder"
      }
      console.log('classList: ', classList)
      //This should be temporary (famous last words)
      let fixedBullets : {id:string, data:string}[] = []
      if(layout.bullets) {
        fixedBullets = processBullets(layout.bullets)
      }
      let jsxItem : ReactElement = <></>
      switch (layout.displayType) {
        case "small-lead":
          jsxItem = <>
            <div key={parseInt(JSON.stringify(new ShortUniqueId()))} className={classList}>
              <SmallLeadInfo large={layout.large} small={layout.small} bullets={fixedBullets}>
              </SmallLeadInfo>
            </div>
          </>
          break
        case "aside":
          jsxItem = <>
            <div className={classList}>
              <Aside asideText={layout.large} asideBullets={fixedBullets}> 
              </Aside>
            </div>
          </>
          break
      }
      return jsxItem
      

    })
    return retLayouts
  }
  function processBullets(bullets:bullets) : {id:string, data:string}[] {
    const oldBulletList = bullets.map((bullet)=> {
      const newID = JSON.stringify(new ShortUniqueId())
      return {id: newID, ...bullet}
    })
    return oldBulletList
  }
  
  return (
    <>
      <FrontBack nextPage={nPage} previousPage={pPage}/>
      <InfoComponentTitle title={icTitle} sub={icSub} />
      <div className="data-container">
        {boardLayouts}
      </div>
    </>
  )
}

export default AdvancedRockCrawlfromData