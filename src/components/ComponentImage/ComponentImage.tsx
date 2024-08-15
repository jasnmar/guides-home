import "./ComponentImage.css"

function ComponentImage(props :{ imageRef:string}) {
  return (
    <>
      <img className="component-image-default" src={"/"+props.imageRef+".svg"}></img>
    </>
  )
}

export default ComponentImage