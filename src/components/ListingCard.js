import React, { useState } from "react";

function ListingCard({ singleListing, onDelete }) {
  const { description, image, location, id } = singleListing;
  const [star, setStar] = useState(true);

  function handleClick() {
    setStar((star) => !star);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {star ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
