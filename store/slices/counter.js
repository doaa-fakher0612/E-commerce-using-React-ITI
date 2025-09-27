import {createSlice} from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: 'counter',
    initialState : { // القيم المبدئية عامة
        counterVal :0,
        maxCounterVal : 200
    }, 
    reducers :{ //  الخاصة ب سلايس الكاونتر
        increaseCounter : (state, action)=>{  // s = current value , ac = changing value
            state.counterVal = action.payload
        }, 
        reeduceCounter : (state, action) =>{
            state.counterVal = action.payload
        },
        resetCounter : (state) =>{
            state.counterVal = 0
        }
    }


})


// to be useed in componnet to change value
export const {increaseCounter,reeduceCounter,resetCounter} = counterSlice.actions;

// to be used in store reducer
export default counterSlice.reducer