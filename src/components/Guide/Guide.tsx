import { ReactElement } from "react"
import { v4 as uuidV4 } from 'uuid'
import ReactMarkdown from 'react-markdown'
import { guideDataInterface } from "../../pages/Guides/GuideInterfaces"
import "./Guide.css"


function Guide( props : guideDataInterface ) {

  //If there are multiple strings in the bio, treat each as it's own paragraph
  const bioDetails : ReactElement[] = props.bio.map((statement) => {
    return <div key={uuidV4()}><ReactMarkdown>{statement}</ReactMarkdown></div>
  })
  console.log('props.started: ', props.started)
  return (
    <>
      <div className="guide--main-card">
        <div className="guide--main-text">
          <h1>{props.firstName} {props.lastName}</h1>
          <h2>{props.firstName} is a {props.level} level Off-Roadeo guide in {props.location} {props.started && "and has been since "+props.started}</h2>
          <div>{bioDetails}</div>
        </div>
        <div><img className="guide--headshot" src={props.headshot}></img></div>
        <div className="guide--tips-section">
          {props.venmoLink && <a href={props.venmoLink}>Buy {props.firstName} a cup of coffee</a>}
          {props.venmoImage && <img className="guide--venmo-qr" src={props.venmoImage}></img>}
        </div>
      </div>
    </>
  )
}

export default Guide