import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";

const Populer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div >
      <Container>
        <h1 className="mt-5">Popular Movie</h1>
        <div className="right">
          <Button variant="Link">See All Movies</Button>
        </div>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} className="movieWrapper" key={index}>
                <Link to={`/detail/`}>
                  <Card className="text-center movieImg">
                    <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                    {/* <Button variant="Light">See Details</Button> */}
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Populer;
