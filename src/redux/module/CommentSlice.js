import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instanceJSon from '../../shared/Request';

const initialState = {
  comments: {
    0: {
      comment: {},
      numberRecomments: 0,
      recomments: [
      ]
    }
  },
  comment: {

  },
  isLoading: false,
  numberComments: 0,
  error: null,
};

export const __getComments = createAsyncThunk(
  'comment/getComments',
  async (payload, thunkAPI) => {
    try {
      const comments = await instanceJSon.get(`/api/comments/${payload.postId}?size=20&page=0`);
      const { data } = await instanceJSon.get(`/api/comments/${payload.postId}?size=20&page=${payload.page}`);

      let obj = {};
      const result = await Promise.all(
        data.data.map(async (comment) => {
          const totalRecomments = await instanceJSon.get(`/api/comments/${payload.postId}?size=20&page=0&keyword=comment&commentId=${comment.commentId}`)
          const recomments = await instanceJSon.get(`/api/comments/${payload.postId}?size=20&page=0&keyword=comment&commentId=${comment.commentId}`)
          obj[comment.commentId] = {
            comment: comment,
            recomments: recomments.data.data,
            numberRecomments: totalRecomments.data.data.length
          }
        })
      )
      return thunkAPI.fulfillWithValue(obj);

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __getComment = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue();
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __getRecomment = createAsyncThunk(
  'comment/getRecomment',
  async (payload, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue();
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __writeComment = createAsyncThunk(
  'comment/writeComment',
  async (payload, thunkAPI) => {
    try {
      const data = await instanceJSon.post(`/api/comments`, payload)
      const { data: newComment } = await instanceJSon.get(`api/comments/find/${data.data.data.data}`);
      return thunkAPI.fulfillWithValue(newComment.data[0]);
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __writeRecomment = createAsyncThunk(
  'comment/writeRecomment',
  async (payload, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue();
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __putComment = createAsyncThunk(
  'comment/putComment',
  async (payload, thunkAPI) => {
    try {
      await instanceJSon.put(`/api/comments/${payload.commentId}`, payload.contents);
      const { data } = await instanceJSon.get(`/api/comments/find/${payload.commentId}`);
      return thunkAPI.fulfillWithValue(data.data[0]);
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __deleteComment = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue();
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
)

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__writeComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__writeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = {
        ...state.comments,
        [action.payload.commentId]: {
          comment: action.payload,
          numberRecomments: 0,
          recomments: []
        }
      }
    },
    [__writeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__putComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__putComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__putComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default commentSlice.reducer;