import "./Aside.css"
import ReactMarkdown from 'react-markdown'
import { bronco } from "../../assets/images"
import BulletList from "../BulletList/BulletList"
import ComponentImage from "../ComponentImage/ComponentImage"

function Aside(props :{asideText:string, asideBullets?:{ data:string}[], imageref?:string}) {
  

  return (
    <>
      <div className="aside">
      <img className="bronc-logo" src={bronco}></img>
      <p className={props.asideBullets ? "aside-header":"aside-text"}><ReactMarkdown>{props.asideText}</ReactMarkdown></p>
      <ul className="Aside-UL">
        {props.asideBullets && <BulletList bullets={props.asideBullets}/>}
      </ul>
      {props.imageref && <ComponentImage imageRef={props.imageref} />}
      </div>
    </>
  )
}

export default Aside