import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  function onDelete(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  const listingsSearchArray = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <Header searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <ListingsContainer listings={listingsSearchArray} onDelete={onDelete} />
    </div>
  );
}

export default App;
