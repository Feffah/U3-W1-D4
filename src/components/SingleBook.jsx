import { Card, Col } from "react-bootstrap";

const SingleBook = ({ book, isSelected, onSelectBook }) => {
  return (
    <Col xs={12} md={4} lg={3} xl={2}>
      <Card
        className={`book-cover d-flex flex-column ${isSelected ? "border-danger" : ""}`}
        onClick={() => onSelectBook(book.asin)}
        style={{ cursor: "pointer" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
