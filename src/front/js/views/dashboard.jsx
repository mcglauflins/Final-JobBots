import Sidebar from "../component/sideBar.jsx";
import useStore from "../store/zustand";
import { useState, useEffect } from "react";
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
import { useCookies } from 'react-cookie';


export const Dashboard = () => {

  useEffect(()=>{
    const url=`${store.backendURL}/api/profile-info`
    const token = localStorage.getItem('jwt-token');
    const userID = localStorage.getItem('user_id');
    const requestOptions = {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
      },
      body: JSON.stringify({
        "id": userID,
      })
   }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      store.setFName(result.first_name)
      store.setLName(result.last_name)
      store.setUsername(result.username)
      store.setEmail(result.email)
    })
    .catch(err => {
      console.error(err);
    });
  },[])

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);
  
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const navigate = useNavigate()

  const store = useStore();

  const token = localStorage.getItem('jwt-token');
  const userID = localStorage.getItem("user_id");

  const deleteAccount = () => {
    fetch(
      `${store.backendURL}/api/delete-account`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({id: userID})
      }
    )
      .then((response) => {
        if(response.ok){
          store.setLogin(false)
          removeCookie("email", {path: "/"})
          localStorage.removeItem("jwt-token")
          localStorage.removeItem("user_id")
          return response.json()
        }else{
          return 400
        }
      })
      .then(result => {
        if(result != 400){
          navigate("/")
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

  return (
    store.loggedIn ? (<div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar navKey="1"/>
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
                    md="12"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={store.first_name}
                      onChange={(e) => store.setFName(e.target.value)}
                      isValid={touched.firstName && !errors.firstName}
                      readOnly={true}
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
                      value={store.last_name}
                      onChange={(e) => store.setLName(e.target.value)}
                      isValid={touched.lastName && !errors.lastName}
                      readOnly={true}
                    />

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={store.email}
                      onChange={(e) => store.setEmail(e.target.value)}
                      readOnly={true}
                      type="email"
                    />
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
                        value={store.username}
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        onChange={(e) => store.setUsername(e.target.value)}
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
                  <Button variant="success" onClick={()=>deleteAccount()}>Yes</Button>
                </Modal.Footer>
              </Modal>
            </Form>
          )}
        </Formik>
      </Container>
    </div>) : (<div>

      <h1>UNAUTHORIZED 401-</h1>
      <h4>Please <a href="#"onClick={()=>handleShowModal()}>login</a> to access dashboard.</h4>

      <LoginModal show={showModal} onHide={handleShowModal} />
    </div>)
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
