//it is a function and it access state and action 
import {createReducer} from '@reduxjs/toolkit'

const initialState={
    name:"pritam",
    age:"26",
    status:"Programmer",
    city:"kolkata",
    phone:"9933935760",
    company:"IBM"
  }
// usin reducer 
// export default(state=initialState,action)=>{
//     if(action.type==='UPDATE_AGE'){
//         return {
//             ...state,
//             age:action.payload
//         } 
//     }
//     if(action.type==='UPDATE_PHONE'){
//         return {
//             ...state,
//             phone:action.payload
//         } 
//     }
//     return state
// }

// use toolkit

export default createReducer(initialState,(builder)=>{

    builder.addCase('UPDATE_AGE',(state,action)=>{
        state.age=action.payload
    })
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name=action.payload
    })
    builder.addCase('UPDATE_CITY',(state,action)=>{
        state.city=action.payload
    })
    builder.addCase('UPDATE_PHONE',(state,action)=>{
        state.phone=action.payload
    })
    builder.addCase('UPDATE_COMPANY',(state,action)=>{
        state.company=action.payload
    })
})