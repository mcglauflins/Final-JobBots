import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/zustand";
import "../../styles/forgotpassword.css";

const ForgotPassword = () => {
  const [showEmailAlert, setShowEmailAlert] = useState(false)
  const [showCodeAlert, setShowCodeAlert] = useState(false)
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(-1);
  const [newPassword, setNewPassword] = useState("");
  const store = useStore();

  const verifyCode = (code) => {
    if (code == store.resetCode) {
      store.setCodeVerified(true);
      return true;
    } else {
      setShowCodeAlert(true)
    }
  };

  const sendEmail = (email) => {
    fetch(`${store.backendURL}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return 401;
        }
      })
      .then((result) => {
        if (result == 401) {
          setShowEmailAlert(true)
          store.setEmailSent(false);
        } else {
          store.setEmailSent(true);
          store.setResetCode(result.reset_code);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changePassword = (newPassword, email, code) => {
    fetch(`${store.backendURL}/api/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: -1,
        email: email,
        code: code,
        password: newPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        store.setEmailSent(false);
        store.setCodeVerified(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
      {!store.emailSent ? (
        <Form className="forgot d-flex flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email For New Password!</Form.Label>
            <Form.Control className="fs-4"
              type="email"
              placeholder="Enter email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {showEmailAlert ? <Alert variant={"danger"} className="col-12 alert align-self-center">
            Email doesn't exist!
          </Alert> : ""}
          <Link
            className="btn btn-primary forgottt"
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
            {showCodeAlert ? <Alert  variant={"danger"} className="col-2">
            Wrong code!
          </Alert> : ""}
          </Form.Group>
          <div className="btn btn-primary " onClick={() => verifyCode(code)}>
            Submit
          </div>
        </Form>
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              value={newPassword}
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
    </div>
  );
};

export default ForgotPassword;
