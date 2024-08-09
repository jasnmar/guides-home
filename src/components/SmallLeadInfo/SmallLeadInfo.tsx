import "./SmallLeadInfo.css"
import BulletImage from "../BulletImage/BulletImage"


function SmallLeadInfo(props : {small:string, large:string, intro:string|undefined, bullets:{id:number, data:string, image?: string}[]}) {
  

  const bulletList = props.bullets.map((item) => {
    let bullImg = <></>
    if(item.image) {
      bullImg = <BulletImage imageIdetifier={item.image} />
    }
    return (
      <li className="plus-data-bullet" key={item.id}>
        {item.data} {bullImg}
      </li>
    )
  })
  return (
    <>
      <p className="SmallLeadSmall">{props.small}</p>
      <p className="SmallLeadLarge">{props.large}</p>
      {props.intro ? <p className="SmallLeadIntro">{props.intro}</p> : <></>}
      <ul className="smallLeadUL">
        {bulletList}
      </ul>
    </>
  )
}

export default SmallLeadInfo