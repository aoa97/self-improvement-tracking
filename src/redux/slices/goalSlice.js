import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    goalList: [
      {
        id: 1,
        title: "First goal",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        date: "7 days (test)",
        completed: true,
      },
      {
        id: 2,
        title: "Second goal",
        date: "7 days (test)",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        completed: false,
      },
    ],
  },
  reducers: {
    addgoal: (state, action) => {
      const goal = {
        id: Math.ceil(Math.random() * 500 + new Date().getTime()),
        createdAt: new Date().toString(),
        completed: false,
        ...action.payload,
      };
      state.goalList.push(goal);
    },
  },
});

export const addgoal = goalSlice.actions.addgoal;
export default goalSlice.reducer;
