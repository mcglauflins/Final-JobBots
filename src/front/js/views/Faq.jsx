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
            Q: Can I use SERCBot with any jobsearch website?
          </Accordion.Header>
          <Accordion.Body>
            A: At the moment SERCbot can only be used with Linkedin, but in the short
            future we plan on expanding JobBots so that it is compatible with
            most job search websites.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q: Do I have to create an account to use SERCBot?
          </Accordion.Header>
          <Accordion.Body>
            A: Yes, in order to use and upload your resume to SERCBot you will need to create a Profile with us..
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q: Will SERCBot work on my device? </Accordion.Header>
          <Accordion.Body>
            A: Currently SERCBot is running on PC and andriod devices.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q: can i upload my resume on JobBots? </Accordion.Header>
          <Accordion.Body>
            A: Yes, in order to use SERCbot you will need to upload your resume in .pdf format.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Q: Will JobBots apply to jobs for me? </Accordion.Header>
          <Accordion.Body>
            A: Yes, SERCbot will automatically search and apply to as many jobs as your keywords indicate.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Q: Will JobBots keep track of the jobs i've applied to? </Accordion.Header>
          <Accordion.Body>
            A: No, SERCbot will not keep track of the jobs that you have applied to, but 
            Linkedin will keep track of the jobs you have applied to. In future versions
            this is a feature we plan on adding.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faqs;
