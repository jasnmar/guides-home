import "./RecoveryCard.css"
import ReactMarkdown from "react-markdown"
import { v4 as uuidV4} from 'uuid'

function RecoveryCard(props: {imageInfo?:{image:string, altText:string, link?:string}[], children:string, title?:string}) {
  let imageList
  if(props.imageInfo) {
    imageList = props.imageInfo.map(image => {
      if(image.link) {
        return <a key={uuidV4()} href={image.link} target="_blank"> <img className="recoveryCard--gear-image"  src={image.image} alt={image.altText}></img></a>
      } else {
        return <img key={uuidV4()} className="recoveryCard--gear-image"  src={image.image} alt={image.altText}></img>
      }
    });
  }
  return (
    <>
      <div className="recoveryCard--card">
        {props.title && <h2>{props.title}</h2>}
        <ReactMarkdown>{props.children}</ReactMarkdown>
        <div className="recoveryCard--images">{imageList}</div>
      </div>
    </>
  )
}

export default RecoveryCard