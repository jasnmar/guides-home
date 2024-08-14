import { Link, Outlet } from "react-router-dom"
import "./Recovery.css"


function Recovery() {
  return (
    <>
      <nav>
        <div className="recovery-nav">
          <Link to="gear"><div className="recovery-nav-item">Recovery Gear</div></Link><br></br>
        </div>
      </nav>
      <main className="page-content">
        <p>There's a lot of information that can be covered as part of recovery. During a typical guest day we do a recovery talk that usually takes 20-30 minutes. There's going to eventually be more information here, but we'll have to build it out over time.</p>
      </main>
      <Outlet />
    </>
  )
}

export default Recovery