import "./SmallLeadInfo.css"
import BulletList from "../BulletList/BulletList"



function SmallLeadInfo(props : {small?:string, large:string, intro?:string, bullets:{ data:string, image?: string}[]}) {
  


  return (
    <>
      <p className="SmallLeadSmall">{props.small}</p>
      <p className="SmallLeadLarge">{props.large}</p>
      {props.intro ? <p className="SmallLeadIntro">{props.intro}</p> : <></>}
      <ul className="smallLeadUL">
        <BulletList bullets={props.bullets}/>
      </ul>
    </>
  )
}

export default SmallLeadInfo