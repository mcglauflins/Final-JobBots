import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import updated from "../../img/updated.png";
import Ron from "../../img/Ron.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Sarah from "../../img/sarah.jpg";
import Ernesto from "../../img/ernesto.png";
import Chris from "../../img/chris.jpg";
import "../../styles/about.css";

function About() {
  return (
    <div>
      <h1 className="header">Meet The Serc Team</h1>
      <Container className="content" fluid="md">
        <CardGroup>
        <Card className="card1" >
            <Card.Img className="images" variant="top" src={Sarah} style={{ borderRadius: 25 }} />
            <Card.Body>
              <Card.Title>Sarah Mcglauflin</Card.Title>
              <Card.Text>
                Front-End Developer
              </Card.Text>
              <Card.Text>
               Hello SERC-Bot users! I am a full-stack software developer from Denver, Colorado. My hobbies include coding,
                playing video games, and spending time with my dogs. I am graduate of 4Geeks Academy, and co-contributor to the front end of this project. I hope SERC-Bot helps make your job search effortless!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://www.linkedin.com/in/sarah-mcglauflin-a9ab35185/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Card.Link>
              <Card.Link href="https://github.com/mcglauflins" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img className="images" variant="top" src={Ernesto} />
            <Card.Body>
              <Card.Title>Ernesto Gonzalez Lopez</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
              <Card.Text>
              Hello, my name is Ernesto, a full-stack software developer based on Miami. I've work on both, SERC's back-end and front-end. It's a very exciting project that will help thousands of people looking for new jpb positions.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://www.linkedin.com/in/ernesto-x-gonzalez-lopez/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Card.Link>
              <Card.Link href="https://github.com/UmiKami" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img className="images" variant="top" src={Ron} />
            <Card.Body>
              <Card.Title>Ron Butler</Card.Title>
              <Card.Text>
                Front-End Developer
              </Card.Text>
              <Card.Text>
                Hello I'm Ron, I am a full-stack software developer from New
                Haven, CT. My hobbies include coding, sports, working on cars,
                and playing video games. I am a recent student of 4Geeks academy
                based in Miami, FL., and co-contributor to this project.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://www.linkedin.com/in/ronald-butler-5249a311" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Card.Link>
              <Card.Link href="https://github.com/ron24g" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img className="images" variant="top" src={Chris} />
            <Card.Body>
              <Card.Title>Chris Perez</Card.Title>
              <Card.Text>
                Back-End Developer
              </Card.Text>
              <Card.Text>
              Welcome Serc-bot users, I am a full-stack developer from Denver, Colorado. I am a co-contributor to this website, with a specialty in the back-end. I'm what you like to call the Tony Stark of this project... that is all.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://www.linkedin.com/in/christopher-perez-a008aa226/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Card.Link>
              <Card.Link href="https://github.com/Chrisp0412" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Card.Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default About;
