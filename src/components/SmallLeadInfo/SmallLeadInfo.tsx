import "./SmallLeadInfo.css"
import ReactMarkdown from 'react-markdown'
import BulletList from "../BulletList/BulletList"
import ComponentImage from "../ComponentImage/ComponentImage"



function SmallLeadInfo(props : {small?:string, large:string, intro?:string, bullets:{ data:string, image?: string}[], imageref?: string}) {
  return (
    <>
      <div className="SmallLeadSmall"><ReactMarkdown>{props.small}</ReactMarkdown></div>
      <p className="SmallLeadLarge">{props.large}</p>
      {props.intro ? <p className="SmallLeadIntro">{props.intro}</p> : <></>}
      <ul className="smallLeadUL">
        <BulletList bullets={props.bullets}/>
      </ul>
      {props.imageref && <ComponentImage imageRef={props.imageref} />}
    </>
  )
}

export default SmallLeadInfo