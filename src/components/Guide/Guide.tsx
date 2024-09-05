import { ReactElement } from "react"
import { v4 as uuidV4 } from 'uuid'
import { guideDataInterface } from "../../pages/Guides/GuideInterfaces"
import "./Guide.css"


function Guide( props : guideDataInterface ) {








// venmoLink?: string,


  //If there are multiple strings in the bio, treat each as it's own paragraph
  const bioDetails : ReactElement[] = props.bio.map((statement) => {
    return <p key={uuidV4()}>{statement}</p>
  })
  console.log('props.started: ', props.started)
  return (
    <>
      <h1>{props.firstName} {props.lastName}</h1>
      <h2>{props.firstName} is a {props.level} level Off-Roadeo guide in {props.location} {props.started && "and has been since "+props.started}</h2>
      <div>{bioDetails}</div>
      <div><img src={props.headshot}></img></div>
      <div><a href={props.venmoLink}><img src={props.venmoImage}></img></a></div>
    </>
  )
}

export default Guide