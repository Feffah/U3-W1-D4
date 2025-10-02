import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    const { book } = this.props;

    return (
      <Col xs={12} md={4} lg={3} xl={2}>
        <Card className={`book-cover d-flex flex-column ${this.state.selected ? "border-danger" : ""}`}>
          <Card.Img variant="top" src={book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={book.asin} />} 
          {/* ricarica i commenti dopo aver cancellato */}

      </Col>
    );
  }
}
export default SingleBook;
