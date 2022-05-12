import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../styles/faqs.css";
import "../../styles/about.css";

function Faqs() {
  return (
    <div className="faqs">
      <h1 className="header">Frequently Asked Questions</h1>
      <br></br>
      <Accordion className="faq-rw">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q: Can I use SERC-Bot with any jobsearch website?
          </Accordion.Header>
          <Accordion.Body>
            A: At the moment SERC-Bot can only be used with Linkedin, but in the short
            future we plan on expanding SERC-Bot so that it is compatible with
            most job search websites.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q: Do I have to create an account to use SERC-Bot?
          </Accordion.Header>
          <Accordion.Body>
            A: Yes, in order to use and upload your resume to SERC-Bot you will need to create a profile to start your automated job search.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q: Will SERC-Bot work on my device? </Accordion.Header>
          <Accordion.Body>
            A: Currently SERC-Bot is running on Windows and andriod devices. We plan to be compatible with Mac in the near future.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q: Do I need to upload my resume on SERC-Bot? </Accordion.Header>
          <Accordion.Body>
            A: No, in order to use SERC-Bot you only need to link you Linkedin account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Q: Will SERC-Bot apply to jobs for me? </Accordion.Header>
          <Accordion.Body>
            A: Yes, SERC-Bot will automatically search and apply to 100 jobs at a time, or however many jobs your keywords shows.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Q: Will SERC-Bot keep track of the jobs i've applied to? </Accordion.Header>
          <Accordion.Body>
            A: No, SERC-Bot will not keep track of the jobs that you have applied to, but 
            Linkedin will keep track of the jobs you have applied to. In future versions
            this is a feature we plan on adding.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Q: Do I need to download anything? </Accordion.Header>
          <Accordion.Body>
            A: No, users do not need to download anything in order to apply to jobs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Q: Will SERC-Bot sell or use any of my data? </Accordion.Header>
          <Accordion.Body>
            A: No, the goal of SERC-Bot is to provide a free and safe way to make job searching easier for all. Data is encrypted for the safety of our users, and users can delete their account at anytime with no hassle.   
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faqs;
