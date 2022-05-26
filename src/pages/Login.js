import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { login } from "../api/api";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId'])
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState();
  const [mobileSubmitted, setMobileSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await login({
      mobile: mobile,
      code: code,
    })
    if (response === "error") {
      setMessage("Details incorrect")
    }
    else {
      setMobileSubmitted(true);
      if (response === "success") {
        setMessage("A code has been sent")
      } else {
        setMessage("")
        setCookie("sessionId", String(response.SessionId))
        navigate("/")
      }
    }
  }

  return (
    <div className="Login container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-light">
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-4">
          <label htmlFor="phone" className="form-label fs-4">Mobile</label>
          <input type="tel" className="form-control form-control-lg" id="phone" autoFocus={true} onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className={`mb-4 ${mobileSubmitted ? 'd-block' : 'd-none'}`}>
          <label htmlFor="code" className="form-label fs-4">Code</label>
          <input type="tel" className="form-control form-control-lg" id="code" autoFocus={true} onChange={(e) => setCode(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-lg btn-outline-light d-block w-100">Login</button>
        <p className="mt-2 text-center">{message}</p>
      </form>
    </div>
  );
}