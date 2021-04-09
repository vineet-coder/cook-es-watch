import { createContext, useContext, useReducer } from "react";
import { Data } from "../data/Data";

const ReducerContext = createContext();

export function ReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    history: [],
    watchLater: [],
    likedVideos: [],
    Data,
  });
  console.log(state);
  function reducer(state, value) {
    switch (value.type) {
      case "ADD_TO_HISTORY":
        return {
          ...state,
          history: [...state.history, value.payload],
        };
      case "DELETE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter((item, index) => index !== value.index),
        };
      case "CLEAR_HISTORY":
        return {
          ...state,
          history: [],
        };

      case "ADD_TO_WATCHLATER":
        return {
          ...state,
          watchLater: [...state.watchLater, value.payload],
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, watchlater: true }
              : { ...item }
          ),
        };
      case "DELETE_FROM_WATCHLATER":
        return {
          ...state,
          watchLater: state.watchLater.filter(
            (item) => item.id !== value.payload.id
          ),
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, watchlater: false }
              : { ...item }
          ),
        };

      case "LIKE":
        return {
          ...state,
          likedVideos: [...state.likedVideos, value.payload],
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, isLike: true }
              : { ...item }
          ),
        };
      case "UNLIKE":
        return {
          ...state,
          likedVideos: state.likedVideos.filter(
            (item) => item.id !== value.payload.id
          ),
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, isLike: false }
              : { ...item }
          ),
        };
      case "DISLIKE":
        return {
          ...state,
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, isDisLike: true }
              : { ...item }
          ),
        };
      case "UNDISLIKE":
        return {
          ...state,
          likedVideos: state.likedVideos.filter(
            (item) => item.id !== value.payload.id
          ),
          Data: state.Data.map((item) =>
            item.id === value.payload.id
              ? { ...item, isDisLike: false }
              : { ...item }
          ),
        };
      default:
        return console.log("heyyy");
    }
  }

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
}

export function useReduce() {
  return useContext(ReducerContext);
}