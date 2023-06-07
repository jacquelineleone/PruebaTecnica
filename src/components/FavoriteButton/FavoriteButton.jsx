import "./FavoriteButton.css";
import React, { useState, useEffect } from 'react';
//assets
import favorite from "../../assets/img/mobile/favorites/favorite.svg";
import emptyFavorite from "../../assets/img/mobile/favorites/favorite-border.svg";

const FavoriteButton = ({ bookId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(bookId));
  }, [bookId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== bookId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, bookId];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={toggleFavorite} className="favorite-button">
      {isFavorite ? <img src={favorite}/> : <img src={emptyFavorite}/>}
    </div>
  );
};

export default FavoriteButton;