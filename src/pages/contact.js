import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p>Email me: gregmunro90@gmail.com</p>
      <p>
        Reach me on twitter{" "}
        <a href="https://twitter.com/momothelocal" target="_blank">
          @momothelocal
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
