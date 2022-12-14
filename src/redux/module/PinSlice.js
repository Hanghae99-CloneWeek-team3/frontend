import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instanceJSon from '../../shared/Request';
import { useCookies } from 'react-cookie';


const initialState = {
  pins: [], // /api/posts/all
  pin: {
    // /api/posts/{postId}
    postId: 1,
    title: '',
    content: '',
    userName: '',
    uniqueName: '',
    userId: '',
    profileimage: '',
    filePath: '',
  },
  isLoading: false,
  error: null,
};

// GET api/posts/all : 민주
export const __getPins = createAsyncThunk(
  'pin/getPins',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceJSon.get('/api/posts');      
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// GET api/posts/{postId}
export const __getPin = createAsyncThunk(
  'pin/getPin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceJSon.get(`/api/posts/${payload}`);
      if (!data.success) throw new Error(data.error)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// PUT api/posts/{postId}
export const __putPin = createAsyncThunk(
  'pin/putPin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceJSon.put(`/api/posts/${payload.postId}`, {
        title: payload.title,
        content: payload.content
      })
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// DELETE api/posts/{postId}
export const __deletePin = createAsyncThunk(
  'pin/deletePin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceJSon.delete(`/api/posts/${payload.postId}`)
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// POST api/posts
export const __writePin = createAsyncThunk(
  'pin/writePin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://week3-board.herokuapp.com/posts',
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const pinSlice = createSlice({
  name: 'pin',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // getPins
    [__getPins.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPins.fulfilled]: (state, action) => {
      state.pins = action.payload;
      state.isLoading = false;
    },
    [__getPins.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // getPin
    [__getPin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPin.fulfilled]: (state, action) => {
      state.pin = action.payload;
      state.isLoading = false;
    },
    [__getPin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // putPin
    [__putPin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__putPin.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__putPin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // deletePin
    [__deletePin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePin.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deletePin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // writePin
    [__writePin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__writePin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__writePin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pinSlice.reducer;
