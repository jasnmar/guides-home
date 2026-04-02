import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import "./Layout.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Layout() {
  return (
    <>
      <div className="contain">
        <Navbar />
        <Suspense fallback={<div className="loading--fallback">Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

export default Layout
