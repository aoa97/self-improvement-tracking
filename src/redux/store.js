import { configureStore } from "@reduxjs/toolkit";

import focusReducer from "./slices/focusSlice";
import groupsReducer from "./slices/groupsSlice";
import challengeReducer from "./slices/challengeSlice";
import goalReducer from "./slices/goalSlice";

const store = configureStore({
  reducer: {
    groups: groupsReducer,
    focus: focusReducer,
    challenge: challengeReducer,
    goal: goalReducer,
  },
});

export default store;
