import React from "react";
import { List, Typography, ListItem } from "@mui/material";

const styles = {
  specialCharachtersTypography: {
    textAlign: "center",
    fontWeight: "bolder",
    backgroundColor: "#786766",
    color: "#fff",
  },
};

const specialCharacters = " @ _ ! # $ % ^ & * ( ) < > ? / | } { ~ : ";

export const passTooltipText = (
  <List>
    <Typography sx={{ fontWeight: "bolder" }}>
      Password requirements:
    </Typography>
    <ListItem disablePadding>
      * Password must be at least 8 characters.
    </ListItem>
    <ListItem disablePadding>
      * Password must contain at least one uppercase letter, one lowercase
      letter and one number.
    </ListItem>
    <ListItem disablePadding>
      * Password must contain at least one special character.
    </ListItem>
    <Typography sx={styles.specialCharachtersTypography}>
      {specialCharacters}
    </Typography>
    <ListItem disablePadding>
      * Password cannot be too similar to your email address.
    </ListItem>
    <ListItem disablePadding>
      * Password cannot be a commonly used password.
    </ListItem>
    <ListItem disablePadding>* Password cannot be entirely numeric.</ListItem>
  </List>
);
