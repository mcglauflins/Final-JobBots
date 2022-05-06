import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login(email, password) {
    fetch(
      "https://3001-mcglauflins-finaljobbot-i2elavp1u1c.ws-us44.gitpod.io/api/login",
      {
        "method": "POST",
        "headers": {
          "Content-Type": "application.json",
        },
        "body": { "email": email, "password": password },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Let's Get To Job-Hunting!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder=""
                    enabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder=""
                    enabled
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Save Email" />
                </Form.Group>
              </>
            </Col>
          </Row>
        <Button onClick={() => login(email, password)}>Login</Button>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <h2>Need an Account?</h2>
        <Button onClick={props.onHide}>Click Here To Sign Up</Button>
      </Modal.Footer>
    </Modal>
  );
}
