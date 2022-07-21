import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CardMovie from "../components/CardMovie";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=971a0e2078b81d441758dda6b2a43f00"
        );
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <>
      <Box sx={{ paddingTop: "5em" }}>
        <Typography
          variant="h5"
          sx={{ marginLeft: "4em", marginBottom: "1em" }}
        >
          Trending
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })}
        </div>
      </Box>
    </>
  );
};

export default ListMovies;
