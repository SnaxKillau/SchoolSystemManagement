import React from 'react'
import user from './image/user.png'
function Users() {
  return (
    <div className=' w-screen flex items-center justify-center content-center h-screen '>
      

     <div className=' bg-[#F0F8FF] backdrop-blur-lg  rounded-xl drop-shadow-lg h-10/12 w-10/12 flex flex-col space-y-3 justify-center items-center'>
      <h1 className=' text-3xl mb-6 text-center font-Spectral'>Admin and Users  Menagement</h1>
      <input className=' w-6/12 h-1/12 border-[2px] border-[#632A7A] rounded-full text-center' type = "number" placeholder='Search User and Admin by their ID'></input>
      <button className=' w-3/12 h-10  border-[2px] border-[#632A7A] rounded-xl font-semibold'>Admin</button>
      <button className=' w-3/12 h-10  border-[2px] border-[#632A7A] rounded-xl font-semibold'>User</button>
      <button className=' w-3/12 h-10  border-[2px] border-[#632A7A] rounded-xl font-semibold'>Show All</button>
      <button className=' w-3/12 h-10  border-[2px] border-[#632A7A] rounded-xl font-semibold'>Create Admin</button>
      
      
   

     
     </div>



    </div>
  )
}

export default Users