import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  Backdrop,
  Box,
  Typography,
  Link,
  Button,
} from "@mui/material";
import ShowsContext from "../../context/Shows/showsContext";
import { useLocation } from "react-router-dom";
import NoImage from "../../assets/images/no-image/no-image.jpeg";
import PropTypes from "prop-types";
import AppBarComponent from "../../components/Container/AppBarComponent/AppBarComponent";

const styles = {
  backToDashboardButton: {
    backgroundColor: "primary.main",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#423838",
    },
  },
};

export default function SingleShowPage() {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    getSingleShow(id);
  }, []);

  const returnToDashboardHandler = () => {
    navigate(-1);
  };

  const removeHTMLtags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <AppBarComponent>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Box>
          <img
            src={singleShow.image ? singleShow.image.medium : NoImage}
            alt={singleShow.name}
          />
          <Box>
            <Typography variant="h3">{singleShow.name}</Typography>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <Typography
                  variant="h5"
                  key={genre}
                  style={{ display: "inline-block" }}
                >
                  {genre}
                </Typography>
              ))}
            <Typography variant="subtitle1">
              Status: {singleShow.status && singleShow.status}
            </Typography>
            <Typography variant="subtitle1">
              Official Site:{" "}
              {singleShow.officialSite ? (
                <Link
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </Link>
              ) : (
                "No Official Site"
              )}
            </Typography>
            <Typography variant="subtitle1">
              Rating:{" "}
              {singleShow.rating?.average
                ? singleShow.rating.average
                : "No rating available"}
            </Typography>
            <Typography sx={{ marginBottom: "2rem" }}>
              {singleShow.summary && removeHTMLtags(singleShow.summary)}
            </Typography>
            <Button
              sx={styles.backToDashboardButton}
              variant="outlined"
              onClick={returnToDashboardHandler}
            >
              Return to Dashboard
            </Button>
          </Box>
        </Box>
      )}
    </AppBarComponent>
  );
}

SingleShowPage.propTypes = {
  showId: PropTypes.string,
};
