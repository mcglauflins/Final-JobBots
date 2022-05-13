import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../styles/signup.css";
import useStore from "../store/zustand"

const SignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const store = useStore()


  const signUp = () => {
    fetch(
      `${store.backendURL}/api/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: fName,
          last_name: lName, 
          username: username,
          email: email,
          password: password,
        }),
      }
    )
      .then((response) => {
        return response.json()
      })
      .then(result=>{
        console.log(result);
        if(result == "Success!") {
          navigate("/")
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ width: "600px" }}>
        <Col md="12">
          <form className="background">
            <p className="h5 text-center mb-4 signup">
              Start You Job SERCh Here!
            </p>
            <div className="grey-text">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                icon="user"
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setFName(e.target.value)}
              />
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setLName(e.target.value)}
              />
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Label>Email:</Form.Label>
              <Form.Control
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Password:</Form.Label>
              <Form.Control
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button color="primary" onClick={()=>signUp()}>SignUp Now!</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
