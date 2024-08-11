import "./Footer.css"

function Footer() {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <>
    <div className="footer">
      <p className="footer-text">All rights reserved. Martin Consulting {year}</p>
      <p className="footer-text">No information on this website is endoresed by Ford Motor Company or any of their affiliates.</p>
    </div>
    </>
  )
}

export default Footer