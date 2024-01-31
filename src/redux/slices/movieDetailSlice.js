import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../common/APIs/API_KEY";
import movieApi from "../../common/APIs/movieApi";

export const fetchMovieDetail = createAsyncThunk(
  "movieDetailSlice/fetchMovieDetail",
  async (imdbID) => {
    const response = await movieApi
      .get(`?apiKey=${API_KEY}&i=${imdbID}&plot=full`)
      .catch((e) => console.log(e));
    // console.log("hit");
    return response.data;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetailSlice",
  initialState: {
    movieDetails: {},
  },
  reducers: {
    cleanDetails: (state, action) => {
      state.movieDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.pending, () => {
      // console.log("Pending...");
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      // console.log("Added movies");
    });
    builder.addCase(fetchMovieDetail.rejected, () => {
      // console.log("Rejected...");
    });
  },
});

export default movieDetailSlice.reducer;
export const { cleanDetails } = movieDetailSlice.actions;
