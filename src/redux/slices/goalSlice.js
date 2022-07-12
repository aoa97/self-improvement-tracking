import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    goalList: [
      {
        id: 1,
        title: "First goal at family and friends",
        description:
          "This is the first goal. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        date: "2022-07-10",
        completed: true,
        groups: ["Family", "Friends"]
      },
      {
        id: 2,
        title: "Second goal at work",
        date: "2022-07-23",
        description:
          "This is the second goal. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        completed: false,
        groups: ["Work"]
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
    toggleCompleteGoal: (state, action) => {
      const id = action.payload;
      const item = state.goalList.find((x) => x.id === id);
      item.completed = !item.completed;
    },
  },
});

export const addgoal = goalSlice.actions.addgoal;
export const toggleCompleteGoal = goalSlice.actions.toggleCompleteGoal;
export default goalSlice.reducer;
