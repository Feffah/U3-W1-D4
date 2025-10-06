const SingleComment = ({ comment, onDelete }) => { // fa vedere un singolo commento con il pulsante Delete
  const deleteComment = async () => {
    try { // richiesta di delete al server
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODlhNDk2MDFiZjAwMTViNGE3NTUiLCJpYXQiOjE3NTk3NTczNzgsImV4cCI6MTc2MDk2Njk3OH0.pa92VpPqyb0WkDJqKbWSZ_VvJoRxbAaBta15ylkFijY" },
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
