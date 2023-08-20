import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Articles({ articles }) {
  const [show, setShow] = useState(true);
  const [favorite, setFavorite] = useState(false);

  const ratingStyles = {
    color:
      articles.rating >= 9
        ? "darkGoldenrod"
        : articles.rating >= 8
        ? "green"
        : "red",
    fontWeight: "bold",
  };

  const likeDeleteEdit = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div className="article-container">
      <img
        className="article-poster"
        src={articles.urlToImage}
        alt={articles.name}
      />
      <div className="article-N-btn-p">
        <div className="article-N-btn">
          <h2 className="article-name">{articles.title}</h2>
          <IconButton
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <ExpandLessIcon className="article-toggle" />
            ) : (
              <ExpandMoreIcon className="article-toggle" />
            )}
          </IconButton>

          {/* Heart ICON */}

          <p className="article-rating" style={ratingStyles}>
            <IconButton
              color={favorite ? "error" : ""}
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </p>
        </div>

        <IconButton color="primary">
          <a href={articles.url} target="_blank">
            <InfoIcon className="article-info" />
          </a>
        </IconButton>
      </div>
      {show ? <p className="article-summary">{articles.description}</p> : ""}
      <div style={likeDeleteEdit}>
        <div></div>
      </div>
    </div>
  );
}
