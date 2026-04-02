import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import "./NavCard.css"
import ComponentImage from "../ComponentImage/ComponentImage"

function NavCard(props: { title: string, link: string, image: string, altText: string, children: string, loading?: "lazy" | "eager", fetchPriority?: "high" | "low" | "auto" }) {
  return (
    <>
      <div className="navCard--wrapper">
        <Link className="navCard--link" to={props.link}>
          <div className="navCard--inner">
            <div className="navCard--title">{props.title}</div>
            <ComponentImage className="navCard--image" imageRef={props.image} loading={props.loading} fetchPriority={props.fetchPriority} />
            <div className="navCard--text"><ReactMarkdown>{props.children}</ReactMarkdown></div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavCard