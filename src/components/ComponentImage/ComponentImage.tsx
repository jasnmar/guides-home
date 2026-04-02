import { useEffect, useState } from "react"
import "./ComponentImage.css"

function ComponentImage(props: { imageRef: string, className?: string }) {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  
  // Robust check for .svg extension, handling query strings and fragments
  const isSvg = props.imageRef.split(/[?#]/)[0].toLowerCase().endsWith(".svg")

  useEffect(() => {
    if (isSvg) {
      // Append ?raw (or &raw) to get the literal SVG source from Vite
      const rawUrl = props.imageRef.includes("?") 
        ? `${props.imageRef}&raw` 
        : `${props.imageRef}?raw`

      fetch(rawUrl)
        .then((res) => res.text())
        .then((text) => {
          const cleanSvg = text.replace(/<\?xml.*?\?>|<\!DOCTYPE.*?>/gi, "")
          setSvgContent(cleanSvg)
        })
        .catch((err) => console.error("Failed to load SVG:", err))
    }
  }, [props.imageRef, isSvg])

  if (isSvg && svgContent) {
    return (
      <div 
        className={`component-image-svg-wrapper ${props.className || ""}`} 
        dangerouslySetInnerHTML={{ __html: svgContent }} 
      />
    )
  }

  return (
    <>
      <img className={`component-image-default ${props.className || ""}`} src={props.imageRef} alt="" />
    </>
  )
}

export default ComponentImage