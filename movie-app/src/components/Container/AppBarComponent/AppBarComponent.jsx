import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material/";
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material/";
import MovieAppLogo from "../../../assets/images/logo/movie.png";

const styles = {
  appBar: {
    zIndex: "1201",
    background: "primary.main",
    boxShadow: 7,
    minHeight: "5rem",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    marginTop: "5rem",
  },
  childContainer: {
    padding: "1rem",
    margin: "2rem auto",
  },
};

const AppBarComponent = ({ children }) => {
  const theme = useTheme();
  const matchesDesktopScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login", { replace: true });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  const logoutText = matchesDesktopScreen && (
    <Typography
      sx={{
        textTransform: "uppercase",
        marginLeft: "0.5rem",
        fontWeight: "600",
        color: "#fff",
      }}
    >
      Logout
    </Typography>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            edge="start"
            sx={{ display: { sm: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={MovieAppLogo}
            alt="Movie App Logo"
            title="Movie Clapper"
            style={{ width: "100%", height: "auto", maxWidth: "4rem" }}
          />
          <IconButton
            aria-label="logout"
            edge="start"
            onClick={logoutHandler}
            sx={{
              borderRadius: "0rem",
              color: "#fff",
            }}
          >
            <ExitToAppIcon />
            {logoutText}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={styles.mainContainer}>
        <Box sx={styles.childContainer}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AppBarComponent;

AppBarComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
