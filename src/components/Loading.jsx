import { Spinner } from "react-bootstrap";

const Loading = () => (
  <div className="text-center my-2">
    <Spinner animation="border" />
    <p>Caricamento...</p>
  </div>
);

export default Loading;
