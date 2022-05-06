import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/about.css";
import "../../styles/howitworks.css";
import Button from 'react-bootstrap/Button'

function HowItWorks() {
  return (
    <div>
      <h1 className="header">How it Works</h1>
      <Container className="about" fluid="md">
        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
            eros sit amet erat porttitor semper a vitae leo. Aliquam sed velit
            vitae sem rutrum scelerisque. Quisque varius tincidunt nunc, nec
            eleifend nisl congue nec. Etiam in sapien sem. Donec vel urna
            tellus. Cras sapien dolor, laoreet lacinia vestibulum dictum,
            molestie aliquet augue. Sed euismod at purus eget pulvinar. Aenean
            finibus turpis ut maximus hendrerit. Ut ullamcorper tristique leo
            quis hendrerit. Maecenas sodales est et ultricies hendrerit. Cras
            cursus massa turpis, nec egestas ex tempor auctor. In convallis ac
            ligula in pulvinar. Praesent euismod libero et dui dignissim
            laoreet. Nam non neque leo. Duis eget mi dictum, ullamcorper nisl
            ac, sagittis neque. Curabitur sit amet porta mauris. In condimentum
            elit neque. Nulla sapien neque, cursus eget ultrices vel, auctor a
            quam. Phasellus maximus nunc molestie metus porta scelerisque.
            Vivamus porta interdum sem, nec volutpat turpis. Aliquam pharetra
            massa sit amet arcu varius, non porttitor augue ullamcorper.
            Pellentesque sit amet mollis sapien, in posuere augue. Etiam mattis
            nisl leo, nec euismod sapien imperdiet et. Maecenas id purus ipsum.
            Maecenas vel cursus risus. Curabitur ac ligula ut mauris commodo
            ultricies. Nunc vitae nulla nulla. Morbi at nisl et metus varius
            suscipit a ac tortor. Mauris tincidunt nec massa in porttitor.
            Praesent mi enim, varius id ultricies et, condimentum dapibus quam.
            Donec tristique sapien justo, vitae volutpat mauris porttitor et. In
            faucibus quam in venenatis finibus. Phasellus a tellus semper,
            pretium odio eget, lacinia nunc. Nam nisi nulla, ullamcorper
            volutpat ullamcorper id, fringilla id mauris. Nunc maximus felis ut
            risus ultricies hendrerit. Curabitur diam lectus, maximus sit amet
            mollis in, ultrices ultricies ipsum. Ut rutrum tempus nisi, ac
            semper libero vehicula nec. Nulla in eleifend odio, a interdum sem.
            Nulla posuere, eros eget volutpat efficitur, quam massa luctus sem,
            in condimentum ex lacus ut dui.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
