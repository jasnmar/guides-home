import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { stuckBronco, offRoading, rockbronco } from "../../assets/images"
import NavCard from "../../components/NavCard/NavCard"
import Title from "../../components/Title/Title"

function Home() {
  
  Title("Home Page")
  return (
    <>
      <div className="home--hero-section">
        <h1 className="home--hero-message">Off-Roadeo Guides</h1>
      </div>
      <main className="page-content">
        
        <p className="home--description">We provide Off-Roadeo Guests with information that we may have covered during their experience, the ability to prepare for their day with us, but also provides people with general offroading and recovery information.</p>

        <div className="home--nav-cards">
          <NavCard title="Recovery" link="recovery/gear" altText="A bronco stuck in the sand" image={stuckBronco}>Off-road recoveries occur when the driver and vehicle are unable to continue, generally due to a loss of traction.</NavCard>
          <NavCard title="Offroading" link="offroading/offroad" altText="A bronco sport driving between some trees" image={offRoading}>Off-Roading, as we talk about it, is done mostly with **Broncos** and **Bronco Sports**.</NavCard>
          <NavCard title="Bronco Information" link="goatmodes" altText="A Red 2 door Bronco on some rocks" image={rockbronco}>Technical details related to Broncos.</NavCard>
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