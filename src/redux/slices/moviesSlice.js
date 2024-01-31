import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../common/APIs/API_KEY";
import movieApi from "../../common/APIs/movieApi";

export const fetchMovies = createAsyncThunk(
  "movieSlice/fetchMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${API_KEY}&s=${term}`)
      .catch((e) => console.log(e));
    // console.log("hit");
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, () => {
      // console.log("Pending...");
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      // console.log("Added movies");
    });
    builder.addCase(fetchMovies.rejected, () => {
      // console.log("Rejected...");
    });
  },
});

export default movieSlice.reducer;
// export const { addMovies } = movieSlice.actions;
