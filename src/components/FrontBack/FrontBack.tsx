import "./FrontBack.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

function FrontBack(props: { nextPage: string; previousPage: string }) {
  return (
    <>
      <Link to={"/offroading/"+props.previousPage}>
        <div className="fb-arrow-container-prev">
          <div className="frontback-prev-arrow">
            <div>
              <FaChevronLeft size={40} />
            </div>
          </div>
        </div>
      </Link>
      <Link to={"/offroading/"+props.nextPage}>
        <div className="fb-arrow-container-next">
          <div className="frontback-next-arrow">
            <div>
              <FaChevronRight size={40} />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default FrontBack
