import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info:siteMetadata {
        person {
          age
          name
        }
        author
        title
        description
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  //   const { title } = data.site.info
  //   const { name } = data.site.info.person

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
