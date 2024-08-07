import "./Aside.css"

function Aside(props :{asideText:string}) {
  return (
    <>
      <p className="aside-text">{props.asideText}</p>
    </>
  )
}

export default Aside