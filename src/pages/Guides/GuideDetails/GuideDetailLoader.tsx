import { guideData } from "../../../guideData"


async function GuideDetailLoader({ params } : {params: {id:string}}) {
  const idToFind = parseInt(params.id)
  const guide = guideData.find(({id}) => {
    if(id === idToFind) {

      return true
    }
  })

  return guide
}

export default GuideDetailLoader