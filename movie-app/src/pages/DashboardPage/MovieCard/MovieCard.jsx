import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropType from "prop-types";

import classes from "./MovieCard.module.css";

const style = {
  card: {
    width: {
      xs: "90%",
      sm: "280px",
      lg: "300px",
    },
    display: "inline-block",
    marginBottom: "3rem",
    boxShadow: 2,
    margin: "1rem auto",
    "&:hover": {
      boxShadow: 7,
    },
  },
};

const MovieCard = ({ image, name, rating, id }) => {
  return (
    <Card sx={style.card}>
      <CardMedia component="img" height="400" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/singleshow/${id}`} className={classes["text-link"]}>
          Check full Info
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  image: PropType.string,
  name: PropType.string,
  rating: PropType.oneOfType([PropType.number, PropType.string]),
  id: PropType.number,
};
