import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getPizzas: any = createAsyncThunk(
    'pizzas/getPizzas',
    async () => {
        const response = await fetch('http://localhost:1337/pizzas')
        return await response.json()
    }
)

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        status: '',
        items: []
    },
    extraReducers: {
        [getPizzas.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.items = payload
        },
        [getPizzas.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getPizzas.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    },
    reducers: {}
})

export default pizzasSlice.reducer
