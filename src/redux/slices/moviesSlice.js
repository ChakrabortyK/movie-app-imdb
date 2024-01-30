import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../common/APIs/API_KEY";
import movieApi from "../../common/APIs/movieApi";

export const fetchMovies = createAsyncThunk(
  "movieSlice/fetchMovies",
  async () => {
    const movieSearchText = "harry";
    const response = await movieApi
      .get(`?apiKey=${API_KEY}&s=${movieSearchText}`)
      .catch((e) => console.log(e));
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: {},
  },
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, () => {
      console.log("Pending...");
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, () => {
      console.log("Rejected...");
    });
  },
});

// export const getAllMovies = (state) => state.movieReducer.movies;
// console.log(getAllMovies);
export default movieSlice.reducer;
export const { addMovies } = movieSlice.actions;
