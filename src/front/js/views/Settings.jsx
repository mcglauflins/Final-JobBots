import Sidebar from "../component/sideBar.jsx";
import useStore from "../store/zustand";
import { useState } from "react";
import { LoginModal } from "../component/loginModal.jsx";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/dashboard.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const store = useStore();

  const userID = localStorage.getItem("user_id")

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
                <Col className="dashboard col-12">
                  <h2>User Information:</h2>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder={store.first_name}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                      readOnly={"true"}
                    />
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
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder={store.last_name}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                      readOnly={"true"}
                    />

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder={store.email} readOnly={"true"}/>
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
                        readOnly={true}
                        type="text"
                        placeholder={store.username}
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control defaultValue={store.password} readOnly={"true"}/>
                  </Form.Group>
                </Col>
              </Row>
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
