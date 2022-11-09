import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const getMovies = createAsyncThunk("detail/getMovies", async (id) => {
  const dataMovies = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  // const dataVideo = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

  return dataMovies.data;
  // return dataVideo.data.results[0].key;

  //   setMovies(dataMovies.data);
  //   setVideos(dataVideo.data.results[0].key);
});

export const getVideos = createAsyncThunk("detail/getVideos", async (id) => {
  const dataVideos = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

  return dataVideos.data.results[0].key;
});

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    movies: [],
    videos: [],
  },
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      //   state.test = ["asdsa"];
    },
    [getVideos.fulfilled]: (state, { payload }) => {
      state.videos = payload;
      //   state.test = ["asdsa"];
    },
  },
});

export default detailSlice.reducer;
