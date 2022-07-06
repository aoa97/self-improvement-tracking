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
        date: "2022-7-6",
        completed: true,
      },
      {
        id: 2,
        title: "Second goal",
        date: "2022-7-7",
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
