import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="nav--main">
      <div className="nav--container">
        <a className="nav--brand" href="/">Off-Roadeo Guides</a>
        
        <button 
          className={`nav--toggler ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="nav--toggler-icon"></span>
          <span className="nav--toggler-icon"></span>
          <span className="nav--toggler-icon"></span>
        </button>

        <div className={`nav--menu ${isOpen ? 'show' : ''}`}>
          <ul className="nav--list">
            <li className="nav--item">
              <a className="nav--link" href="/offroading/offroad">Offroading</a>
            </li>
            <li className="nav--item">
              <a className="nav--link" href="/recovery/gear">Recovery</a>
            </li>
            <li className="nav--item">
              <a className="nav--link" href="/goatmodes">GOAT Modes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar