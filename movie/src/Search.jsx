import React, { useContext, useState } from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  console.log(query);
  return (
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={null}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
