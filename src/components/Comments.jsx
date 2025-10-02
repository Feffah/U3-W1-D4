import SingleComment from "./SingleComment";

// riceve l'array dei commenti e li mostra uno ad uno

const Comments = ({ comments, onDelete }) => ( // onDelete è la funzione che viene passata da CommentArea per aggiornare la lista dopo delete
  <ul className="list-unstyled mt-2">
    {comments.map((c) => (
      <SingleComment key={c._id} comment={c} onDelete={onDelete} />
    ))}
  </ul>
);

export default Comments;
