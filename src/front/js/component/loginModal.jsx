import React, { Fragment, useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useStore from "../store/zustand"
import { useCookies } from "react-cookie"
import "../../styles/login.css";

export  function LoginModal(props) {
  const store = useStore();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);

  const [email, setEmail] = useState(cookies.email);
  const [password, setPassword] = useState("");
  const [resStatus, setResStatus] = useState(-1);

  const isChecked = (e) => {
    const checked = e.target.checked;
    if(checked){
      setCookie('email', email, {path: '/'})
    }else{
      return null
    }
  }


  const login = async(email, password) => {
    const resp = await fetch(
      `${store.backendURL}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    )
      if(!resp.ok) {
        setResStatus(resp.status)
        throw Error("this is not working!")
      }
      else if(resp.status===401){
        throw("invalid credentials")
      }
      else if(resp.status===400){
        throw("invalid email or password")
      }
      const data=await resp.json()
      localStorage.setItem("jwt-token",data.token)
      console.log(data)
      store.setLogin(true)
      navigate('/dashboard')
      return data
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className="loginTitle" id="contained-modal-title-vcenter">
          Let's Get To Job-SERChing!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <>
                <Form.Group className="mb-3">
                  <Form.Label className="words">Email</Form.Label>
                  <Form.Control
                    defaultValue={cookies.email ? cookies.email : null}
                    enabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="words">Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    enabled
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="text-danger">{resStatus == 401 ? "Wrong email or password." : null}</span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check className="words" type="checkbox" label="Save Email" onClick={(e) => isChecked(e)}/>
                </Form.Group>
              </>
            </Col>
          </Row>
          <Row>
            <Button className="login" onClick={() => login(email, password)}>Login</Button>
          </Row>
          <Row>
          
            <Link to={"/forgot-password"} className="btn btn-primary login">Forgot Password</Link>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <h1>Need an Account?</h1>
        
        <Link className="signupp" onClick={props.onHide} to={"/signup"}>Click Here To Sign Up</Link>
      </Modal.Footer>
    </Modal>
  );
}
