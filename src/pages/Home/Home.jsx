import React from "react";
import Books from "../../components/books/Books";
import Filter from "../../components/filter/Filter";

function Home() {
  return (
    <div>
      <Filter />
      <Books />
    </div>
  );
}

export default Home;
