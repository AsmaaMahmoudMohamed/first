import React from 'react'
import "../../App.css";
import style from "./about.module.css"

export default function About() {
  return (<>

  <div className="myhome">  
  <div className={`${style.myabout}`}>
 <h1 className='text-white'>About Component</h1>
 <div className='d-flex  justify-content-center gap-2 position-relative '>   
 <div className='h-25 w-25 border-1 border-white me-4 mt-2 gap-4 position-absolute boutton-0 end-50 bg-white'> </div>
 <div>  <i className="fa-solid fa-star fs-4 text-white "></i></div>
 <div className='w-25 h-25 bg-white border-1 border-white ms-4 gap-4 mt-2 position-absolute boutton-0 start-50'></div>
 
     </div>

     <div className='container d-flex px-4 my-3 text-white'>
        <div className='px-4'>
           {<p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization..</p>}
          
        </div>
        <div className='px-4   mx-4' >
           {<p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization..</p>}
          
        </div>

     </div>
 

    </div>
    </div>

  </>
    
  )
}
