import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setType } from "../../store/controls/controls-actions";
import {
  selectSearch,
  selectType,
} from "../../store/controls/controls-selectors";
function Filter() {
  const [book, setBook] = useState({
    searcInput: "",
    type: "all",
    sort: "relevance",
  });

  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const type = useSelector(selectType);

  const options = [
    { value: "", label: "all" },
    { value: "Fiction", label: "Fiction" },
    { value: "Biography", label: "biography" },
    { value: "Computers", label: "computers" },
    { value: "History", label: "history" },
    { value: "Medical", label: "medical" },
    { value: "drama", label: "drama" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearch(book.searcInput));
  };

  const handleChangeInput = (e) => {
    setBook({
      ...book,
      type: e.target.value,
    });

    dispatch(setSearch(e.target.value));
  };

  const handleChangeType = (e) => {
    dispatch(setType(e.target.value));
  };

  return (
    <div onSubmit={(e) => handleSubmit(e)}>
      <h1>SEarch the book</h1>
      <form>
        <input
          value={search}
          onChange={(e) => handleChangeInput(e)}
          type="text"
          placeholder="name of the book"
        />
        <select
          name=""
          id=""
          value={type}
          onChange={(e) => handleChangeType(e)}
        >
          {options.map((item, index) => {
            return (
              <option value={item.value} label={item.label} key={index}>
                {item.value}
              </option>
            );
          })}
        </select>
        <select
          name=""
          id=""
          value={book.sort}
          onChange={(e) =>
            setBook({
              ...book,
              sort: e.target.value,
            })
          }
        >
          <option value="relevance" label="relevance">
            Relevance
          </option>
          <option value="newest" label="newest">
            Newest
          </option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Filter;
