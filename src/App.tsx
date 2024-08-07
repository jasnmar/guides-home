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
import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Offroad from "./pages/Offroad/Offroad"
import GroundSchool from "./pages/Offroad/Boards/GroundSchool"
import Orientation from "./pages/Offroad/Boards/Orientation"
import SoftSand from "./pages/Offroad/Boards/SoftSand"
import HillClimb from "./pages/Offroad/Boards/HillClimb"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="guides" element={<Guides />} />
      <Route
        path="guides/:id"
        loader={GuideDetailLoader}
        element={<GuideDetails />}
      />
      <Route path="offroading" element={<Offroad />}></Route>
      <Route path="groundschool" element={<GroundSchool />} />
      <Route path="orientation" element={<Orientation />} />
      <Route path="softSand" element={<SoftSand />} />
      <Route path="hillclimb" element={<HillClimb />} />
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
