import React from "react";
import { Grid, Skeleton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const styles = {
  gridSkeleton: {
    marginBottom: "3rem",
  },
};

const DashboardPageLoadingSkeleton = () => {
  const theme = useTheme();
  const matchesMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid>
      {matchesMediumScreen ? (
        <>
          <Grid sx={styles.gridSkeleton}>
            <Skeleton variant="rectangular" height={588} />
          </Grid>
          <Grid>
            <Skeleton variant="rectangular" height={588} width="50%" />
          </Grid>
        </>
      ) : (
        <>
          <Grid sx={styles.gridSkeleton}>
            <Skeleton variant="rectangular" height={300} />
          </Grid>
          <Grid sx={styles.gridSkeleton}>
            <Skeleton variant="rectangular" height={588} />
          </Grid>
          <Grid>
            <Skeleton variant="rectangular" height={588} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default DashboardPageLoadingSkeleton;
