import { Link, Outlet } from "react-router-dom"
import "./Recovery.css"


function Recovery() {
  return (
    <>
      <nav>
        <div className="recovery-nav">
          <Link to="gear"><div className="recovery-nav-item">Recovery Gear</div></Link><br></br>
          {/* <Link to="assesment"><div className="recovery-nav-item">Stuck Assesment</div></Link> */}
        </div>
      </nav>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  )
}

export default Recovery