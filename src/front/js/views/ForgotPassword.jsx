import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(-1);
  const [newPassword, setNewPassword] = useState("");
  const store = useStore();

  const verifyCode = (code) => {
    if (code == store.resetCode) {
      console.log(true);
      store.setCodeVerified(true);
      return true;
    } else {
      return <h1>Try again</h1>;
    }
  };

  const sendEmail = (email) => {
    fetch(
      `${store.backendURL}/api/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        store.setEmailSent(true);
        store.setResetCode(result.reset_code);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changePassword = (newPassword, email, code) => {
    fetch(
      `${store.backendURL}/api/change-password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: -1,
          email: email,
          code: code,
          password: newPassword
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        store.setEmailSent(false)
        store.setCodeVerified(false)
        // console.log(result + "\nCode from front-end: " + code);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {!store.emailSent ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Link
            className="btn btn-primary"
            onClick={() => sendEmail(email)}
            to={"/forgot-password"}
          >
            Submit
          </Link>
        </Form>
      ) : !store.codeVerified ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter code"
              name="user_code"
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>
          <div className="btn btn-primary" onClick={() => verifyCode(code)}>
            Submit
          </div>
        </Form>
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new password"
              name="user_code"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Link
            className="btn btn-primary"
            onClick={() => changePassword(newPassword, email, code)}
            to={"/"}
          >
            Change Password
          </Link>
        </Form>
      )}
    </>
  );
};

export default ForgotPassword;
