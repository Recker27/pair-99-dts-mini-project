import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const CardMovie = ({ movie }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: "280px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="gambar"
          ></CardMedia>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardMovie;
