import React from 'react'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='flex justify-center mt-10 font-inter'>Sign in as USER</h1>
     
        {/* Sign in form for user */}
        <form className='bg-[#D9D9D9] drop-shadow-lg h-96 mt-2 p-10  w-3/4 sm:w-3/5'>
            <label className=' font-semibold ml-4'>Username:</label><br/>
            <input type="text" className='ml-4 mb-2 mt-2 w-11/12'></input><br/>
            <label className=' font-semibold ml-4 '>Password:</label><br/>
            <input type="password" className='ml-4 mb-2 mt-2 w-11/12'></input><br/>
            <label className=' font-semibold ml-4 '> Email verify:</label><br></br>
            <input type="text" className='ml-4 mb-2 mt-2 w-11/12'></input>
            <button id="button" type="submit" className=" ml-10 mt-1 w-8/12 h-1/5 shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg p-4 sm:w-3/6 sm:ml-32 md:ml-28 lg:w-2/5 lg:ml-52 xl:w-1/4 xl:ml-[300px]">Sign Up</button>
          
        </form>
        </div>
  )
}

export default Signup