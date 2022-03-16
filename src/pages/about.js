import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
    <Header />
      <h1>About</h1>
      <p>this is an about page. It will have info about me.</p>
      <p>
        You can contact me <Link to="/contact">here</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
