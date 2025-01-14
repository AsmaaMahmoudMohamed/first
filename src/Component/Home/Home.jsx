import React from 'react';
import person from "../../img/img.png";
import style from "./home.module.css";
import "../../App.css";





export default function Home() {
  return (
    <>
   

<body className= " myhome">   
<div  className='container-fluid  w-100 '>
    <div className='w-25 text-center m-auto'>
       <img   src={person} className='w-50 rounded-circle'  alt='man'/>
       </div>
       <div className="container    ">
 <h1 className='text-white text-center'> start Framework</h1>
 <div className='d-flex  justify-content-center gap-2 position-relative '>   
 <div className='h-25 w-25 border-1 border-white me-4 mt-2 gap-4 position-absolute boutton-0 end-50 bg-white'> </div>
 <div>  <i className="fa-solid fa-star fs-4 text-white "></i></div>
 <div className='w-25 h-25 bg-white border-1 border-white ms-4 gap-4 mt-2 position-absolute boutton-0 start-50'></div>
 
     </div>
     <p className='text-white text-center'> Graphic Artist - Web Designer - Illustrator</p>
     </div>
    


  </div>
  </body>


    </>
   
  )
}
