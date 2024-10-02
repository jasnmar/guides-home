import { Outlet } from "react-router-dom"
import "./Layout.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Layout() {
  return (
    <>
      <div className="contianer">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
