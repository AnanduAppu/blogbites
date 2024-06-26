import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  info: null, // Change from array to object
  blogs: [], // Add a field to store blogs
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (userid) => {

    const res = await axios('http://localhost:3015/user/anotherUserProfile', { params: { id: userid } });
    const data = res.data.Data;
    return data;
  }
);

export const fetchAnotherBlogs = createAsyncThunk(

  'content/fetchAnotherBlogs', // Use a different action type
  async (userid) => {
    console.log("hellow blogers")
    const res = await axios('http://localhost:3015/user/anotherUserBlogs', { params: { id: userid } });
    const data = res.data.Data;
    return data;
  }
);

const infoSlice = createSlice({
  name: 'infoData',
  initialState,
  extraReducers: (builder) => {
    builder
      // fetchContent reducers
      .addCase(fetchContent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload; // Update info field directly
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // fetchBlogs reducers
      .addCase(fetchAnotherBlogs .pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnotherBlogs .fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload; // Update blogs field
      })
      .addCase(fetchAnotherBlogs .rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default infoSlice.reducer;
