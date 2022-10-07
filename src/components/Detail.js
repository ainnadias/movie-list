import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/home.css";
import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import axios from "axios";

const Detail = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // if (params.id) {
    //   axios
    //     .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
    //       params: {
    //         api_key: process.env.REACT_APP_TMDB_KEY,
    //       },
    //     })
    //     .then((response) => {
    //       // console.log("datas =>", response.data.results);
    //       setMovies(response.data.results);
    //     });
    // }
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // console.log("datas =>", response.data.results);
        setMovies(response.data.results);
      });
    // if (params.id) {
    //   axios.get(
    //     `${process.env.REACT_APP_BASE_URL}/movie/${params.id}?${process.env.REACT_APP_TMDB_KEY}`.then((response) => {
    //       console.log(response.data.results);
    //       setMovies(response.data.results);
    //     })
    //   );
    // }
  }, [params.id]);
  return (
    <div>
      <div>
        <NavBar />
        {/* <h2>Contoh dari details film</h2> */}
        <div className="detail">
          <Container className=" justify-content-center">
            <Row>
              {movies.map((result, index) => {
                return (
                  <Col key={index}>
                    <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                    <div className="title" style={{ width: "60rem" }}>
                      {/* Harry Potter and Deathly Hallows It All Ends */}
                      {result.title}
                    </div>
                    <div className="genre mt-2">
                      {/* Action, Thriller */}
                      {result.genre_ids}
                    </div>
                    <div className="my-3" style={{ width: "50rem" }}>
                      <Card.Text>{result.overview}</Card.Text>
                    </div>
                    <div className="rating my-4">
                      <FaStar color="yellow" />
                      {/* 5.0 / 5 */}
                      {result.vote_average}
                    </div>
                    <div>
                      <Button variant="info">
                        <FaRegPlayCircle size="25px" /> Watch Trailer {result.video}
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Detail;
