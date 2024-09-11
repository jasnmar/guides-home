import { LoaderFunctionArgs } from "react-router-dom"
import { guideData } from "../guideData"
import { guideDataInterface } from "../GuideInterfaces"

async function GuideDetailLoader(req: LoaderFunctionArgs) {
  const { params } = req
  const { id } = params
  let guideId = 0
  let guideName = ""
  let guide: guideDataInterface
  //If id exists
  if (id) {
    guideId = parseInt(id)
    //if the ID is a number
    if (guideId) {
      guide =
        guideData.find(({ id }) => {
          if (id === guideId) {
            return true
          }
        }) || guideData[0]
    } else {
      //The id is a name
      guideName = id
      guide =
        guideData.find(({ firstName }) => {
          if (firstName === guideName) {
            return true
          }
        }) || guideData[0]
    }
  } else {
    guide = guideData[0]
  }
  if (guide) {
    return guide
  }
}






export default GuideDetailLoader
