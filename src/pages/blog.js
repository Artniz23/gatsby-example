import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <Link to="/">Go to Home</Link>
      </div>
    </Layout>
  )
}

export default blog
