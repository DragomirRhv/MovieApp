import React, { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import ShowsContext from "../../../context/Shows/showsContext";
import { useSnackBar } from "../../../context/SnackbarContext/SnackbarContext";

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "flex-end",
    },
  },
  searchbar: {
    padding: "2rem",
    boxShadow: 2,
    borderRadius: "4px",
    minWidth: {
      xs: "auto",
      sm: "30rem",
    },
  },
  searchTextField: {
    marginRight: "2rem",
    maxWidth: "20rem",
  },
  searchButton: {
    color: "#fff",
    fontWeight: "bolder",
    backgroundColor: "primary.main",
    "&:hover": {
      backgroundColor: "#423838",
    },
  },
};

export default function SearchBar() {
  const [searchedTvShow, setSearchedTvShow] = useState("");
  const { searchTVShows } = useContext(ShowsContext);
  const { showSnackBar } = useSnackBar();

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (!searchedTvShow) {
      showSnackBar({
        text: "Haha, please enter something!",
        type: "error",
        hideDuration: 6000,
      });
    } else {
      searchTVShows(searchedTvShow);
      setSearchedTvShow("");
    }
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.searchbar}>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            fullWidth
            type="text"
            placeholder="Search For TV Show/Movie"
            value={searchedTvShow}
            onChange={(e) => setSearchedTvShow(e.target.value)}
            sx={styles.searchTextField}
          />
          <Button
            variant="outlined"
            sx={styles.searchButton}
            onClick={onSearchHandler}
          >
            Search
          </Button>
        </form>
      </Box>
    </Box>
  );
}
