import { configureStore } from "@reduxjs/toolkit";

import focusReducer from "./slices/focusSlice";
import groupsReducer from "./slices/groupsSlice";
import challengeReducer from "./slices/challengeSlice";
import goalReducer from "./slices/goalSlice";
import thoughtReducer from "./slices/thoughtSlice";
import visionReducer from "./slices/visionSlice";

const store = configureStore({
  reducer: {
    groups: groupsReducer,
    focus: focusReducer,
    challenge: challengeReducer,
    goal: goalReducer,
    thought: thoughtReducer,
    vision: visionReducer,
  },
});

export default store;
