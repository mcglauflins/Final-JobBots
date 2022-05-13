import Sidebar from "../component/sideBar.jsx";
import useStore from "../store/zustand";
import { useState } from "react";
import { LoginModal } from "../component/loginModal.jsx";
import { Formik } from "formik";
import { Button, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/dashboard.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const navigate = useNavigate();

  const store = useStore();

  const token = localStorage.getItem("jwt-token");
  const userID = localStorage.getItem("user_id");

  const changePassword = () => {
    fetch(`${store.backendURL}/api/change-password-jwt`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token 
      },
      body: JSON.stringify({
        id: userID,
        password: store.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if(result){
          store.setEditPassword(true)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const changeProfile = () => {
    fetch(`${store.backendURL}/api/change-profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token 
      },
      body: JSON.stringify({
        id: userID,
        username: store.username,
        email: store.email,
        first_name: store.first_name,
        last_name: store.last_name
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if(result){
          store.setEditFName(true)
          store.setEditLName(true)
          store.setEditEmail(true)
          store.setEditUsername(true)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const deleteAccount = () => {
    fetch(`${store.backendURL}/api/delete-account`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ id: userID }),
    })
      .then((response) => {
        if (response.ok) {
          store.setLogin(false);
          removeCookie("email", { path: "/" });
          localStorage.removeItem("jwt-token");
          localStorage.removeItem("user_id");
          return response.json();
        } else {
          return 400;
        }
      })
      .then((result) => {
        if (result != 400) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return store.loggedIn ? (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar navKey="4" />
      <Container>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            city: "",
            state: "",
            zip: "",
            file: null,
            terms: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <Row className="mb-3">
                <Col className="dashboard col-12 d-flex flex-column">
                  <h2>User Information:</h2>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>First name</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={store.first_name}
                        onChange={(e) => store.setFName(e.target.value)}
                        isValid={touched.firstName && !errors.firstName}
                        readOnly={store.editFName}
                      />
                      {store.editFName ? <span className="btn btn-outline-primary" onClick={()=>store.setEditFName(false)}>Edit</span> : <span className="btn btn-outline-primary" onClick={()=>changeProfile()}>Save</span>}

                    </div>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Last name</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={store.last_name}
                        onChange={(e) => store.setLName(e.target.value)}
                        isValid={touched.lastName && !errors.lastName}
                        readOnly={store.editLName}
                      />
                      {store.editLName ? <span className="btn btn-outline-primary" onClick={()=>store.setEditLName(false)}>Edit</span> : <span className="btn btn-outline-primary" onClick={()=>changeProfile()}>Save</span>}

                    </div>

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        value={store.email}
                        onChange={(e) => store.setEmail(e.target.value)}
                        type="email"
                        readOnly={store.editEmail}
                      />
                      {store.editEmail ? <span className="btn btn-outline-primary" onClick={()=>store.setEditEmail(false)}>Edit</span> : <span className="btn btn-outline-primary" onClick={()=>changeProfile()}>Save</span>}

                    </div>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        // set to false to edit, set to true to make it uneditable
                        type="text"
                        value={store.username}
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        onChange={(e) => store.setUsername(e.target.value)}
                        isInvalid={!!errors.username}
                        readOnly={store.editUsername}
                      />
                      {store.editUsername ? <span className="btn btn-outline-primary" onClick={()=>store.setEditUsername(false)}>Edit</span> : <span className="btn btn-outline-primary" onClick={()=>changeProfile()}>Save</span>}
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        value={store.password == "" ? "*******" : store.password}
                        onChange={(e) => store.setPassword(e.target.value)}
                        type="password"
                        readOnly={store.editPassword}
                      />
                      {store.editPassword ? <span className="btn btn-outline-primary" onClick={()=>store.setEditPassword(false)}>Edit</span> : <span className="btn btn-outline-primary" onClick={()=>changePassword()}>Save</span>}
                    </div>
                  </Form.Group>
                  <Button variant="danger mt-3" onClick={handleShow}>
                    Delete Account
                  </Button>
                </Col>
              </Row>
              <Modal
                show={showDelete}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Deletion Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete your account?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    No
                  </Button>
                  <Button variant="success" onClick={() => deleteAccount()}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  ) : (
    <div>
      <h1>UNAUTHORIZED 404</h1>
      <h4>
        Please{" "}
        <a href="#" onClick={() => handleShowModal()}>
          login
        </a>{" "}
        to access dashboard.
      </h4>

      <LoginModal show={showModal} onHide={handleShowModal} />
    </div>
  );
};

export default Settings;
