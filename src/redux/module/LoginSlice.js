import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instanceJSon from "../../shared/Request";

export const addUserThunk = createAsyncThunk(
    "ADD_USER",
    async (payload, thunkAPI) => {
      console.log(payload);
      try {
        const { data } = await instanceJSon.post("/api/users/signup", payload);
        //console.log(data.date);
        if (data.success === false) alert("중복된 이메일입니다.");
        return thunkAPI.fulfillWithValue(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

const initialState = { user: [], isLoading: false, error: null };

const LoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [addUserThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.push(action.payload);
    },
    [addUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

},
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;