import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    info: [],
    isLoading: false,
    error: null,
  };

  export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async (userid) => {
      const res = await axios('http://localhost:3015/user/anotherUserProfile', { params: { id: userid } })
      const data = await res.data.Data
      return data
    }
  )

  const infoSlice = createSlice({
    name: 'infoData',
    initialState,
  
    extraReducers: (builder) => {
        builder
          .addCase(fetchContent.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.info.push(action.payload);
          })
          .addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      }

  });
  

  export default infoSlice.reducer;


