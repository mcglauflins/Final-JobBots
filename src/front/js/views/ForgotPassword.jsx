import { Form, Button } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="user_email"/>
        </Form.Group>
        <Button variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ForgotPassword;