import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    challengeList: [],
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
