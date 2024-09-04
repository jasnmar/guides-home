import "./GoatModes.css"
import { GoatModeData, goatModesByModel } from "./GoatModeData"
import { v4 as uuidV4 } from 'uuid'
import { goatModesForEachModel } from "./GoatModeInterfaces"
//import { goatModes } from "./GoatModeInterfaces"

function GoatModes() {

  const gmLines = GoatModeData.map((mode) => {
    const newRow = (
    <tr key={uuidV4()}>
      <td>{mode.mode}</td>
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
    let tableData = <td key={uuidV4()}>X</td>
    if(model.modes.find((item) => {
      if(item.modename === mode) {
        if(item.enabled === true) {
          return true
        }
      }
    })) {
      tableData = <td key={uuidV4()}>{'\u2714'}</td>
    }
    return tableData
  }
  const modelLines = goatModesByModel.map((model) => {
    const row = [<td key={uuidV4()}>{model.model}</td>]
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
      <h1>Goat Modes</h1>
      <h2>What do Goat Modes Do?</h2>
      <p>There are a total of 8 goat modes available across the different trim levels (technically there are a couple more if we include the Raptor), but the most in any vehicle directly from Ford is 7. </p>
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mode</th>
            <th>Transfer Case Setting</th>
            <th>Available Transfer Case Settings</th>
            <th>Traction Control Setting</th>
            <th>Front Locking Differential</th>
            <th>Front Locking Options</th>
            <th>Rear Locking Differential</th>
            <th>Rear Locking Options</th>
            <th>Throttle</th>
            <th>Steering</th>
            <th>Stay-Bar Disconnect</th>
            <th>Stay-Bar Options</th>
          </tr>
        </thead>
        <tbody>
          {gmLines}
        </tbody>
      </table>
      </div>
      <h2>What models have what Goat Modes?</h2>
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Model</th>
            <th>Normal</th>
            <th>Eco</th>
            <th>Sport</th>
            <th>Slippery</th>
            <th>Sand</th>
            <th>Mud and Ruts</th>
            <th>Rock Crawl</th>
            <th>Baja</th>
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
