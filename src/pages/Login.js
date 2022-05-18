import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [Mobile, setMobile] = useState("");
  function validateForm() {
    return Mobile.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div className="Login text-light">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            autoFocus
            type="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}