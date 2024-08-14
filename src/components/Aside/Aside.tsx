import "./Aside.css"
import { bronco } from "../../assets/images"
import BulletList from "../BulletList/BulletList"

function Aside(props :{asideText:string, asideBullets?:{ data:string}[]}) {
  

  return (
    <>
      <div className="aside">
      <img className="bronc-logo" src={bronco}></img>
      <p className={props.asideBullets ? "aside-header":"aside-text"}>{props.asideText}</p>
      <ul className="Aside-UL">
        {props.asideBullets && <BulletList bullets={props.asideBullets}/>}
      </ul>
      </div>
    </>
  )
}

export default Aside