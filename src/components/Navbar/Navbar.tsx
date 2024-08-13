import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'

function Navbar() {
  function navButtonClick() {
    const navContent = document.getElementById("navbarSupportedContent")
    if(navContent) {
      if(navContent.style.display === "block") {
        navContent.style.display = "none"
      } else {
        navContent.style.display = "block"
      }
    }
    return true
  }
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" onClick={navButtonClick} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/guides">Guides</a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" href="/offroading">Offroading</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/recovery/gear">Recovery</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar