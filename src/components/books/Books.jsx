import { useEffect } from "react";
import { loadBooks } from "../../store/books/books-actions";
import {
  selectBooks,
  selectBooksInfo,
  selectFilteredBooks,
} from "../../store/books/books-selectors";
import "./books.css";
import { useDispatch, useSelector } from "react-redux";
import Book from "./book/Book";
import {
  selectSearch,
  selectSort,
  selectType,
} from "../../store/controls/controls-selectors";

function Books() {
  const dispatch = useDispatch();

  const { status, error, qty } = useSelector(selectBooksInfo);
  const bookName = useSelector(selectSearch);
  const type = useSelector(selectType);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);
  const books = useSelector((state) =>
    selectFilteredBooks(state, { search, type, sort })
  );
  console.log(books, "books", type);
  useEffect(() => {
    if (bookName) {
      dispatch(loadBooks(bookName));
    } else {
      dispatch(loadBooks());
    }
  }, [bookName, sort, type]);

  return (
    <main>
      <h1>Books</h1>
      <section className="books">
        {status === "loading" && <h2>Loading...</h2>}
        {status === "received" &&
          books?.map((item, index) => {
            return <Book key={item.id} {...item.volumeInfo} />;
          })}
      </section>
    </main>
  );
}

export default Books;
