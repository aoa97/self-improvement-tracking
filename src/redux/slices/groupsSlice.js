import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groupList: [
      {
        id: 0,
        title: "All",
        active: true,
      },
      {
        id: 1,
        title: "Family",
        active: false,
      },
      {
        id: 1,
        title: "Work",
        active: false,
      },
      {
        id: 1,
        title: "Friends",
        active: false,
      },
    ],
  },
});

export default groupsSlice.reducer;
