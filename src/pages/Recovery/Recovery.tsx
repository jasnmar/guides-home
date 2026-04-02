import { Outlet } from "react-router-dom"
import "./Recovery.css"


function Recovery() {
  return (
    <>
      <nav>
        <div className="recovery-nav">
        </div>
      </nav>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  )
}

export default Recovery