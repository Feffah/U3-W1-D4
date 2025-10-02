import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import AddComment from "./components/AddComment";
import CommentArea from "./components/CommentArea";
import Comments from "./components/Comments";
import Error from "./components/Error";
import Loading from "./components/Loading";
import SingleComment from "./components/SingleComment";

function App() {
  return (
    <>
      <MyNav />

      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
