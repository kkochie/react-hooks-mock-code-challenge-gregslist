import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((eachListing) => {
          return (
            <ListingCard
              key={eachListing.id}
              singleListing={eachListing}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
