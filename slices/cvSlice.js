import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    selectedTemplate: null
}

export const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        setSelectedTemplate: (state, action) => {
            state.selectedTemplate = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedTemplate } = cvSlice.actions

export default cvSlice.reducer