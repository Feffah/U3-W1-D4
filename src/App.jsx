import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

function App() {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <>
      <MyNav />

      <Container>
        <Welcome />
        <Row className="align-items-start">
          {/* Colonna sinistra: griglia libri con scroll */}
          <Col
            md={8}
            style={{ maxHeight: "80vh", overflowY: "auto", paddingRight: "1rem" }}
          >
            <BookList
              books={fantasy}
              selectedAsin={selectedAsin}
              onSelectBook={setSelectedAsin}
            />
          </Col>

          {/* Colonna destra: CommentArea sempre visibile */}
          <Col md={4}>
            {selectedAsin ? (
              <CommentArea asin={selectedAsin} />
            ) : (
              <div className="alert alert-info mt-2">
                Seleziona un libro per visualizzarne i commenti!
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
