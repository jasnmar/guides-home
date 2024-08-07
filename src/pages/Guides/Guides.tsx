import "./Guides.css"

import { Link, Outlet } from "react-router-dom"
import { guideData } from "../../guideData"

function Guides() {

  const guideList = guideData.map((guide) => {
    return (
      <li key={guide.id}><Link to={guide.id.toString()}>{guide.firstName} - {guide.location}</Link></li>
    )
  })

  return (
    <>
      <h1>Your Off-Roadeo Guides</h1>
      <p>We only list guides who have volunteered to be listed. It is possible that we don't have permission to list your guide yet.</p>
      <ul>
        {guideList}
      </ul>
      <Outlet />
    </>
  )
}

export default Guides