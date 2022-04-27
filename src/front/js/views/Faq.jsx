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
            Q: Can I use Jobbots with any jobsearch website?
          </Accordion.Header>
          <Accordion.Body>
            A: At the moment Jobbots can only be used with , but in the short
            future we plan on expanding Jobbots so that it is compatible with
            most job search websites.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q: Do I have to create an account to use Jobbots?
          </Accordion.Header>
          <Accordion.Body>
            A: No, Jobbots works with your account that is signed into the job
            search website.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q: Will Jobbots work on my device? </Accordion.Header>
          <Accordion.Body>
            A: Yes, Jobbots will work on most devices.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q: Do I have to create an account to use Jobbots?
          </Accordion.Header>
          <Accordion.Body>
            A: No, Jobbots works with your account that is signed into the job
            search website.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faqs;
