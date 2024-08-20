import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { stuckBronco, offRoading } from "../../assets/images"

function Home() {
  return (
    <>
      <div className="home--hero-section">
        <div className="home--hero-message">Wecome to Off-Roadeo Guides</div>
      </div>
      <main className="page-content">
        
        <p className="home--description">This site provides our Off-Roadeo Guests with information that we may have covered during their experience, the ability to prepare for their day with us, but also provides people with general offroading and recovery information.</p>
        
        <div className="home--nav-cards">
          <div className="home--card">
            <Link className="home--card-link" to="recovery/gear">
              <div className="home-card-inner">
                <img className="home--card-image" src={stuckBronco}></img>
                <p className="home--card-text">Off-road recoveries occur when the driver and vehicle are unable to continue, generally due to a loss of traction.</p>
              </div>
            </Link>
          </div>
          <div className="home--card">
            <Link className="home--card-link" to="recovery/gear">
              <div className="home-card-inner">
                <img className="home--card-image" src={offRoading}></img>
                <p className="home--card-text">Off-Roading, as we talk about it, is done mostly with Broncos and Bronco Sports. </p>
              </div>
            </Link>
          </div>

        </div>
        <p>This site is maintained by some of the guides at Bronco Off-Roadeo. It is not associated with or endorsed by <a href="http://www.ford.com" target="_blank">Ford</a> or <a href="http://www.broncooffroadeo.com" target="_blank">Bronco Off-Roadeo</a>.</p>


      {/* <Link to="/guides" >
        <h1>Meet the Off-Roadeo Guides</h1>
        </Link> */}
      {/* <h1>Bronco Information</h1> */}
        </main>
    </>
  )
}

export default Home