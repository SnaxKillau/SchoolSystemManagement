import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

function Post_Public() {

   const [show , setShow]= useState(true)
   const data = [
    {
        "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
        "title": "I found at stem",
        "username":"scofield",
        "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
    },
    {
        "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
        "title": "I found at stem",
        "username":"scofield",
        "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
    },
    {
        "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
        "title": "I found at stem",
        "username":"scofield",
        "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
    },
    {
        "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
        "title": "I found at stem",
        "username":"scofield",
        "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
    }
   ]
  
  return (
   <div>
        {
          show ? <div className='mt-10 ml-5 sm:ml-20'>
          <h1 className=' underline font-inter text-[#52586B]'>Public Post</h1>
          
          
          <div className = "grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4" >
          {
              data.map((e)=> {
                return(
                  <div className=' w-9/12 mt-5 shadow-2xl'>
                    <Link to = '/Report'>
                       <img src={e.img} className = ' w-screen h-2/4'></img>
                       <h1>Hello</h1>
                    </Link>
                    </div>
                  
                )
              })
          }
          </div>
      </div>:<Loading></Loading>
        }

   </div>
  )

}

export default Post_Public