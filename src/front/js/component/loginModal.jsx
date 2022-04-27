import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function LoginModal(props) {
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
                  <Form.Control placeholder="" enabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control placeholder="" enabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Save Username"
                  />
                </Form.Group>
              </>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Login</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
