import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useStore from "../store/zustand"

export function LoginModal(props) {
  const store = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async(email, password) => {
    const resp = await fetch(
      `https://3001-mcglauflins-finaljobbot-10npefry8bl.ws-us44.gitpod.io/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    )
      if(!resp.ok) throw Error("this is not working!")
      if(resp.status===401){throw("invalid credentials")}
      else if(resp.status===400){throw("invalid email or password")}
      const data=await resp.json()
      localStorage.setItem("jwt-token",data.token)
      console.log(data)
      store.setLogin(true)
      return data
  };

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
                    type="password"
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
        <Link onClick={() => login(email, password)} to={"/dashboard"}>Login</Link>
        <Link to={"/forgot-password"} >Forgot Password</Link>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <h2>Need an Account?</h2>
        <Link onClick={props.onHide} to={"/"}>Click Here To Sign Up</Link>
      </Modal.Footer>
    </Modal>
  );
}
