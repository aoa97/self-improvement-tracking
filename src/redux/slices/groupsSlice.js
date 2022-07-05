import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groupList: ["Family", "Friends", "Work"],
  },
});

export default groupsSlice.reducer;
