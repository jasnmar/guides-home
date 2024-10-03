import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"

import Error from "./pages/Error/Error"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Guides from "./pages/Guides/Guides"
// import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
// import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Offroad from "./pages/Offroad/Offroad"
import GroundSchoolfromData from "./pages/Offroad/Boards/GroundSchoolfromData"
import CrossingfromData from "./pages/Offroad/Boards/CrossingsfromData"
import HillDescentfromData from "./pages/Offroad/Boards/HillDescentfromData"
import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Recovery from "./pages/Recovery/Recovery"
import AdvancedRockCrawlfromData from "./pages/Offroad/Boards/AdvancedRockCrawlfromData"
import WaterFordingfromData from "./pages/Offroad/Boards/WaterFordingfromData"
import ArticulationMoundsfromData from "./pages/Offroad/Boards/ArticulationMoundsfromData"
import BasicRockCrawlfromData from "./pages/Offroad/Boards/BasicRockCrawlfromData"
import HillClimbfromData from "./pages/Offroad/Boards/HillClimbfromData"
import OrientationfromData from "./pages/Offroad/Boards/OrientationfromData"
import SideTiltsfromData from "./pages/Offroad/Boards/SideTiltsfromData"
import SoftSandfromData from "./pages/Offroad/Boards/SoftSandfromData"
import RecoveryGear from "./pages/Recovery/RecoveryGear"
import StuckAssesment from "./pages/Recovery/StuckAssesment"
import GoatModes from "./pages/Bronco/GoatModes/GoatModes"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="guides" element={<Guides />} />
      <Route
        path="guides/:id"
        loader={(params) => GuideDetailLoader(params)}
        element={<GuideDetails />}
      />
      <Route path="offroading" element={<Outlet />}>
        <Route path="offroad" element={<Offroad />} />
        <Route path="advancedrockcrawl" element={<AdvancedRockCrawlfromData />} />
        <Route path="waterfording" element={<WaterFordingfromData />} />
        
        <Route path="groundschool" element={<GroundSchoolfromData />} />
        <Route path="orientation" element={<OrientationfromData />} />
        <Route path="softSand" element={<SoftSandfromData />} />
        <Route path="hillclimb" element={<HillClimbfromData />} />
        <Route path="crossings" element={<CrossingfromData />} />
        <Route path="hilldescent" element={<HillDescentfromData />} />
        <Route path="basicrockcrawl" element={<BasicRockCrawlfromData />} />
        <Route path="sidetilts" element={<SideTiltsfromData />} />
        <Route path="articulationmounds" element={<ArticulationMoundsfromData />} />
      </Route>
      <Route path="recovery" element={<Recovery />}>
        <Route path="gear" element={<RecoveryGear />} />
        <Route path="assesment" element={<StuckAssesment />} />
      </Route>
      <Route path="goatModes" element={<GoatModes />} />
      
    </Route>
  )
)



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
