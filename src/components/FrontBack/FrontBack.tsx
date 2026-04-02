import "./FrontBack.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

function FrontBack(props: { nextPage: string; previousPage: string }) {
  return (
    <>
      {props.previousPage && (
        <Link to={"/offroading/" + props.previousPage} className="fb-nav-link fb-nav-prev" aria-label="Previous Page">
          <div className="fb-arrow-wrapper">
            <FaChevronLeft size={40} />
          </div>
        </Link>
      )}
      {props.nextPage && (
        <Link to={"/offroading/" + props.nextPage} className="fb-nav-link fb-nav-next" aria-label="Next Page">
          <div className="fb-arrow-wrapper">
            <FaChevronRight size={40} />
          </div>
        </Link>
      )}
    </>
  )
}

export default FrontBack
