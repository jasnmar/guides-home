import "./InfoComponentTitle.css"

function InfoComponentTitle(props : {title:string, sub:string}) {
  return (
    <>
      <div className="infoTitleBackgound">
        <p className="infoTitleText">{props.title}</p>
        <p className="subTitleText">{props.sub}</p>

      </div>
    </>
  )
}

export default InfoComponentTitle