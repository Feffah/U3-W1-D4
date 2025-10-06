import { useState, useEffect } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComments = async () => {
    if (!asin) return; // Non fa la fetch se asin non esiste
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODlhNDk2MDFiZjAwMTViNGE3NTUiLCJpYXQiOjE3NTk3NTczNzgsImV4cCI6MTc2MDk2Njk3OH0.pa92VpPqyb0WkDJqKbWSZ_VvJoRxbAaBta15ylkFijY",
          },
        }
      );

      if (!res.ok) throw new Error("Errore nella fetch");

      const data = await res.json();
      setComments(Array.isArray(data) ? data : []); // Evita errori se l'API ritorna qualcosa che non ci si aspettava
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Aggiorna i commenti solo se asin è valido
  useEffect(() => {
    if (asin) fetchComments();
  }, [asin]);

  if (!asin) {
    return <div className="alert alert-info">Seleziona un libro per leggerne i commenti</div>;
  }

  return (
    <div className="mt-2">
      {loading && <Loading />}
      {error && <Error />}
      <Comments comments={comments} onDelete={fetchComments} />
      <AddComment asin={asin} onNewComment={fetchComments} />
    </div>
  );
};

export default CommentArea;
