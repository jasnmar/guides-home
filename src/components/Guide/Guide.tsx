import "./Guide.css"


function Guide( props : {name:string, location: string, bio: string } ) {
  console.log('props: ', props)
  return (
    <>
      <h1>{props.name}</h1>
      <h2>I'm an Off-Roadeo guide in {props.location}</h2>
      <p>{props.bio}</p>
    </>
  )
}

export default Guide