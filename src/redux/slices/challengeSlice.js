import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    challengeList: [
      {
        id: 1,
        createdAt: "2022-07-05",
        date: "2022-07-20",
        groups: ["Family"],
        completed: false,
        description:
          "A new challenge at Family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 2,
        createdAt: "2022-07-10",
        date: "2022-07-30",
        groups: ["Friends"],
        completed: false,
        description:
          "A new challenge at Friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 3,
        createdAt: "2022-07-10",
        date: "2022-07-31",
        groups: ["Family", "Friends"],
        completed: false,
        description:
          "A new challenge at Family and Friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
    ],
  },
  reducers: {
    addChallenge: (state, action) => {
      const challenge = {
        id: Math.ceil(Math.random() * 500 + new Date().getTime()),
        createdAt: new Date().toISOString(),
        completed: false,
        ...action.payload,
      };
      state.challengeList.push(challenge);
    },
    toggleCompleteChallenge: (state, action) => {
      const id = action.payload;
      const item = state.challengeList.find((x) => x.id === id);
      item.completed = !item.completed;
    },
  },
});

export const addChallenge = challengeSlice.actions.addChallenge;
export const toggleCompleteChallenge =
  challengeSlice.actions.toggleCompleteChallenge;
export default challengeSlice.reducer;
