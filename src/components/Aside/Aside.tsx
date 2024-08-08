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
      <div className="aside-text">
      <p className={bulletList ? "aside-header":""}>{props.asideText}</p>
      <ul>
        {bulletList}
      </ul>
      </div>
    </>
  )
}

export default Aside