import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    goalList: [
      {
        id: 1,
        createdAt: "2022-07-05",
        date: "2022-07-20",
        groups: ["Family"],
        completed: false,
        description:
          "A new goal at Family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 2,
        createdAt: "2022-07-10",
        date: "2022-07-30",
        groups: ["Friends"],
        completed: false,
        description:
          "A new goal at Friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 3,
        createdAt: "2022-07-10",
        date: "2022-07-31",
        groups: ["Family", "Friends"],
        completed: false,
        description:
          "A new goal at Family and Friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
    ],
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
