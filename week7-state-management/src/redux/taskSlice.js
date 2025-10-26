import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTaskRedux: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTaskRedux } = taskSlice.actions;
export default taskSlice.reducer;
