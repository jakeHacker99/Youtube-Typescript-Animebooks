import { IHomepageState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";



const initialState: IHomepageState = {
    animePage: null,

}

const HomepageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setAnimePage(state, action) {
            state.animePage = action.payload
        }
    }
})


export const { setAnimePage } = HomepageSlice.actions
export default HomepageSlice.reducer