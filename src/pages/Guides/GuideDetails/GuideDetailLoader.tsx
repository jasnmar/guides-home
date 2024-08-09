import { LoaderFunctionArgs } from "react-router-dom"
import { guideData } from "../../../guideData"


async function GuideDetailLoader( req : LoaderFunctionArgs ) {
  console.log(req)
  const {params} = req
  console.log('params:', params)
  const {id} = params
  let guideId = 0
  if(id) {
    guideId = parseInt(id)
  }
  console.log('guideId:', guideId)
  const guide = guideData.find(({id}) => {
    if(id === guideId) {
      return true
    }
  })
  console.log('guide: ', guide)
  if(guide) {
    return guide
  }
}

export default GuideDetailLoader