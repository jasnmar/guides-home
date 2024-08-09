import "./Footer.css"

function Footer() {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <>
      <p className="footer">All rights reserved. Martin Consulting {year}</p>
      <p className="footer-right">No information on this website is affiliated with Ford Motor Company or any of their partners</p>
    </>
  )
}

export default Footer