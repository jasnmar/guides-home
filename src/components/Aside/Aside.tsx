import "./Aside.css"
import { bronco } from "../../assets/images"

function Aside(props :{asideText:string, asideBullets:{id:string, data:string}[] | undefined}) {
  let bulletList
  if(props.asideBullets) {
    bulletList = props.asideBullets.map((item) => {
      return (
        <li className="plus-data-bullet" key={item.id}>
        {item.data}
      </li>
      )
    })
  }


  return (
    <>
      
      <div className="aside">
      <img className="bronc-logo" src={bronco}></img>
      <p className={bulletList ? "aside-header":"aside-text"}>{props.asideText}</p>
      <ul className="Aside-UL">
        {bulletList}
      </ul>
      </div>
    </>
  )
}

export default Aside