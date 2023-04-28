import requesterAxios from "@/clientApi/requester";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface initSliceType {
    data: any
}

const initialState: initSliceType = {
    data: undefined
};


/** demo create async thungk */
export const getAllDataDemo = createAsyncThunk(
    'initSlice',
    async (keyWord: string, thunkAPI) => {
        const data = await requesterAxios.getAll(keyWord);

        thunkAPI.abort()

        return data
    }
)



export const initSlice = createSlice({
    name: 'initSlice',
    initialState,
    reducers:{ 
        /***** handle blocking func here *****/
    },

    extraReducers: (builder) => {
        /** handle non-blocking func here */
    }

})


export const { 
    /** export blocking func */
} = initSlice.actions;

export default initSlice.reducer;
