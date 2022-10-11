import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/home.css";
import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

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
        <NavBar />
        {/* <h2>Contoh dari details film</h2> */}
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
                <div>
                  <Button variant="info">
                    <FaRegPlayCircle size="25px" /> Watch Trailer {movies.video}
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Detail;
