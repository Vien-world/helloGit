import React from "react"
import Img from "gatsby-image"

export default function ViewList(props) {
  return (
    <section>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      {/* <img src={props.data.imgSrc.publicURL} /> */}
      <Img fluid={props.data.imgSrc.childImageSharp.fluid} />
    </section>
  )
}
