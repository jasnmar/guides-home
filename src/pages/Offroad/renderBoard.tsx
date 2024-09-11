import { ReactElement } from "react"
import { v4 as uuidv4 } from "uuid"
import { boardData } from "./boardData"
import { component, layout, layouts } from "./boardInterfaces"
import InfoComponentTitle from "../../components/InfoComponentTitle/InfoComponentTitle"
import FrontBack from "../../components/FrontBack/FrontBack"
import SmallLeadInfo from "../../components/SmallLeadInfo/SmallLeadInfo"
import Aside from "../../components/Aside/Aside"

export function renderBoard(bName: string): ReactElement {
  const bData = boardData.find(({ boardName }) => boardName === bName)
  let pPage = ""
  let nPage = ""
  let icTitle = ""
  let icSub = ""
  let boardLayouts: ReactElement[] = []
  if (bData) {
    //Previous and Next Page info
    if (bData.prevPage) {
      pPage = bData.prevPage
    }
    if (bData.nextPage) {
      nPage = bData.nextPage
    }

    //Title Info
    if (bData.title) {
      icTitle = bData.title
    }
    if (bData.subtitle) {
      icSub = bData.subtitle
    }

    //Board Layouts - This is the start of the rabbit hole
    if (bData.layouts) {
      boardLayouts = buildLayouts(bData.layouts)
    }
  }
  return (
    <>
      <main>
        <FrontBack nextPage={nPage} previousPage={pPage} />
        <InfoComponentTitle title={icTitle} sub={icSub} />
        <div className="data-container">{boardLayouts}</div>
      </main>
    </>
  )
}

//Takes all of the layouts for a page and returns individual React Elements
//for each of them.
export function buildLayouts(layouts: layouts): ReactElement[] {
  let renderedLayouts: ReactElement[] = [<></>]
  renderedLayouts = layouts.map((layout) => {
    let components: ReactElement = <></>
    //If the layout has a components array (and they should)
    if (layout.components) {
      //Figure out the classlist for the layout, and give it to the component builder
      let classList = layout.position.toString()
      if (layout.border === true) {
        classList += " lborder"
      }
      //Builds (conceptually) all of the components
      components = buildComponents(layout, classList)
      return components
    }
    return <></>
  })
  return renderedLayouts
}

//Builds all of the components in a layout.
function buildComponents(layout: layout, classList: string): ReactElement {
  if (layout.components) {
    const componentList: component[] = layout.components
    if (componentList) {
      const renderedComponents: ReactElement[] = componentList.map(
        (component) => {
          return buildSingleComponent(component)
        }
      )
      const rCompList: ReactElement = (
        <div key={uuidv4()} className={classList}>
          {renderedComponents}
        </div>
      )
      return rCompList
    } else {
      return <></>
    }
  } else {
    return <></>
  }
}

function buildSingleComponent(component: component) {
  let fixedBullets: { id?: string; data: string }[] = []
  let imageReference: string
  if (component.bullets) {
    fixedBullets = component.bullets
  }
  if (component.imageref) {
    imageReference = component.imageref
  } else {
    imageReference = ""
  }
  let renderedComponent: ReactElement = <></>
  switch (component.displayType) {
    case "small-lead":
      renderedComponent = (
        <div key={uuidv4()}>
          <SmallLeadInfo
            large={component.large}
            small={component.small}
            bullets={fixedBullets}
            imageref={imageReference}
          ></SmallLeadInfo>
        </div>
      )
      break
    case "aside":
      renderedComponent = (
        <div key={uuidv4()}>
          <Aside
            asideText={component.large}
            asideBullets={fixedBullets}
          ></Aside>
        </div>
      )
      break
  }

  return renderedComponent
}
