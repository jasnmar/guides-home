import "./BoardLink.css"
import { Link } from "react-router-dom"

function BoardLink(props: { title: string; image?: string; address?: string }) {
  return (
    <>
      <Link className="boardLink--link" to={"/offroading/" + props.address}>
      <div className="boardLink--item">
        <img className="boardLink--image" src={props.image}></img>
        <p className="boardLink--label">{props.title}</p>
      </div>
      </Link>
    </>
  )
}

export default BoardLink
