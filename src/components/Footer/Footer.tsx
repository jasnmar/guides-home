import "./Footer.css"

function Footer() {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <>
      <p className="footer">All rights reserved. Martin Consulting {year}</p>
    </>
  )
}

export default Footer