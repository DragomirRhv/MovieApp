import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import PropTypes from "prop-types";

const CustomizedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(204, 204, 204, 0.9)",
    color: "#000",
    border: "1px solid #594c4b",
    boxShadow: theme.shadows[6],
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: 300,
  },
}));

const CustomToolTip = ({ children, tooltipText, placement }) => {
  return (
    <CustomizedTooltip placement={placement} title={tooltipText}>
      {children}
    </CustomizedTooltip>
  );
};

export default CustomToolTip;

CustomToolTip.propTypes = {
  placement: PropTypes.string,
  tooltipText: PropTypes.node || PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
