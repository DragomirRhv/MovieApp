import React, { useContext } from "react";
import { Box } from "@mui/material";
import AppBarComponent from "../../components/Container/AppBarComponent/AppBarComponent";
import SearchBar from "../../components/Container/SearchBar/SearchBar";
import ShowsContext from "../../context/Shows/showsContext";
import DashboardPageLoadingSkeleton from "./DashboardPageLoadingSkeleton";
import MovieCard from "./MovieCard/MovieCard";
import NoImage from "../../assets/images/no-image/no-image.jpeg";

const styles = {
  cardGridContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
  },
};

export default function DashboardPage() {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <AppBarComponent>
      <SearchBar />
      <Box sx={{ margin: "2rem auto" }}>
        {loading ? (
          <DashboardPageLoadingSkeleton />
        ) : (
          <Box sx={styles.cardGridContainer}>
            {shows.map((show) => (
              <MovieCard
                key={show.show.id}
                image={show.show.image ? show.show.image.medium : NoImage}
                name={show.show.name}
                rating={
                  show.show.rating.average
                    ? show.show.rating.average
                    : "No rating available"
                }
                id={show.show.id}
              />
            ))}
          </Box>
        )}
      </Box>
    </AppBarComponent>
  );
}
