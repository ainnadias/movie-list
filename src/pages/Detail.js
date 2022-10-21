import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/intro.css";
import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import axios from "axios";
import Footer from "../components/Footer";

import "../style/detail.css";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data);
      });
  }, [id]);
  return (
    <div>
      <div>
        {/* <NavBar /> */}
        {/* <h2>Contoh dari details film</h2> */}
        {localStorage.getItem("token") ? (
          <div className="detail">
            <Container className=" justify-content-center">
              <Row>
                <Col md={5}>
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${movies.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                </Col>
                <Col md={3}>
                  <div className="title" style={{ width: "60rem" }}>
                    {/* Harry Potter and Deathly Hallows It All Ends */}
                    {movies.title}
                  </div>
                  <div className="genre mt-2">
                    {console.log(movies.genres)}
                    {/* Action, Thriller */}
                    {movies.genres_ids}
                  </div>
                  <div className="my-3" style={{ width: "50rem" }}>
                    <Card.Text>{movies.overview}</Card.Text>
                  </div>
                  <div className="rating my-4">
                    <FaStar color="yellow" />
                    {/* 5.0 / 5 */}
                    {movies.vote_average}
                  </div>
                  <div className="watchTrailer">
                    <Button variant="info">
                      Watch Trailer {movies.video}
                      <FaRegPlayCircle size="25px" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        ) : (
          navigate("/")
        )}
      </div>
    </div>
  );
};

export default Detail;
