import React, { useState } from 'react'
import Report_information from './Report_information'


function Reportpage() {
    const [show , Setshow] = useState(true)
  return (
    <div>
      <div className='mt-10'>
        {
            show ? 
           <div>
             <div  className='flex justify-between pt-3'>
            <button className='border-solid border-black w-2/4 h-15 pt-3 text-center border-t-2 '>
              Ask for Informations
            </button>
            <button className='border-2 border-solid border-black w-2/4 pt-3 text-center bg-[#52586B] text-white' onClick={() => {Setshow(false)}}>
              Report
            </button >
            </div> 
         
           </div>

            :
             <div>
             <div className='flex justify-between pt-3'>
             <button  className='border-solid border-black w-2/4 h-15 pt-3 text-center border-2 bg-[#52586B] text-white' onClick={() => {Setshow(true)}}>
             Ask for Informations
             </button>
             <button className='border-t-2 border-solid border-black w-2/4 pt-3 text-center text-black'>
             Report 
             </button>
             </div>
             
                 
             </div>
            
           
           
            
        }

      </div>
    


    </div>
  )
}

export default Reportpage