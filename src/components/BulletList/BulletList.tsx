import "./BulletList.css"
import BulletImage from "../BulletImage/BulletImage"
import { v4 as uuidv4 } from 'uuid'

function BulletList(props: {bullets:{ data:string, image?: string}[]} ) {
  const bulletList = props.bullets.map((item) => {
    let bullImg = <></>
    if(item.image) {
      bullImg = <BulletImage imageIdetifier={item.image} />
    }
    return (
      <li className="plus-data-bullet" key={uuidv4()}>
        {item.data} {bullImg}
      </li>
    )
  })
  return (
    <>
      {bulletList}
    </>
  )
}

export default BulletList