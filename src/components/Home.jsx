import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const Home = () => {
    const{name,age,city,phone}=useSelector((state)=>{
        console.log(state);
        return state
    })
    const dispatch=useDispatch()

    const changePhone=(phone)=>{

        dispatch({type:'UPDATE_PHONE',payload:phone})
    }
    const changeCity=(city)=>{

        dispatch({type:'UPDATE_CITY',payload:city})
    }
  return (
    <div>
        <h1>This is a Home page</h1>
        <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My city is {city}</h1>
      <h1>My phone is {phone}</h1>


      <button onClick={()=>changePhone('8637000230')}>Update-Phone</button>
      <button onClick={()=>changeCity('Delhi')}>Update-City</button>
    </div>
  )
}
