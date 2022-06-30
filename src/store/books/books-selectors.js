export const selectBooksInfo = (state) => ({
  status: state.books.status,
  error: state.books.error,
  qty: state.books.list,
});

export const selectBooks = (state) => state.books.list;

export const selectFilteredBooks = (state, { search, type, sort }) => {
  console.log(state?.books.list, "state");

  if (sort === "relevance" && type === "") {
    return state.books.list.items;
  }

  if (sort === "newest" && type === "") {
    return state?.books.list.items?.sort(
      (a, b) =>
        new Date(b.volumeInfo.publishedDate) -
        new Date(a.volumeInfo.publishedDate)
    );
  }

  if (sort === "relevance" && type !== "") {
    return state?.books.list.items?.filter((book) => {
      if (type === "") {
        return book;
      } else if (type !== "" && book.volumeInfo.categories?.includes(type)) {
        return book;
      }
    });
  } else if (sort === "newest" && type !== "") {
    state?.books.list.items?.sort(
      (a, b) =>
        new Date(b.volumeInfo.publishedDate) -
        new Date(a.volumeInfo.publishedDate)
    );

    return state?.books.list.items?.filter((book) => {
      if (type === "") {
        return book;
      } else if (type !== "" && book.volumeInfo.categories?.includes(type)) {
        return book;
      }
    });
  }
};
