import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/about.css";
import "../../styles/howitworks.css";
import Button from "react-bootstrap/Button";

function HowItWorks() {
  return (
    <div>
      <h1 className="header">How Serc Works</h1>
      <Container className="about" fluid="md">
        <Row>
          <Col className="text">
            <br></br>
            In today's day in age, companies rely on job searching websites to
            find their future empolyees. Canidates have to scroll through many
            jobs, through many website, and apply one at a time, ultimately
            getting discouraged with the time spent searching for the job that
            they qualify for. The average amount of jobs a candidate applies to
            is about 2-3 per day. This created a problem that our team wanted to
            help solve: How can we help others in their job search to apply to
            hundreds of jobs at a time with ease? With this problem, SERC-Bot
            was created to be a free solution for all.
            <br></br>
            <br></br>
            SERC-Bot uses algorithmic bots to apply to a mass amount of jobs at
            ease. Users of SERC-Bot put the parameters of the job they are
            seraching for into their profile. With the click of a button, users
            will be linked with their job search engine and SERC-Bot will begin
            it's magic. The user resume will be applied to 100 relevant jobs
            according to their job search criteria at a time.
            <br></br>
            <br></br>
            Job searching has never been easier!
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
