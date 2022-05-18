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
    <div className="Signup text-light">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
      </Form.Group>
      <Form.Group size="lg" controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="LastName"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}