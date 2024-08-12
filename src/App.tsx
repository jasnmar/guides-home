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
import BasicRockCrawl from "./pages/Offroad/Boards/BasicRockCrawl"
import SideTilts from "./pages/Offroad/Boards/SideTilts"
import ArticulationMounds from "./pages/Offroad/Boards/ArticulationMounds"
import WaterFording from "./pages/Offroad/Boards/WaterFording"
import AdvancedRockCrawl from "./pages/Offroad/Boards/AdvancedRockCrawl"
import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Recovery from "./pages/Recovery/Recovery"
import AdvancedRockCrawlfromData from "./pages/Offroad/Boards/AdvancedRockCrawlfromData"

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
      <Route path="advancedrockcrawlfromdata" element={<AdvancedRockCrawlfromData />} />
      <Route path="offroading" element={<Offroad />}></Route>
      <Route path="groundschool" element={<GroundSchool />} />
      <Route path="orientation" element={<Orientation />} />
      <Route path="softSand" element={<SoftSand />} />
      <Route path="hillclimb" element={<HillClimb />} />
      <Route path="crossings" element={<Crossings />} />
      <Route path="/hilldescent" element={<HillDescent />} />
      <Route path="/basicrockcrawl" element={<BasicRockCrawl />} />
      <Route path="/sidetilts" element={<SideTilts />} />
      <Route path="/articulationmounds" element={<ArticulationMounds />} />
      <Route path="/waterfording" element={<WaterFording />} />
      <Route path="/advancedrockcrawl" element={<AdvancedRockCrawl />} />
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
