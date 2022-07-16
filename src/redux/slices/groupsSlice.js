import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groupList: ["Family", "Friends"],
  },
  reducers: {
    addGroup: (state, action) => {
      state.groupList.push(action.payload);
    },
  },
});

export const addGroup = groupsSlice.actions.addGroup;
export default groupsSlice.reducer;
