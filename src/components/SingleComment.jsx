const SingleComment = ({ comment, onDelete }) => { // fa vedere un singolo commento con il pulsante Delete
  const deleteComment = async () => {
    try { // richiesta delete al server
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODlhNDk2MDFiZjAwMTViNGE3NTUiLCJpYXQiOjE3NTk0MTQ2OTMsImV4cCI6MTc2MDYyNDI5M30.CPbpKiUsRqKOpVFhfm4EWWUqUI1X8LjGyFqSnmOME_o" },
        }
      );
      onDelete(); // ricarica i commenti dopo aver cancellato
    } catch (err) {
      console.log("Errore eliminazione commento", err);
    }
  };

  return (
    <li className="d-flex justify-content-between align-items-center border-bottom py-2">
      <span>{comment.comment} – <strong>{comment.rate}/5</strong></span>
      <button className="btn btn-sm btn-danger" onClick={deleteComment}>
        Delete
      </button>
    </li>
  );
};

export default SingleComment;
