import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import "./NavCard.css"
import ComponentImage from "../ComponentImage/ComponentImage"

function NavCard(props: { title: string, link: string, image: string, altText: string, children: string }) {
  return (
    <>
      <div className="navCard--wrapper">
        <Link className="navCard--link" to={props.link}>
          <div className="navCard--inner">
            <div className="navCard--title">{props.title}</div>
            <ComponentImage imageRef={props.image} />
            <div className="navCard--text"><ReactMarkdown>{props.children}</ReactMarkdown></div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavCard