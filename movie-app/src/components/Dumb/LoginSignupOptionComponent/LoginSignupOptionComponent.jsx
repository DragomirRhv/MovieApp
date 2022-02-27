import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const styles = {
  registerAndResetContainer: {
    marginTop: "2rem",
  },
  accountTypography: {
    color: "text.primary",
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
    },
    textAlign: {
      xs: "center",
      sm: "right",
    },
  },
};

const LoginSignupOptionComponent = ({
  firstParagraph,
  firstLink,
  firstLinkTitle,
}) => {
  return (
    <>
      <Box sx={styles.registerAndResetContainer}>
        <Typography sx={styles.accountTypography}>
          {firstParagraph}&ensp;
          <Link
            to={firstLink}
            style={{ textDecoration: "none", color: "#000" }}
          >
            {firstLinkTitle}
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginSignupOptionComponent;

LoginSignupOptionComponent.propTypes = {
  firstParagraph: PropTypes.string,
  firstLink: PropTypes.string,
  firstLinkTitle: PropTypes.string,
};
