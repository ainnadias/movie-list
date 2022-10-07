import React from "react";
import { Form, Container } from "react-bootstrap";
// import { useHistory, useState } from "react";

const Search = () => {
  // const Search = (props) => {
  //   const history = useHistory();
  //   const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  //   const goToSearch = useCallback(() => {
  //     if (keyword.trim().length > 0) {
  //       history.push(`${category[props.category]}/search/${keyword}`);
  //     }
  //     [keyword, props.category, history];
  //   });

  return (
    <div className="movie-search">
      <Container>
        <Form>
          {/* <Form.Control type="text" placeholder="What do you want to watch?" className="me-2" aria-label="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} /> */}
          <Form.Control type="text" placeholder="What do you want to watch?" className="me-2" aria-label="Search"  />
        </Form>
      </Container>
    </div>
  );
};

export default Search;
