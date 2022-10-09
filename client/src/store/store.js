import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "../services/userAPI.js";
import {teamApi} from "../services/teamAPI.js";
import {taskApi} from "../services/taskAPI.js";


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    userApi.middleware,
    teamApi.middleware,
    taskApi.middleware,
  ),
});

setupListeners(store.dispatch)
