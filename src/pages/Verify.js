import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Verify.css";

export default function Verify() {
  const [Mobile, setMobile] = useState("");
  function validateForm() {
    return Mobile.length === 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div className="Verify text-light">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="Mobile">
          <Form.Label>Verification Code</Form.Label>
          <Form.Control
            autoFocus
            type="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Confirm
        </Button>
      </Form>
    </div>
  );
}