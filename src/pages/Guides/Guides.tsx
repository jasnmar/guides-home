import "./Guides.css"

import { Link, Outlet } from "react-router-dom"
import { guideData } from "./guideData"

function Guides() {
  const guideList = guideData.map((guide) => {
    if(guide.id!=0){
      return (
        <li key={guide.id}>
        <Link to={guide.firstName}>
          {guide.firstName} - {guide.location}
        </Link>
      </li>
    )
    }
  })

  return (
    <main className="page-content">
      <h1>Your Off-Roadeo Guides</h1>
      <p>
        We only list guides who have volunteered to be listed. It is possible
        that we don't have permission to list your guide yet.
      </p>
      <ul>{guideList}</ul>
      <Outlet />
    </main>
  )
}

export default Guides
