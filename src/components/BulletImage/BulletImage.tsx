import "./BulletImage.css"
import ComponentImage from "../ComponentImage/ComponentImage"

function BulletImage(props: { imageIdetifier: string }) {
  return (
    <div className="bullet-image-wrapper">
      <ComponentImage imageRef={props.imageIdetifier} />
    </div>
  )
}

export default BulletImage