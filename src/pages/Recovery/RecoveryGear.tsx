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
import RecoveryCard from "../../components/RecoveryCards/RecovveryCard"
import Title from "../../components/Title/Title"

function RecoveryGear() {
  Title("Recovery Gear")
  //const d1 = [{altText:"Ford Heavy Duty Recovery Kit", image:hdRecoveryKit}]
  return (
    <>
        <h1 className="recovery">Items We Carry</h1>
        <h2 className="recovery">Recovery Kits</h2>
        <div className="recovery--cards">
        <RecoveryCard imageInfo={[{altText:"Ford Heavy Duty Recovery Kit", image:hdRecoveryKit, link:"https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit"},{altText:"Warn Spydura Soft Shackle", image:warnSoftShackle, link:"https://www.warn.com/spydura-soft-shackle-102556"}]} >
        There are a couple of different recovery kits that we carry at Bronco Off-Roadeo. One of the recovery kits that we carry is this [Heavy Duty Kit from Ford](https://accessories.ford.com/ford-performance-by-warn-off-road-heavy-duty-recovery-kit). We add a couple of [Warn Soft Shackles](https://www.warn.com/spydura-soft-shackle-102556) to the kits that we carry.
        </RecoveryCard>
        <RecoveryCard imageInfo={[{altText:"ARB Essentials Recovery Kit", image:arbEssentialsKit, link:"https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/"}, {altText:"ARB Soft Shackle", image:arbSoftShackle, link:"https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/"}]}>The other recovery kit that we carry is the [ARB Essentials Recovery Kit](https://store.arbusa.com/essentials-recovery-kit-rk11a/). Much like the Ford kits we add [ARB Soft Shackles](https://store.arbusa.com/soft-connect-shackle-14-5t-arb2018/) to the ARB Kits as well.</RecoveryCard>
        <RecoveryCard>Each of the kits that we carry have the same basic equipment. They are
          comprised of a recovery strap (aka kinetic strap, or snatch strap),
          some shackles (both soft and "hard"), some gloves, a block and tackle
          (aka a pulley) and a "tree saver".</RecoveryCard>
          <RecoveryCard>The Ford kit is specifically designed for a number of Ford Vehicles, including the 6th Gen Bronco (but also the Gen 1 and 2 Ford Bronco, the 2009-2021 F-150 and the 2010-2019 Ford Super Duty). The ARB Kit is designed to meet the needs of "the majority of 4WD vehciles" according to ARB.</RecoveryCard>
        </div>
        <h2 className="recovery">Recovery Boards</h2>
        <div className="recovery--cards">
        <RecoveryCard imageInfo={[{altText:"ARB Tread Pro Recovery Boards", image:arbTreadPro, link:"https://store.arbusa.com/tred-pro-monument-grey-orange-recovery-boards-tredpromgo/"}]}>There are also a couple different recovery boards that we carry. Most
        of the boards we carry are the [ARB Tread Pro Recovery boards](https://store.arbusa.com/tred-pro-monument-grey-orange-recovery-boards-tredpromgo/)</RecoveryCard>
        <RecoveryCard imageInfo={[{altText:"ActionTrax Recovery Boards", image:fordRecoveryBoards ,link:"https://accessories.ford.com/off-road-recovery-board-pair"}]}>We also carry [Action Trax Recovery boards](https://accessories.ford.com/off-road-recovery-board-pair) </RecoveryCard>
        </div>
        <h2 className="recovery">Other Gear</h2>
        <RecoveryCard imageInfo={[{altText:"Short Handle Shovel", image:shovel}]}>The other piece of recovery gear that goes in all of our lead vehicles is a shovel, similar to the one seen below...</RecoveryCard>
        <h1>Gear Details</h1>
        <div className="recovery--cards">
          <RecoveryCard title="Gloves" imageInfo={[{altText:"Leather Gloves", image:gloves},{altText:"Mechanics Gloves", image:mgloves}]}>The recovery kits that we carry all come with gloves, which indicates it's probably a good idea to have some gloves with you if you need to do a recovery. In addition to the pair that are typically in our recovery bags most of the Off-Roadeo Guides carry a pair of gloves on their person. Our opinions on what kind of gloves to carry varies, some of us carry leather, some "mechanix" type gloves. We don't really care what kind of gloves you carry with you, but please carry some with you as part of your recovery gear. You never want to turn a recovery situation into a medical situation because you weren't wearing gloves.</RecoveryCard>

          <RecoveryCard title="Recovery Straps" imageInfo={[{altText:"ARB 30' Recovery Strap", image:recoveryStrap}]}>Also known as a snatch strap or kinetic strap. The primary difference in a recovery strap and a tow strap is that recovery straps stretch. Most of them are capable of stretching typically about 20 percent of their overall length. 
          
          Recovery straps are preferential to tow straps in recovery situations because they stretch. Their ability to stretch reduces "shock loads" compared to a tow strap, but also allows additional energy to be added to a recovery via potential energy being stored in a stretching strap. With a recovery strap, it is possible to add potential energy to a recovery by having the vehicle that is not stuck use a small amount of momentum to pull the stuck vehicle out of the problematic situation.
          
          Recovery straps are available in various lengths, but the most common lengths (in the US...) are 20' and 30'.</RecoveryCard>
          <RecoveryCard title="Recovery Rope" imageInfo={[{altText:"30' Recovery Rope strapped to a Bronco swing gate", image:recoveryRope}]}>A Recovery Rope is an (attractive) alternative to a Recovery Strap. There are a couple advantages of a recovery rope over a recovery strap. Recovery ropes are typically capable of stretching more than a recovery strap. Often up to 30 percent of their overall length. Recovery ropes are also, generally, more durable than recovery straps. They are made with a stretchy nylon core, and an outer layer that is intended to protect the stretchy inner core. In addition recovery ropes are typically not stiched, but rather the loops on the ends are woven together, which helps with durability.
          
          On the flip side, recovery ropes generally take up a lot more space than recovery straps.
          </RecoveryCard>
          <RecoveryCard imageInfo={[{altText:"Screw Pin Bow Shackle", image:bowShackle}]} title="Bow Shackles" >
          A lot of people (incorrectly) call these D-Rings. Technically D-Rings are something else, these are Screw Pin Bow Shackles (there are other types of bow shackles, but these are the most popular sort used in off-road recovery). The most popular size of bow shackle used in off roading is a shackle with a 3/4" pin (sometimes called a 19mm pin). Bow shackles are technically a piece of rigging equipment but they are commonly used in off roading.
          </RecoveryCard>
          <RecoveryCard imageInfo={[{altText:"Soft Shackle", image:warnSoftShackle}]} title="Soft Shackles">Soft shackles are another great option for connecting to recovery points on your vehicle. Soft shackles are made from a high molecular weight polyethelyene material. They are light weigh and are easy to store with your other off road gear. Like recovery ropes and straps, they come in various lengths. Many of them also come with a protective sleave that is intended to reduce damage to the shackle material when it is being used.</RecoveryCard>
          <RecoveryCard imageInfo={[{altText:"Tree Saver Strap", image:treeSaver}]}title="Tree Saver">Technically Tree savers are typically just tow straps. They are generally fairly short, fairly wide tow straps, but they are typically just tow straps (although some other forms of tree savers also exist). Never wrap a winch line around a tree. It damages the winch line as well as the tree. Use a tow strap instead to spread the load out over the bark area of the tree. Secure the tree saver as low on the tree as practicle for the recovery to reduce the amount of leverage that you are placing on the tree.</RecoveryCard>
        </div>
    </>
  )
}

export default RecoveryGear
