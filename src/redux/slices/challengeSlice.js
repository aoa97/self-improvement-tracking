import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    challengeList: [
      {
        id: 1,
        title: "First challenge",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        date: "7 days (test)",
        completed: true,
      },
      {
        id: 2,
        title: "Second challenge",
        date: "7 days (test)",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        completed: false,
      },
    ],
  },
  reducers: {
    addChallenge: (state, action) => {
      const challenge = {
        id: Math.ceil(Math.random() * 500 + new Date().getTime()),
        createdAt: new Date().toString(),
        completed: false,
        ...action.payload,
      };
      state.challengeList.push(challenge);
    },
  },
});

export const addChallenge = challengeSlice.actions.addChallenge;
export default challengeSlice.reducer;
