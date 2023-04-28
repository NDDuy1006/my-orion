
import  { configureStore,ThunkAction, Action,combineReducers } from '@reduxjs/toolkit';
import initSlice from './reducer/initSlice';


const rootReducer = combineReducers({
    initReducer: initSlice
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>;
export type AppThunk<ReturnType = void > = ThunkAction <
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

