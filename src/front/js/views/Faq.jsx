import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../styles/faqs.css";
import "../../styles/about.css";

function Faqs() {
  return (
    <div className="faqs">
      <h1 className="header">FAQS</h1>
      <Accordion className="faq-rw">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q: Can I use JobBots with any jobsearch website?
          </Accordion.Header>
          <Accordion.Body>
            A: At the moment JobBots can only be used with Linkedin, but in the short
            future we plan on expanding JobBots so that it is compatible with
            most job search websites.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q: Do I have to create an account to use JobBots?
          </Accordion.Header>
          <Accordion.Body>
            A:.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q: Will JobBots work on my device? </Accordion.Header>
          <Accordion.Body>
            A: .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q: can i upload my resume on JobBots? </Accordion.Header>
          <Accordion.Body>
            A: .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Q: Will JobBots apply to jobs for me? </Accordion.Header>
          <Accordion.Body>
            A: .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Q: Will JobBots keep track of the jobs i've applied to? </Accordion.Header>
          <Accordion.Body>
            A: .
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faqs;
