import "./BulletImage.css"


function BulletImage(props : {imageIdetifier: string }) {
  const imageName = stop
  console.log('imageName', imageName)
  return (
    <>
      <img className="bullet-image-default" src={"/"+props.imageIdetifier+".svg"}></img>
    </>
  )
}

export default BulletImage