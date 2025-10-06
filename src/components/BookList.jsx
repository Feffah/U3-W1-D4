import { Row, Col, FormControl, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

const BookList = ({ books, selectedAsin, onSelectBook }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <FormControl
        type="text"
        placeholder="Cerca un libro"
        className="mb-3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Row className="g-2">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              isSelected={selectedAsin === book.asin}
              onSelectBook={onSelectBook}
            />
          ))
        ) : (
          <Alert variant="warning">Ops! Nessun libro trovato</Alert>
        )}
      </Row>
    </>
  );
};

export default BookList;
