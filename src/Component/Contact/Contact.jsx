import React from 'react'

export default function Contact() {
  return (
   <>
   <div className="positon-relative">
   <div className=" w-100 position-absolute top-0 end-0 mt-4">
   <div className="container text-center  p-4 w-100 mt-2 end-0 start-0 ">
    <h1 className='text-black'> Conatct Section</h1>
</div>
    <div className='d-flex  justify-content-center gap-2 position-relative    '>   
 <div className='h-25 w-25 border-1 border-white me-4 mt-2 gap-4 position-absolute boutton-0 end-50 bg-black'> </div>
 <div>  <i className="fa-solid fa-star fs-4 text-black "></i></div>
 <div className='w-25 h-25 bg-black border-1 border-white ms-4 gap-4 mt-2 position-absolute boutton-0 start-50'></div>
 
     </div>
<div className='container mt-4 '>     
      <form className='w-100  '>
        <input  type="text" className="form-control border border-top-0 border border-end-0 border border-start-0  shadow-none my-4" id="exampleFormControlInput1" placeholder="User Name"/> 
        <input  type="nember" className="form-control border border-top-0 border border-end-0 border border-start-0 shadow-none  my-4" id="exampleFormControlInput1" placeholder="User Age"/> 
        <input  type="email" className="form-control border border-top-0 border border-end-0  border border-start-0  shadow-none my-4" id="exampleFormControlInput1" placeholder="User Email"/> 
        <input  type="nember" className="form-control border border-top-0 border border-end-0 border border-start-0 shadow-none   my-4" id="exampleFormControlInput1" placeholder="User Password"/>
        <button type="button" className="btn btn-success d-block ">Send Message</button> 
      
     
       
        
      </form>
      
    
      
      </div>

   </div>
       </div>
   
   </>
  )
}
