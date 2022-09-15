import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TotalSlice {
  value: number
}

const initialState: TotalSlice = {
  value: 0,
}

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { updateValue } = totalSlice.actions

export default totalSlice.reducer
