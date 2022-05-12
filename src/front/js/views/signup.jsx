import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../styles/signup.css";

const SignUp = () => {
  return (
    <Container className="d-flex justify-content-center" >
      <Row style={{width:"600px"}}>
        <Col md="12">
          <form className="background">
            <p className="h5 text-center mb-4 signup">Start You Job SERCh Here!</p>
            <div className="grey-text">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
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
              />
              <Form.Label>Password:</Form.Label>
              <Form.Control
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <Button color="primary">SignUp Now!</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;