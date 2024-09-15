import { ReactElement } from "react"
import { v4 as uuidV4 } from 'uuid'
import ReactMarkdown from 'react-markdown'
import { 
  fbLogo,
  xLogo,
  instLogo,
  youTubeLogo,
  linkedInLogo,
  emailLogo,
  venmoLogo } from "../../assets/images"
import { guideDataInterface } from "../../pages/Guides/GuideInterfaces"
import "./Guide.css"

function Guide( props : guideDataInterface ) {
  //If there are multiple strings in the bio, treat each as it's own paragraph
  const bioDetails : ReactElement[] = props.bio.map((statement) => {
    return <div key={uuidV4()}><ReactMarkdown>{statement}</ReactMarkdown></div>
  })
  return (
    <>
      <div className="guide--main-card">
        <h1>{props.firstName} {props.lastName}</h1> 
        <h2>{props.firstName} is an Off-Roadeo guide in {props.location} {props.started && "and has been since "+props.started}</h2>
      <div><img className="guide--headshot float" src={props.headshot}></img>{bioDetails}</div>
        <div className="guide--socials">
          {props.fblink && <a href={props.fblink}><img className="guide--social-logo" src={fbLogo}></img></a>}
          {props.xLink && <a href={props.xLink}><img className="guide--social-logo" src={xLogo}></img></a>}
          {props.instaLink && <a href={props.instaLink}><img className="guide--social-logo" src={instLogo}></img></a>}
          {props.youTubeLink && <a href={props.youTubeLink}><img className="guide--social-logo" src={youTubeLogo}></img></a>}
          {props.linkedInLink && <a href={props.linkedInLink}><img className="guide--social-logo" src={linkedInLogo}></img></a>}
          {props.email && <a href={props.email}><img className="guide--social-logo" src={emailLogo}></img></a>}
          {props.venmoLink && <a href={props.venmoLink}><img className="guide--social-logo" src={venmoLogo}></img></a>}
        </div>
      </div>
    </>
  )
}

export default Guide