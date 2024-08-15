import "./BulletImage.css"


function BulletImage(props : {imageIdetifier: string }) {
  return (
    <>
      <img className="bullet-image-default" src={"/"+props.imageIdetifier+".svg"}></img>
    </>
  )
}

export default BulletImage