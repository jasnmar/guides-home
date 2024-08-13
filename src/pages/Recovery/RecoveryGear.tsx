import "./Recovery.css"
import {
  arbEssentialsKit,
  arbSoftShackle,
  arbTreadPro,
  fordRecoveryBoards,
  hdRecoveryKit,
  shovel,
  warnSoftShackle
} from "../../assets/images"

function RecoveryGear() {
  return (
    <>
      <main>
        <h1 className="recovery">Recovery Kits</h1>
        <p>
          There are a couple of different recovery kits that we carry at
          Bronco-OffRoadeo. One of the recovery kits that we carry is this{" "}
          <a
            href="https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit"
            target="blank"
          >
            {" "}
            Heavy Duty Kit from Ford
          </a>
          . We add a couple of{" "}
          <a
            href="https://www.warn.com/spydura-soft-shackle-102556"
            target="blank"
          >
            Warn Soft Shackles
          </a>{" "}
          to the kits that we carry.
        </p>
        <div className="gear-images">
          <a
            href="https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit"
            target="blank"
          >
            <img
              alt="Ford Heavy Duty Recovery Kit"
              className="gear-image"
              src={hdRecoveryKit}
            ></img>
          </a>
          <a
            href="https://www.warn.com/spydura-soft-shackle-102556"
            target="blank"
          >
            <img
              alt="Warn Spydura Soft Shackle"
              className="gear-image"
              src={warnSoftShackle}
            ></img>
          </a>
        </div>
        <p>
          The other recovery kit that we carry is the{" "}
          <a
            href="https://store.arbusa.com/essentials-recovery-kit-rk11a/"
            target="blank"
          >
            {" "}
            ARB Essentials Recovery Kit
          </a>
          . Much like the Ford kits we add{" "}
          <a href="https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/">
            ARB Soft Shackles
          </a>{" "}
          to the ARB Kits as well.
        </p>
        <div className="gear-images">
          <a
            href="https://store.arbusa.com/essentials-recovery-kit-rk11a/"
            target="blank"
          >
            <img
              alt="ARB Essentials Recovery Kit"
              className="gear-image"
              src={arbEssentialsKit}
            ></img>
          </a>
          <a
            href="https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/"
            target="blank"
          >
            <img
              alt="ARB Soft Shackle"
              className="gear-image"
              src={arbSoftShackle}
            ></img>
          </a>
        </div>
        <h1 className="recovery">Recovery Boards</h1>
        <p>
          There are also a couple different recovery boards that we carry. Most
          of the boards we carry are the{" "}
          <a
            href="https://store.arbusa.com/tred-pro-monument-grey-orange-recovery-boards-tredpromgo/"
            target="blank"
          >
            ARB Tread Pro Recovery boards.
          </a>
        </p>
        <div className="gear-images">
          <a
            href="https://store.arbusa.com/tred-pro-monument-grey-orange-recovery-boards-tredpromgo/"
            target="blank"
          >
            <img
              className="gear-image"
              alt="ActionTrax Recovery Boards"
              src={arbTreadPro}
            ></img>
          </a>
        </div>
        <p>
          We also carry&nbsp;
          <a
            href="https://accessories.ford.com/off-road-recovery-board-pair"
            target="blank"
          >
             Action Trax Recovery boards
          </a>
        </p>
        <a
          href="https://accessories.ford.com/off-road-recovery-board-pair"
          target="blank"
        >
          <img
            className="gear-image"
            alt="ActionTrax Recovery Boards"
            src={fordRecoveryBoards}
          ></img>
        </a>
        <h1 className="recovery">Other Gear</h1>
        <p>The other piece of recovery gear that goes in all of our lead vehicles is a shovel, similar to the one seen below...</p>
        <img
          className="gear-image"
          alt="Short Handle Shovel"
          src={shovel}>
        </img>
      </main>
    </>
  )
}

export default RecoveryGear
