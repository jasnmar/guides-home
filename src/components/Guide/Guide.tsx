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
import ComponentImage from "../ComponentImage/ComponentImage"

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
          {props.fblink && <a href={props.fblink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={fbLogo} /></a>}
          {props.xLink && <a href={props.xLink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={xLogo} /></a>}
          {props.instaLink && <a href={props.instaLink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={instLogo} /></a>}
          {props.youTubeLink && <a href={props.youTubeLink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={youTubeLogo} /></a>}
          {props.linkedInLink && <a href={props.linkedInLink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={linkedInLogo} /></a>}
          {props.email && <a href={props.email}><ComponentImage className="guide--social-logo" imageRef={emailLogo} /></a>}
          {props.venmoLink && <a href={props.venmoLink} target="_blank" rel="noopener noreferrer"><ComponentImage className="guide--social-logo" imageRef={venmoLogo} /></a>}
        </div>
      </div>
    </>
  )
}

export default Guide