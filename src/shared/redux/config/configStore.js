// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

import todos from "../modules/todosSlice";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;
