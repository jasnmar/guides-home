import "./BulletImage.css"
import { stop } from "../../assets/images"


function BulletImage(props : {imageIdetifier: string }) {
  const imageName = stop
  console.log('imageName', imageName)
  return (
    <>
      <img src={"../../assets/"+props.imageIdetifier+".svg"}></img>
    </>
  )
}

export default BulletImage