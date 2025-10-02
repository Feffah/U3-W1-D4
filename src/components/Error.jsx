// Mostra un messaggio di errore se la fetch fallisce
const Error = () => (
  <div className="alert alert-danger mt-2">
    Ops! Pare che si sia verificato un errore durante il caricamento dei commenti, ci scusiamo per il disagio.
  </div>
);

export default Error;
