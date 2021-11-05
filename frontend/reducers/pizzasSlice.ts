import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getConfig from "next/config";
import {parseCookies} from 'nookies'
const { publicRuntimeConfig } = getConfig()

export const getPizzas: any = createAsyncThunk(
    'pizzas/getPizzas',
    async (_, { rejectWithValue }) => {
        const cookies = parseCookies()
        if(cookies.hasOwnProperty('jwt')) {
          try {
            const response = await fetch(`${publicRuntimeConfig.API_URL}/pizzas`, {
              headers: {
                Authorization: `Bearer ${cookies.jwt}`
              }
            })
            return await response.json()
          } catch (err) {
            return rejectWithValue(err.response.data)
          }
        }
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
