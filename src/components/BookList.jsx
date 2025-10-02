import { Alert, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: ""
  };

  render() {
    const { books } = this.props;
    console.log("BOOKLIST RENDER");

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
    return (
      <>
        <FormControl
          type="text"
          placeholder="Cerca un libro"
          className="mb-3"
          value={this.state.searchQuery}
          onChange={e => this.setState({ searchQuery: e.target.value })}
        />
        <Row className="g-2">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => {
              return <SingleBook book={book} key={book.asin} />;
            })
          ) : (
            <Alert variant="warning">Nessun libro trovato</Alert>
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
