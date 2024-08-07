import "./SmallLeadInfo.css"

function SmallLeadInfo(props : {small:string, large:string, bullets:{id:number, data:string}[]}) {

  console.log('bullets:', props.bullets)
  const bulletList = props.bullets.map((item) => {
    return (
      <li className="plus-data-bullet" key={item.id}>
        {item.data}
      </li>
    )
  })
  console.log('bulletList:', bulletList)
  return (
    <>
      <p className="SmallLeadSmall">{props.small}</p>
      <p className="SmallLeadLarge">{props.large}</p>
      <ul>
        {bulletList}
      </ul>
    </>
  )
}

export default SmallLeadInfo