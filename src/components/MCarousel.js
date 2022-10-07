import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const MCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div className="intro">
            <Container className="text-white">
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
                  <div>
                    <Button variant="info">
                      <FaRegPlayCircle size="25px" /> Watch Trailer
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src="HP-BG.jpeg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="HP-BG.jpeg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default MCarousel;
