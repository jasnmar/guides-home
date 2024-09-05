import { LoaderFunctionArgs } from "react-router-dom"
import { guideData } from "../guideData"
import { guideDataInterface } from "../GuideInterfaces"

async function GuideDetailLoader(req: LoaderFunctionArgs) {
  const { params } = req
  const { id } = params
  let guideId = 0
  if (id) {
    guideId = parseInt(id)
  }
  const guide : guideDataInterface = guideData.find(({ id }) => {
    if (id === guideId) {
      return true
    }
  }) || guideData[0]
  if (guide) {
    return guide
  }
}

export default GuideDetailLoader
