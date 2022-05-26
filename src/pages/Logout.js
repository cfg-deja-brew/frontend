import React from "react"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"

function Logout() {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId'])
  removeCookie('sessionId')

  return (
    <div className="container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-light">
      <h1 className="mb-4">You are now logged out.</h1>
      <Link to="/" className="btn btn-lg btn-outline-light">Return to home</Link>
    </div>
  )
}

export default Logout