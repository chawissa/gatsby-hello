import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Charissa D. Ramirez</h2>
          <h3>Develop and Deploy</h3>
          <p>Front End Developer</p>
          <Link className={styles.btn} to="/projects">
            Projects
          </Link>
        </div>
        <StaticImage src="../images/banner.png" alt="site banner" />
      </section>
    </Layout>
  )
}
