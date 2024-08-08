import "./Aside.css"

function Aside(props :{asideText:string, asideBullets:{id:number, data:string}[] | undefined}) {
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
      <p className={bulletList ? "aside-header":"aside-text"}>{props.asideText}</p>
      <ul className="Aside-UL">
        {bulletList}
      </ul>
      </div>
    </>
  )
}

export default Aside