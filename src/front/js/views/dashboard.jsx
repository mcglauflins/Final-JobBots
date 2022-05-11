import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../component/sideBar.jsx";
import "../../styles/dashboard.css";
import Form from "react-bootstrap/Form";
import Feedback from "react-bootstrap/Feedback";
import { Formik } from "formik";
import * as yup from "yup";
import InputGroup from "react-bootstrap/InputGroup";

export const Dashboard = () => {
  // const { Formik } = formik;

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

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
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
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3 ">
                <Col className="dashboard">
                  <h2>User Information:</h2>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col className="dashboard">
                  <h2>Key Items:</h2>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="hi2">
                <Form.Group className="position-relative mb-3">
                  <Form.Label>PDF File</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="position-relative mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik106"
                    feedbackTooltip
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

// export const Dashboard = () => {

//   return (
//     <div className="d-flex" style={{ height: "100vh"}}>
//       <Sidebar />
//       <Container>
//         <Row className="dashboard">
//           <Col
//             // md={{ span: 4, offset: 4 }}
//             // sm={{ span: 9, offset: 2 }}
//             // xs={{ span: 12, offset: 0 }}
//             className="hi"
//           >
//             <h1>My Profile</h1>
//           </Col>
//           <Col
//             // md={{ span: 4, offset: 4 }}
//             // sm={{ span: 9, offset: 2 }}
//             // xs={{ span: 12, offset: 0 }}
//             className="hi2"
//           >
//             <h1>Keywords</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col
//             // md={{ span: 4, offset: 4 }}
//             // sm={{ span: 9, offset: 2 }}
//             // xs={{ span: 12, offset: 0 }}
//             className="hi3"
//           >
//             <h1>Linkedin information</h1>
//             <Button className="btn btn-primary" onClick={() => {getDashboard()}}>Dashboard</Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };
