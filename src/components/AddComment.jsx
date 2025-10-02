import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const AddComment = ({ asin, onNewComment }) => { // Form per aggiungere un nuovo commento
  const [text, setText] = useState(""); // stato per il testo del commento
  const [rate, setRate] = useState(1);  // stato per il voto da 1 a 5

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify({
          comment: text,
          rate: rate.toString(),
          elementId: asin,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODlhNDk2MDFiZjAwMTViNGE3NTUiLCJpYXQiOjE3NTk0MTQ2OTMsImV4cCI6MTc2MDYyNDI5M30.CPbpKiUsRqKOpVFhfm4EWWUqUI1X8LjGyFqSnmOME_o",
        },
      });
      setText("");   // reset del campo di testo
      setRate(1);    // reset del voto
      onNewComment(); // aggiornamento della lista dei commenti
    } catch (err) {
      console.log("Errore aggiunta commento", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-2">
      <Form.Control
        type="text"
        placeholder="Scrivi un commento..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-2"
        required
      />
      <Form.Select
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="mb-2"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n}>{n}</option>
        ))}
      </Form.Select>
      <Button type="submit" variant="primary" size="sm">
        Aggiungi
      </Button>
    </Form>
  );
};

export default AddComment;
