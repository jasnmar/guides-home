import "./Recovery.css"
import {
  arbEssentialsKit,
  arbSoftShackle,
  arbTreadPro,
  fordRecoveryBoards,
  hdRecoveryKit,
  recoveryStrap,
  shovel,
  warnSoftShackle,
  gloves,
  mgloves,
  recoveryRope,
  bowShackle,
  treeSaver
} from "../../assets/images"

function RecoveryGear() {
  return (
    <>
      <main className="page-content">
        <h1 className="recovery">Items We Carry</h1>
        <h2 className="recovery">Recovery Kits</h2>
        <p>
          There are a couple of different recovery kits that we carry at Bronco
          Off-Roadeo. One of the recovery kits that we carry is this{" "}
          <a
            href="https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit"
            target="_blank"
          >
            {" "}
            Heavy Duty Kit from Ford
          </a>
          . We add a couple of{" "}
          <a
            href="https://www.warn.com/spydura-soft-shackle-102556"
            target="_blank"
          >
            Warn Soft Shackles
          </a>{" "}
          to the kits that we carry.
        </p>
        <div className="gear-images">
          <a
            href="https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit"
            target="_blank"
          >
            <img
              alt="Ford Heavy Duty Recovery Kit"
              className="gear-image"
              src={hdRecoveryKit}
            ></img>
          </a>
          <a
            href="https://www.warn.com/spydura-soft-shackle-102556"
            target="_blank"
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
            target="_blank"
          >
            {" "}
            ARB Essentials Recovery Kit
          </a>
          . Much like the Ford kits we add{" "}
          <a
            href="https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/"
            target="_blank"
          >
            ARB Soft Shackles
          </a>{" "}
          to the ARB Kits as well.
        </p>
        <div className="gear-images">
          <a
            href="https://store.arbusa.com/essentials-recovery-kit-rk11a/"
            target="_blank"
          >
            <img
              alt="ARB Essentials Recovery Kit"
              className="gear-image"
              src={arbEssentialsKit}
            ></img>
          </a>
          <a
            href="https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/"
            target="_blank"
          >
            <img
              alt="ARB Soft Shackle"
              className="gear-image"
              src={arbSoftShackle}
            ></img>
          </a>
          <br></br>
        </div>
        <p>
          Each of the kits that we carry have the same basic equipment. They are
          comprised of a recovery strap (aka kinetic strap, or snatch strap),
          some shackles (both soft and "hard"), some gloves, a block and tackle
          (aka a pulley) and a "tree saver".{" "}
        </p>
        <p>
          The Ford kit is specifically designed for a number of Ford Vehicles,
          including the 6th Gen Bronco (but also the Gen 1 and 2 Ford Bronco,
          the 2009-2021 F-150 and the 2010-2019 Ford Super Duty). The ARB Kit is
          designed to meet the needs of "the majority of 4WD vehciles" according
          to ARB.
        </p>

        <h2 className="recovery">Recovery Boards</h2>
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
        <h2 className="recovery">Other Gear</h2>
        <p>
          The other piece of recovery gear that goes in all of our lead vehicles
          is a shovel, similar to the one seen below...
        </p>
        <img
          className="gear-image"
          alt="Short Handle Shovel"
          src={shovel}
        ></img>
        <h1>Gear Details</h1>
        <h2>Gloves</h2>
        <div className="gear-images">
          <img 
            alt="Leather Gloves"
            className="gear-image"
            src={gloves}
          ></img>
          <img 
            alt="Mechanix Gloves"
            className="gear-image"
            src={mgloves}
          ></img>
        </div>
        <p>The recovery kits that we carry all come with gloves, which indicates it's probably a good idea to have some gloves with you if you need to do a recovery. In addition to the pair that are typically in our recovery bags most of the Off-Roadeo Guides carry a pair of gloves on their person. Our opinions on what kind of gloves to carry varies, some of us carry leather, some "mechanix" type gloves. We don't really care what kind of gloves you carry with you, but please carry some with you as part of your recovery gear. You never want to turn a recovery situation into a medical situation because you weren't wearing gloves.</p>
        <h2>Recovery Straps</h2>
        <img
          alt="ARB 30' Recovery Strap"
          className="gear-image"
          src={recoveryStrap}
        ></img>
        <p>
          Also known as a snatch strap or kinetic strap. The primary difference
          in a recovery strap and a tow strap is that recovery straps stretch.
          Most of them are capable of stretching typically about 20 percent of their
          overall length.
        </p>
        <p>
          Recovery straps are preferential to tow straps in recovery situations
          because they stretch. Their ability to stretch reduces "shock loads"
          compared to a tow strap, but also allows additional energy to be added
          to a recovery via potential energy being stored in a stretching strap.
          With a recovery strap, it is possible to add potential energy to a
          recovery by having the vehicle that is not stuck use a small amount of
          momentum to pull the stuck vehicle out of the problematic situation.
        </p>
        <p>
          Recovery straps are available in various lengths, but the most common
          lengths (in the US...) are 20' and 30'.{" "}
        </p>
        <h2>Recovery Rope</h2>
        <img
          alt="30' Recovery Rope strapped to a Bronco swing gate"
          className="gear-image"
          src={recoveryRope}
        ></img>
        <p>A Recovery Rope is an (attractive) alternative to a Recovery Strap. There are a couple advantages of a recovery rope over a recovery strap. Recovery ropes are typically capable of stretching more than a recovery strap. Often up to 30 percent of their overall length. Recovery ropes are also, generally, more durable than recovery straps. They are made with a stretchy nylon core, and an outer layer that is intended to protect the stretchy inner core. In addition recovery ropes are typically not stiched, but rather the loops on the ends are woven together, which helps with durability. </p>
        <p>On the flip side, recovery ropes generally take up a lot more space than recovery straps. </p>
        <h2>Shackles</h2>
        <p>Shackles are typically used to connect various pieces of recovery gear together, or to connect various pieces of recovery gear to recovery points on off road vehicles.</p>
        <h3>Bow Shackles</h3>
        <img
          alt="Screw Pin Bow Shackle"
          className="gear-image"
          src={bowShackle}
        ></img>
        <p>A lot of people (incorrectly) call these D-Rings. Technically D-Rings are something else, these are Screw Pin Bow Shackles (there are other types of bow shackles, but these are the most popular sort used in off-road recovery). The most popular size of bow shackle used in off roading is a shackle with a 3/4" pin (sometimes called a 19mm pin). Bow shackles are technically a piece of rigging equipment but they are commonly used in off roading. </p>
        <h3>Soft Shackles</h3>
        <img
          alt="Soft Shackle"
          className="gear-image"
          src={warnSoftShackle}
        ></img>
        <p>Soft shackles are another great option for connecting to recovery points on your vehicle. Soft shackles are made from a high molecular weight polyethelyene material. They are light weigh and are easy to store with your other off road gear. Like recovery ropes and straps, they come in various lengths. Many of them also come with a protective sleave that is intended to reduce damage to the shackle material when it is being used.</p>
        <h2>Tree Saver</h2>
        <img
          alt="Tree Saver Strap"
          className="gear-image"
          src={treeSaver}
        ></img>
        <p>Technically Tree savers are typically just tow straps. They are generally fairly short, fairly wide tow straps, but they are typically just tow straps (although some other forms of tree savers also exist). Never wrap a winch line around a tree. It damages the winch line as well as the tree. Use a tow strap instead to spread the load out over the bark area of the tree. Secure the tree saver as low on the tree as practicle for the recovery to reduce the amount of leverage that you are placing on the tree.  </p>
      </main>
    </>
  )
}

export default RecoveryGear
