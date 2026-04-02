import { useEffect } from "react"

function PageTitle(titleString: string, description?: string) {
  useEffect(() => {
    document.title = `${titleString} | Off-Roadeo Guides`
    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        metaDescription.setAttribute('content', description)
        document.head.appendChild(metaDescription)
      }
    }
  }, [titleString, description])
}

export default PageTitle