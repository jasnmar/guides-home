import "./FrontBack.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function FrontBack(props:{nextPage:string, previousPage:string}) {
  return (
    <>
      <div className="frontback-prev-arrow">
        <Link to={props.nextPage}>
          <div>
            <FaChevronLeft size={60}/>  
          </div>
        </Link>
      </div>
      <div className="frontback-next-arrow">
        <Link to={props.previousPage}>
          <div>
            <FaChevronRight size={60}/>
          </div>
        </Link>
      </div>
    </>
  )
}

export default FrontBack