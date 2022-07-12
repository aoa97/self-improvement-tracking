import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groupList: ["Family", "Work", "Friends"],
  },
});

export default groupsSlice.reducer;
