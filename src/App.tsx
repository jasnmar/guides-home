import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"

import { lazy } from "react"
import Error from "./pages/Error/Error"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import { RenderBoard } from "./pages/Offroad/renderBoard"
import { boardData } from "./pages/Offroad/boardData"
import { v4 as uuidV4 } from 'uuid'

// Lazy load non-critical routes
const Guides = lazy(() => import("./pages/Guides/Guides"))
const Offroad = lazy(() => import("./pages/Offroad/Offroad"))
const GuideDetails = lazy(() => import("./pages/Guides/GuideDetails/GuideDetails"))
const Recovery = lazy(() => import("./pages/Recovery/Recovery"))
const RecoveryGear = lazy(() => import("./pages/Recovery/RecoveryGear"))
const StuckAssesment = lazy(() => import("./pages/Recovery/StuckAssesment"))
const GoatModes = lazy(() => import("./pages/Bronco/GoatModes/GoatModes"))
const Traction = lazy(() => import("./pages/Traction/Traction"))

function orxBoardPages() {
  const boardPages = boardData.map((board) => {
    return <Route key={uuidV4()} path={board.address} element={<RenderBoard board={board.boardName}/>} />
  })
  return boardPages
}
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
        {orxBoardPages()}
      </Route>
      <Route path="recovery" element={<Recovery />}>
        <Route path="gear" element={<RecoveryGear />} />
        <Route path="assesment" element={<StuckAssesment />} />
      </Route>
      <Route path="goatModes" element={<GoatModes />} />
      <Route path="traction" element={<Traction />} />
      
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
