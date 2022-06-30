export const selectBooksInfo = (state) => ({
  status: state.books.status,
  error: state.books.error,
  qty: state.books.list,
});

export const selectBooks = (state) => state.books.list;

export const selectFilteredBooks = (state, { search, type }) => {
  console.log(state?.books.list, "state");
  return state?.books.list.items?.filter((book) => {
    if (type === "") {
      return book;
    } else if (type !== "" && book.volumeInfo.categories?.includes(type)) {
      return book;
    }
  });
};
