import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/intro.css";
import React from "react";
import { Container, Row, Col, Button, Card, Image, Modal } from "react-bootstrap";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import axios from "axios";
import Footer from "../components/Footer";
import Title from "../components/Title";

import "../style/detail.css";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(movies);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataMovies = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    const dataVideo = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

    setMovies(dataMovies.data);
    setVideos(dataVideo.data.results[0].key);
  };

  return (
    <div>
      <div>
        {/* <NavBar /> */}
        {/* <h2>Contoh dari details film</h2> */}
        {localStorage.getItem("token") ? (
          <div className="detail">
            <Title label="Detail Movie" />
            <Container className=" justify-content-center">
              <Row>
                <Col className="imageD">
                  {/* <div className="imageD"> */}
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${movies.poster_path}`} alt="movie" />
                  {/* </div> */}
                </Col>
                <Col className=" justify-content-center">
                  {/* <Container> */}
                  <Row className="desc">
                    <div className="title">
                      {/* Harry Potter and Deathly Hallows It All Ends */}
                      {movies.original_title}
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
                    <div className="watchTrailer" onClick={handleShow}>
                      <Button variant="info">
                        Watch Trailer {movies.video}
                        <FaRegPlayCircle size="25px" />
                      </Button>
                      <Modal show={show} centered>
                        <div className="trailer">
                          <iframe
                            width="500"
                            height="315"
                            src={`https://www.youtube.com/embed/${videos}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>

                        <Modal.Footer>
                          <Button variant="danger" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Row>
                  {/* </Container> */}
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
