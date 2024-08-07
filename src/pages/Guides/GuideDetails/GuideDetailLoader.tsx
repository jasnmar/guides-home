import { guideData } from "../../../guideData"


async function GuideDetailLoader({ params } : {params: {id:string}}) {
  const idToFind = parseInt(params.id)
  const guide = guideData.find(({id}) => {
    if(id === idToFind) {
      console.log('id: ', id)
      return true
    }
  })
  console.log('guide: ', guide)
  return guide
}

export default GuideDetailLoader