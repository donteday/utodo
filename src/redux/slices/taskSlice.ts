import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: [
      {
        done: true,
        content: 'git add'
      },
      {
        done: false,
        content: 'git commit'
      },
      {
        done: false,
        content: 'git push'
      },
    ]
  } as any,
  reducers: {
    create: (state, newTask) => {
      state.value = [...state.value, newTask.payload];
    },
    stateToggle: (state, index) => {
      state.value[index.payload].done = state.value[index.payload].done ? false : true;
    },
    deleteTask: (state, index) => {
      state.value = state.value.filter((e, i) => i !== index.payload);
    }
  }
})

export const { create, stateToggle, deleteTask } = taskSlice.actions

export default taskSlice.reducer