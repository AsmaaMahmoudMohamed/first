import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='   bg-dark text-white container-fluid w-100 fixed-bottom '>  
  <div className='  d-flex   justify-content-center px-4  gap-4 mt-3'>
    <div className='px-4 mt-3'>
      <h3> LOCATION</h3>
      <p> 2215 John Daniel Drive </p>
      <span> Clark, MO 65243 </span>
    </div>
    <div className='px-4 mt-3'>
      <h3>AROUND THE WEB</h3>
      <ul className='d-flex gap-3 mt-2 list-unstyled ms-3'>
        <li><i className="fa-brands fa-facebook fs-6 border border-2 rounded-5  p-1 ms-3"></i> </li>
        <li><i className="fa-brands fa-twitter fs-6 border border-2 rounded-5 p-1 "></i>  </li>
        <li> <i className="fa-brands fa-linkedin-in fs-6 border border-2 rounded-5 p-1 "></i> </li>
        <li> <i className="fa-solid fa-globe fs-6  border border-2 rounded-5 p-1 "></i> </li>
      </ul>
    </div>
    <div  className='px-4 mt-3  '>
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed Bootstrap theme created </p>
      <span>by Route</span>
    </div>

  </div>
  <div className=' bg-black  '>
    <p className='text-center'>Copyright © Your Website 2021</p>
  </div>
  </div>
 
    
    
    
    </>
  )
}
