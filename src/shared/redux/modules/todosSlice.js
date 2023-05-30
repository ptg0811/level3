// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  todo: {},
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodoDetail = createAsyncThunk(
  "todos/getTodoDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodo = createAsyncThunk(
  "todos/postTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateIsDoneTodo = createAsyncThunk(
  "todos/updateIsDoneTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editTodo = createAsyncThunk(
  "todos/editTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchComment = createAsyncThunk(
  "todos/patchComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "todos/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodos: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    deleteComment: (state, action) => {
      state.todo.comments = action.payload.comments;
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getTodoDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodoDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
      state.todo.comments = action.payload.comments.sort((a, b) => b.id - a.id);
    },
    [__getTodoDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [...state.todos, action.payload];
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateIsDoneTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateIsDoneTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    [__updateIsDoneTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__editTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    [__editTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__patchComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    [__patchComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteTodos, editTodos, deleteComment } = todosSlice.actions;

export default todosSlice.reducer;
