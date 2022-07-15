import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    goalList: [],
  },
  reducers: {
    addgoal: (state, action) => {
      const goal = {
        id: Math.ceil(Math.random() * 500 + new Date().getTime()),
        createdAt: new Date().toISOString(),
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
