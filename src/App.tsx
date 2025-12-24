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
import GuideDetails from "./pages/Guides/GuideDetails/GuideDetails"
import GuideDetailLoader from "./pages/Guides/GuideDetails/GuideDetailLoader"
import Recovery from "./pages/Recovery/Recovery"
import RecoveryGear from "./pages/Recovery/RecoveryGear"
import StuckAssesment from "./pages/Recovery/StuckAssesment"
import GoatModes from "./pages/Bronco/GoatModes/GoatModes"
import Traction from "./pages/Traction/Traction"
import { RenderBoard } from "./pages/Offroad/renderBoard"
import { boardData } from "./pages/Offroad/boardData"
import { v4 as uuidV4 } from 'uuid'

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
