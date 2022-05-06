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
import "../../styles/about.css";

function About() {
  return (
    <div>
      <h1 className="header">The Team</h1>
      <Container className="content" fluid="md">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={Ron} />
            <Card.Body>
              <Card.Title>Ron Butler</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faGithub} />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={updated} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={updated} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={updated} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default About;
