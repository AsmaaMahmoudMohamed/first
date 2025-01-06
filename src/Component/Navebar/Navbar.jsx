import React from 'react';
import { Link, NavLink } from 'react-router-dom';






export default function Navbar() {
  return (
    <>
     <div className='bg-dark  p-1 fixed-top d-flex justify-content-between py-1 fs-5 '>

<div  className=' list-unstyled  '> 
<ul > 
 <li  > <Link className='text-decoration-none text-white'   to=''>Start Framework</Link></li> <ul/>
      </ul>
    </div>
 
 
 <div className=' d-flex  list-unstyled   gap-4 '>
 <li> <NavLink className='text-decoration-none text-white'  to='about'>About</NavLink></li>
 <li> <NavLink className='text-decoration-none text-white'  to='portfolio'>portfolio</NavLink></li>
 <li> <NavLink className='text-decoration-none text-white'  to='contact'>Contact</NavLink></li>
 </div>
 


</div>
    </>
  )
}
