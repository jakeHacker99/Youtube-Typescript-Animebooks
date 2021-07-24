import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    animeList: [],

}

const HomepageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
    }
})

export default HomepageSlice.reducer