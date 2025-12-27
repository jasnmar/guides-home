import "./Traction.css"
import { useState, useEffect } from "react"

export default function Traction() {
  const [lineStyle, setLineStyle] = useState({})
  const [calcTipStyle, setCalcTipStyle] = useState({})
  const [mBox, setmBox] = useState([
    [0, 0],
    [0, 0],
  ])
  const [weight, setWeight] = useState(1000)
  const [frictionCoefficient, setFrictionCoefficient] = useState(0.5)
  const [maxForce, setMaxForce] = useState(100)
  const [force, setForce] = useState("0")
  const [fVectors, setFVectors] = useState(["0", "0"])

  useEffect(() => {
    setMaxForce(frictionCoefficient * weight)
  }, [frictionCoefficient, weight])
  useEffect(() => {
    const forceCalc = Math.sqrt(
      Number(fVectors[0]) * Number(fVectors[0]) +
        Number(fVectors[1]) * Number(fVectors[1])
    ).toFixed(0)
    setForce(forceCalc)
  }, [fVectors])

  function mouseTracker(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget as HTMLDivElement
    const rect = target.getBoundingClientRect()

    let mouseX = e.clientX - rect.left
    let mouseY = e.clientY - rect.top

    const centerX = target.offsetWidth / 2
    const centerY = target.offsetHeight / 2
    const radius = centerX // Assuming circle, so radius is half the width

    let dx = mouseX - centerX
    let dy = mouseY - centerY

    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > radius) {
      const angle = Math.atan2(dy, dx)
      mouseX = centerX + radius * Math.cos(angle)
      mouseY = centerY + radius * Math.sin(angle)
      dx = mouseX - centerX // Recalculate dx
      dy = mouseY - centerY // Recalculate dy
    }

    const length = Math.sqrt(dx * dx + dy * dy)
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI

    const left = Math.min(mouseX, centerX)
    const top = Math.min(mouseY, centerY)
    const width = Math.abs(mouseX - centerX)
    const height = Math.abs(mouseY - centerY)

    const hForce = Math.abs(dx) / centerX
    const vForce = Math.abs(dy) / centerY
    setFVectors([
      (hForce * maxForce).toFixed(0),
      (vForce * maxForce).toFixed(0),
    ])

    setmBox([
      [left, top],
      [width, height],
    ])

    setLineStyle({
      width: `${length}px`,
      transform: `rotate(${angle}deg)`,
      top: `${centerY}px`,
      left: `${centerX}px`,
    })
    setCalcTipStyle({
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    })
  }
  return (
    <main className="page-content">
      <h1>Traction</h1>
      <div className="main-content">
        <div className="figure">
          <p className="title top-title">Acceleration</p>
          <p className="title bottom-title">Braking</p>
          <p className="title right-title">Right</p>
          <p className="title left-title">Left</p>
          <div className="circle" onMouseMove={mouseTracker}>
            <div
              className="mouseBox"
              style={{
                left: `${mBox[0][0]}px`,
                top: `${mBox[0][1]}px`,
                width: `${mBox[1][0]}px`,
                height: `${mBox[1][1]}px`,
              }}
            ></div>
            <div className="line" style={lineStyle}></div>
            <div className="calctip" style={calcTipStyle}>
              <ul>
                <li>horizontal:{fVectors[0]}</li>
                <li>linear:{fVectors[1]}</li>
                <li>total:{force}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            The amount of traction available (F<sub>f</sub>) is a product of the
            coefficient of friction between the surface and your tire (μ) and
            the weight of vehicle (N).
          </p>
          <p className="equation">
            F<sub>f</sub> = μN
          </p>
          <form>
            <div>
              <label htmlFor="friction">
                Friction Coefficient (μ):
                <input
                  id="friction"
                  type="number"
                  onChange={(e) =>
                    setFrictionCoefficient(Number(e.target.value))
                  }
                  defaultValue={0.5}
                  min={0.0}
                  step={0.1}
                  max={0.99}
                ></input>
              </label>
              <ul>
                Typical μ Values:
                <li>Dry Asphalt/Concrete: 0.7 - 0.9</li>
                <li>Wet Asphalt/Concrete: 0.4 - 0.7</li>
                <li>Gravel/Earth: 0.5 - 0.6</li>
                <li>Snow (Hard-Packed): 0.15 - 0.3</li>
                <li>Ice: 0.2 - 0.07</li>
              </ul>
            </div>
            <div>
              <label htmlFor="weight">
                Vehicle Weight (N):
                <input
                  id="weight"
                  type="number"
                  onChange={(e) => setWeight(Number(e.target.value))}
                  defaultValue={1000}
                ></input>
              </label>
            </div>
          </form>
          <p>Maximum Force = {maxForce}</p>
          <p>Horizontal Force: {Number(fVectors[0])}</p>
          <p>Linear Force: {Number(fVectors[1])}</p>
          <p>Total Force: {force}</p>
        </div>
      </div>
    </main>
  )
}
