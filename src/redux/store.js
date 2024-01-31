import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/moviesSlice";
import movieDetailSlice from "./slices/movieDetailSlice";
export const store = configureStore({
  reducer: {
    movieReducer: movieSlice,
    movieDetailReducer: movieDetailSlice,
  },
});
