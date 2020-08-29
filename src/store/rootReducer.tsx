import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

import { projectListStateKey, projectListReducer } from "./projects";

export type RootState = StateType<typeof rootReducer>;

export const rootReducer = combineReducers({
  [projectListStateKey]: projectListReducer,
});
