import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      {/* <Link to="/guides" >
        <h1>Meet the Off-Roadeo Guides</h1>
      </Link> */}
      <Link to="/offroading">
        <h1>Off-roading information</h1>
      </Link>
      <h1>Bronco Information</h1>
    </>
  )
}

export default Home