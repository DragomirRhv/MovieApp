import React from "react";
import { styled } from "@mui/material/styles";
import { Button, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontSize: "2rem",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  minHeight: "4.25rem",
}));

const CustomSubmitButton = ({ text, isLoading, style, disabled }) => {
  return (
    <CustomButton
      type="submit"
      fullWidth
      variant="contained"
      sx={style}
      disabled={disabled}
    >
      {isLoading ? (
        <CircularProgress size={36} style={{ color: "#fff" }} />
      ) : (
        text
      )}
    </CustomButton>
  );
};

export default CustomSubmitButton;

CustomSubmitButton.propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};
