import { useState, useEffect } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";


const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]); // salva i commenti del libro
  const [loading, setLoading] = useState(false); // stato per mostrare lo spinner
  const [error, setError] = useState(false); // stato per mostrare il messaggio di errore


  const fetchComments = async () => {   // Funzione per caricare i commenti dal server
    try {
      setLoading(true); // inizio caricamento
      setError(false);  // reset dell'errore precedente
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODlhNDk2MDFiZjAwMTViNGE3NTUiLCJpYXQiOjE3NTk0MTQ2OTMsImV4cCI6MTc2MDYyNDI5M30.CPbpKiUsRqKOpVFhfm4EWWUqUI1X8LjGyFqSnmOME_o",
          },
        }
      );
      if (!res.ok) throw new Error("Errore nella fetch"); // se la fetch fallisce
      const data = await res.json();
      setComments(data); // salvo i commenti nello stato
    } catch {
      setError(true); // se c'è un errore, mostro il messaggio
    } finally {
      setLoading(false); // stoppo lo spinner
    }
  };

  
  useEffect(() => { //serve a caricare i commenti ogni volta che cambio libro
    fetchComments();
  }, [asin]);

  return (
    <div className="mt-2">
      {loading && <Loading />}  {/* fa vedere lo spinner se loading è true */}
      {error && <Error />}      {/* fa vedere il messaggio di errore se error è true */}
      <Comments comments={comments} onDelete={fetchComments} /> {/* lista dei commenti */}
      <AddComment asin={asin} onNewComment={fetchComments} /> {/* form per aggiungere un commento */}
    </div>
  );
};

export default CommentArea;
