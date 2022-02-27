import { useReducer } from "react";
import { searchShows, getOneShow } from "../../api/MovieAppCalls/MovieAppCall";
import ShowsContex from "./showsContext";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  REMOVE_SINGLE_SHOW,
} from "../types";

import React from "react";

export default function showStates({ children }) {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [showsState, dispatchShowsState] = useReducer(
    ShowsReducer,
    initialState
  );

  const searchTVShows = async (searchedShow) => {
    dispatchShowsState({ type: SET_LOADING });

    const { data } = await searchShows(searchedShow);

    dispatchShowsState({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatchShowsState({
      type: SET_LOADING,
    });

    const { data } = await getOneShow(id);

    console.log(data);

    dispatchShowsState({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const removeSingleShow = () => {
    dispatch({
      type: REMOVE_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContex.Provider
      value={{
        shows: showsState.shows,
        singleShow: showsState.singleShow,
        loading: showsState.loading,
        searchTVShows,
        getSingleShow,
        removeSingleShow,
      }}
    >
      {children}
    </ShowsContex.Provider>
  );
}
