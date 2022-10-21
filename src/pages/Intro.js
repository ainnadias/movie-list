import { Container, Row, Col, Button, Card } from "react-bootstrap";
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

import "../style/intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <Container className="text-white justify-content-center">
        <Row>
          <Col>
            <div className="title" style={{ width: "40rem" }}>
              Harry Potter and Deathly Hallows It All Ends
            </div>
            <div className="my-3" style={{ width: "40rem" }}>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias vel officia, numquam, expedita facilis ipsa dolorem ea maiores iste quis excepturi accusamus eos, officiis magni illum! Earum, tenetur amet?
              </Card.Text>
            </div>
            <div className="watchTrailer">
              <Button variant="info">
                Watch Trailer
                <FaRegPlayCircle size="25px" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
