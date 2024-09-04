import "./GoatModes.css"
import { GoatModeData, goatModesByModel } from "./GoatModeData"
import { v4 as uuidV4 } from 'uuid'
import { goatModesForEachModel } from "./GoatModeInterfaces"
import { 
  bajaMode,
  normalMode,
  ecoMode,
  mudRutsMode, 
  rockCrawlMode,
  sandMode,
  slipperyMode,
  sportMode} from "../../../assets/images"
//import { goatModes } from "./GoatModeInterfaces"

function GoatModes() {

  const gmLines = GoatModeData.map((mode) => {
    const newRow = (
    <tr key={uuidV4()}>
      <th>{mode.mode}<>{mode.sub && <sub>{mode.sub}</sub>}</></th>
      <td><>{mode.icon && <img className="goatmodes--icon" src={mode.icon}></img>}</></td>
      <td>{mode.transferCase}</td>
      <td>{fixList(mode.tcOptions)}</td>
      <td>{mode.tractionControl}</td>
      <td>{mode.frontDiffLocker}</td>
      <td>{fixList(mode.fdLockerOptions)}</td>
      <td>{mode.rearDiffLocker}</td>
      <td>{fixList(mode.rdLockerOptions)}</td>
      <td>{mode.throttle}</td>
      <td>{mode.steering}</td>
      <td>{mode.stayBarDisconnect}</td>
      <td>{fixList(mode.sbDisconnectOptions)}</td>
    </tr>)
    return newRow
  })

  function fixList(list: Array<string>) {
    let sList = ""
    for(let i=0;i<list.length;i++) {
      if(i+1<list.length) {
        sList += list[i]+", "
      } else {
        sList += list[i]
      }
    }
    return sList
  }

  function getModeData(model:goatModesForEachModel, mode:string) {
    let tableData = <td key={uuidV4()}><div className="goatmodes--red"><b>X</b></div></td>
    if(model.modes.find((item) => {
      if(item.modename === mode) {
        if(item.enabled === true) {
          return true
        }
      }
    })) {
      tableData = <td key={uuidV4()}><div className="goatmodes--green">{'\u2714'}</div></td>
    }
    return tableData
  }
  const modelLines = goatModesByModel.map((model) => {
    const row = [<th key={uuidV4()}>{model.model}</th>]
    //Normal
    const ntd = getModeData(model, "normal")
    row.push(ntd)
    //Eco
    const etd = getModeData(model, "eco")
    row.push(etd)
    //Sport
    const std = getModeData(model, "sport")
    row.push(std)
    //Slippery
    const sltd = getModeData(model, "slippery")
    row.push(sltd)
    //Sand
    const satd = getModeData(model, "sand")
    row.push(satd)
    //mudRuts
    const mtd = getModeData(model, "mudRuts")
    row.push(mtd)
    //rockCrawl
    const rtd = getModeData(model, "rockCrawl")
    row.push(rtd)
    //baja
    const btd = getModeData(model, "baja")
    row.push(btd)
    const actualRow = <tr key={uuidV4()}>{row}</tr>
    return actualRow
  })

  return (
    <>
    <main className="page-content">
      <h1>G.O.A.T. Modes</h1>
      <h2>What do G.O.A.T. Modes Do?</h2>
      <p>There are a total of 8 G.O.A.T. Modes available across the different trim levels (technically there are a couple more if we include the Raptor), but the most in any vehicle directly from Ford is 7.</p>
      <p>G.O.A.T. Modes are primarily combinations of Transfer Case and Hero Bar settings. They can also adjust throttle sensitivity, steering feel, as well as transmission shift points.</p>
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan={2}>Mode</th>
            <th>Transfer Case Setting</th>
            <th>Available Transfer Case Settings</th>
            <th>Traction Control Setting</th>
            <th>Front Locking Differential</th>
            <th>Front Locking Options<sub>1</sub></th>
            <th>Rear Locking Differential</th>
            <th>Rear Locking Options<sub>2</sub></th>
            <th>Throttle</th>
            <th>Steering</th>
            <th>Stay-Bar Disconnect</th>
            <th>Stay-Bar Options<sub>3</sub></th>
          </tr>
        </thead>
        <tbody>
          {gmLines}
        </tbody>
      </table>
      </div>
      <ol>
        <li>Only available in 4L. Only available when going under 20mph. Will automatically disconnect at speeds over 25mph </li>
        <li>In Normal, Eco, Sport, or Slippery mode, Only available when going under 20mph in 4H. In Sand, Mud and Ruts, Baja, or Rock Crawl modes, can be engaged at any speed.</li>
        <li>The Stabilizer Bar Disconnect can only be operated in 4H and 4L (i.e. not in 2H or 4A).</li>
        <li>Vehicles not equipped with the Advanced Transfer Case will be in 2H in Sport mode, rather than 4A.</li>
        <li>Vehicles not equipped with the Advanced Transfer Case will be in 4H in Slippery mode, rather than 4A.</li>
      </ol>
      <h2>What models have what Goat Modes?</h2>
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Model</th>
            <th>Normal <img className="goatmodes--icon" src={normalMode}></img></th>
            <th>Eco <img className="goatmodes--icon" src={ecoMode}></img></th>
            <th>Sport <img className="goatmodes--icon" src={sportMode}></img></th>
            <th>Slippery <img className="goatmodes--icon" src={slipperyMode}></img></th>
            <th>Sand <img className="goatmodes--icon" src={sandMode}></img></th>
            <th>Mud and Ruts <img className="goatmodes--icon" src={mudRutsMode}></img></th>
            <th>Rock Crawl <img className="goatmodes--icon" src={rockCrawlMode}></img></th>
            <th>Baja <img className="goatmodes--icon" src={bajaMode}></img></th>
          </tr>
        </thead>
        <tbody>
          {modelLines}
        </tbody>
      </table>
      </div>
      </main>
    </>
  )
}


export default GoatModes
