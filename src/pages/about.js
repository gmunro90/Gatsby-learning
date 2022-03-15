import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>this is an about page. It will have info about me.</p>
      <p>
        You can contact me <Link to="/contact">here</Link>
      </p>
    </div>
  )
}

export default AboutPage
