
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counter = () => {
    const dispatch = useDispatch ()
    const {count} = useSelector(state => state.counterReducer)
    const [amount,setAmount] = useState(0)
    const handleIncByAmt = () =>{
        if(amount){
            dispatch(incrementByAmount(Number(amount)))
        }else{
            alert('Enter a value')
        }
    }
  return (
    <div>
       <h1 className='text-center'>Counter App</h1> 
       <div style={{width:'600px'}} className='border p-5 rounded-5 mt-5'>
        <h1 style={{fontSize:'80px'}} className='text-center'>{count}</h1>
        <div className="d-flex justify-content-around mt-3 align-items-center w-100">
            <button onClick={()=>dispatch(decrement())}  className='btn btn-warning'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
            <button onClick={()=>dispatch(increment())}  className='btn btn-success'>INCREMENT</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5 w-100">
            <input onChange={e=>setAmount(e.target.value)}  type="text" className="form-control" placeholder='Incremented Counter Amount' />
            <button onClick={handleIncByAmt} className="btn btn-primary ms-4">INCREMENT BY AMOUNT</button>
        </div>
       </div>
    </div>
  )
}

export default Counter