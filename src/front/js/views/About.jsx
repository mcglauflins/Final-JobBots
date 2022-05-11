import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import updated from "../../img/updated.png";
import Ron from "../../img/Ron.jpg";
import Sarah from "../../img/sarah.jpg";
import "../../styles/about.css";



function About() {
  return (
    <div>
      <h1 className="header">The Team</h1>
      <Container className="content" fluid="md">
        <CardGroup>
        <Card className="card1" >
            <Card.Img className="imageSarah" variant="top" src={Sarah} style={{ borderRadius: 25 }} />
            <Card.Body>
              <Card.Title>Sarah Mcglauflin</Card.Title>
              <Card.Text>
                Full Stack Software Developer
              </Card.Text>
              <Card.Text>
                This website was created during 4Geeks Academy with my amazing teammates here. I worked in the front-end of this website to give our users the website view they see to aid them in their effortless job search. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card">
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
              <Card.Link href="https://www.linkedin.com/in/sarah-mcglauflin-a9ab35185/">Card Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card">
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
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Footer>
          </Card>
          <Card className="card">
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
