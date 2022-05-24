import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";


export default function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  
  function validateForm() {
    return email.length > 0 && Mobile.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-light">
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label fs-4">First name</label>
          <input type="text" className="form-control form-control-lg" id="firstName" autoFocus={true} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label fs-4">Last name</label>
          <input type="text" className="form-control form-control-lg" id="lastName" autoFocus={true} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fs-4">Email</label>
          <input type="email" className="form-control form-control-lg" id="email" autoFocus={true} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label fs-4">Mobile</label>
          <input type="tel" className="form-control form-control-lg" id="phone" autoFocus={true} onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-lg btn-outline-light d-block w-100">Sign up</button>
      </form>
    </div>
  );
}
