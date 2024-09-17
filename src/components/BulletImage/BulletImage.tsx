import "./BulletImage.css"


function BulletImage(props : {imageIdetifier: string }) {
  return (
    <>
      <img className="bullet-image-default" src={props.imageIdetifier}></img>
    </>
  )
}

export default BulletImage