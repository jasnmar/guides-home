import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"

import Error from "./pages/Error/Error"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Guides from "./pages/Guides/Guides"
// import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
// import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Offroad from "./pages/Offroad/Offroad"
import GroundSchool from "./pages/Offroad/Boards/GroundSchool"
import Orientation from "./pages/Offroad/Boards/Orientation"
import SoftSand from "./pages/Offroad/Boards/SoftSand"
import HillClimb from "./pages/Offroad/Boards/HillClimb"
import Crossings from "./pages/Offroad/Boards/Crossings"
import HillDescent from "./pages/Offroad/Boards/HillDescent"
import SideTilts from "./pages/Offroad/Boards/SideTilts"
import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Recovery from "./pages/Recovery/Recovery"
import AdvancedRockCrawlfromData from "./pages/Offroad/Boards/AdvancedRockCrawlfromData"
import WaterFordingfromData from "./pages/Offroad/Boards/WaterFordingfromData"
import ArticulationMoundsfromData from "./pages/Offroad/Boards/ArticulationMoundsfromData"
import BasicRockCrawlfromData from "./pages/Offroad/Boards/BasicRockCrawlfromData"

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
      <Route path="advancedrockcrawl" element={<AdvancedRockCrawlfromData />} />
      <Route path="waterfording" element={<WaterFordingfromData />} />
      <Route path="offroading" element={<Offroad />}></Route>
      <Route path="groundschool" element={<GroundSchool />} />
      <Route path="orientation" element={<Orientation />} />
      <Route path="softSand" element={<SoftSand />} />
      <Route path="hillclimb" element={<HillClimb />} />
      <Route path="crossings" element={<Crossings />} />
      <Route path="/hilldescent" element={<HillDescent />} />
      <Route path="basicrockcrawl" element={<BasicRockCrawlfromData />} />
      <Route path="/sidetilts" element={<SideTilts />} />
      <Route path="articulationmounds" element={<ArticulationMoundsfromData />} />
      <Route path="/recovery" element={<Recovery />} />
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
