import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const  User = () => {
    const{name,company}=useSelector((state)=>{
        console.log(state);
        return state
    })
    //initialze the dispatch
    const dispatch=useDispatch()

    //update the age value 
    const updateName=(name)=>{
        //action to dispatch use useDispatch hooks and after gose to the reducer
        dispatch({type:'UPDATE_NAME',payload:name})
    }
    const updateCompany=(company)=>{
        //action to dispatch use useDispatch hooks and after gose to the reducer
        dispatch({type:'UPDATE_COMPANY',payload:company})
    }
  return (
    <div>

        <h1>NAME:{name}</h1>
        <h1>COMPANY:{company}</h1>

        <button onClick={()=>updateName("DIPJOY") }>UPDATE NAME</button>
        <button onClick={()=>updateCompany("WIPRO")}>UPDATE COMPANY</button>

    </div>
  )
}

export default User