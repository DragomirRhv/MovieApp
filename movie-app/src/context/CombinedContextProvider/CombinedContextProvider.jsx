import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackBarProvider } from "../SnackbarContext/SnackbarContext";
import PropTypes from "prop-types";
import ShowsState from "../Shows/ShowsState";

const CombinedContextProvider = ({ children }) => {
  const reactQueryClient = new QueryClient();

  return (
    <SnackBarProvider>
      <ShowsState>
        <QueryClientProvider client={reactQueryClient}>
          {children}
        </QueryClientProvider>
      </ShowsState>
    </SnackBarProvider>
  );
};

export default CombinedContextProvider;

CombinedContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
