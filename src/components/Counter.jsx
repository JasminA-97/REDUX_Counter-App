import React from 'react'

const Counter = () => {
  return (
    <div>
       <h1 className='text-center'>Counter App</h1> 
       <div style={{width:'600px'}} className='border p-5 rounded-5 mt-5'>
        <h1 style={{fontSize:'80px'}} className='text-center'>100</h1>
        <div className="d-flex justify-content-around mt-3 align-items-center w-100">
            <button className='btn btn-warning'>DECREMENT</button>
            <button className='btn btn-danger'>RESET</button>
            <button className='btn btn-success'>INCREMENT</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5 w-100">
            <input type="text" className="form-control" placeholder='Incremented Counter Amount' />
            <button className="btn btn-primary ms-4">INCREMENT BY AMOUNT</button>
        </div>
       </div>
    </div>
  )
}

export default Counter