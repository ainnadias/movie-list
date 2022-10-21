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
            <div className="background"></div>
            <Container className=" justify-content-center">
              <div className="title-detail">
                <h1>Detail Movie</h1>
              </div>
              <Row>
                <Col>
                  <div className="imageD">
                    <Image src={`${process.env.REACT_APP_IMG_PATH}/${movies.poster_path}`} alt="movie" />
                  </div>
                </Col>
                <Col>
                  <div className="title">
                    {/* Harry Potter and Deathly Hallows It All Ends */}
                    {movies.title}
                  </div>
                  <div className="genre mt-2">
                    {console.log(movies.genres)}
                    {/* Action, Thriller */}
                    {movies.genres_ids}
                  </div>
                  <div className="my-3">
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
          </div>
        ) : (
          navigate("/")
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
