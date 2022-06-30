import "./book.css";
function Book({ title, description, imageLinks }) {
  return (
    <div className="book">
      <img src={imageLinks?.thumbnail} alt="" />
      <h2 className="book-name">{title}</h2>
      <p className="book-description">{description?.slice(0, 100)}...</p>
    </div>
  );
}

export default Book;
