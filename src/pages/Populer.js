import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

import "../style/home.css";

const Populer = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results.splice(0, 4));
        console.log(setMovies);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="mt-5">Popular Movie</h1>
        <div className="right">
          <Button variant="Link">See All Movies</Button>
        </div>
        <Row>
          {movies.map((result, index) => {
            // console.log(result.id);
            return (
              <Col md={3} className="movieWrapper" key={index}>
                {/* <Link to={`/detail/${result.id}`}> */}

                <Card
                  className="text-center movieImg"
                  onClick={() => {
                    localStorage.getItem("token") ? navigate(`/detail/${result.id}`) : alert("Login dulu !! ");
                  }}
                >
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                  {/* <Button variant="Light">See Details</Button> */}
                </Card>
                {/* </Link> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Populer;
