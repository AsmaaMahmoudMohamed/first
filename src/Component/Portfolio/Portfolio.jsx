import React from 'react';
import oneone from "../../img/poert1.png";
import tow from "../../img/port2.png";
import three from "../../img/port3.png";
import style from "./portfolio.module.css"


export default function Portfolio() {
  return (
   <>
 <div className="container-fluid">
<h1 className='text-black'> portfolio component</h1>

<div className='d-flex  justify-content-center gap-2 position-relative '>   
<div className='h-25 w-25 border-1 border-white me-4 mt-2 gap-4 position-absolute boutton-0 end-50 bg-black'> </div>
<div>  <i className="fa-solid fa-star fs-4 text-black "></i></div>
<div className='w-25 h-25 bg-black border-1 border-white ms-4 gap-4 mt-2 position-absolute boutton-0 start-50'></div>

 </div>
 </div>

<div className="container-fluid">

  <div className={`///////   d-flex gap-3  `}>

    <div className={ ` captionone position-relative    overflow-hidden   ${style.item}  `}>

   
    <div className = {`${style.mypro}  `} >

            <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
          </div> 
          <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#one">
<img src={oneone} className='w-100' alt="home" />


</button>


<div className="modal fade" id="one" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body">
      <img src={oneone} className='w-100' alt="home" />
      </div>
    
    </div>
  </div>
</div>
    


    </div>

    <div className='captiontow'>
 <div className={`position-relative    overflow-hidden     ${style.item}    `}> 

   
<div className = {`${style.mypro}`} >
        <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
      </div> 
      <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#tow">
<img src={tow} className='w-100' alt="home" />


</button>


<div className="modal fade" id="tow" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  
  <div className="modal-body">
  <img src={tow} className='w-100' alt="home" />
  </div>

</div>
</div>
</div>



</div>

    </div>

    <div className={`  captionthree position-relative    overflow-hidden   ${style.item}     `}>

   
<div className = {`${style.mypro}`} >
        <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
      </div> 
      <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#three">
<img src={three} className='w-100' alt="home" />


</button>


<div className="modal fade" id="three" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  
  <div className="modal-body">
  <img src={three} className='w-100' alt="home" />
  </div>

</div>
</div>
</div>
</div>
  </div>
</div>
<div className="container-fluid">

  <div className={`///////   d-flex gap-3  `}>

    <div className={ ` captionone position-relative    overflow-hidden   ${style.item}  `}>

   
    <div className = {`${style.mypro}  `} >

            <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
          </div> 
          <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#one">
<img src={oneone} className='w-100' alt="home" />


</button>


<div className="modal fade" id="one" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body">
      <img src={oneone} className='w-100' alt="home" />
      </div>
    
    </div>
  </div>
</div>
    


    </div>

    <div className='captiontow'>
 <div className={`position-relative    overflow-hidden     ${style.item}    `}> 

   
<div className = {`${style.mypro}`} >
        <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
      </div> 
      <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#tow">
<img src={tow} className='w-100' alt="home" />


</button>


<div className="modal fade" id="tow" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  
  <div className="modal-body">
  <img src={tow} className='w-100' alt="home" />
  </div>

</div>
</div>
</div>



</div>

    </div>

    <div className={`  captionthree position-relative    overflow-hidden   ${style.item}     `}>

   
<div className = {`${style.mypro}`} >
        <span className= {`${ style.myspan }  mt-4 gap-5`}><i className  ="fa-regular fa-square-plus mt-4 "></i></span>
      </div> 
      <button type="button" className="btn btn-tranformy" data-bs-toggle="modal" data-bs-target="#three">
<img src={three} className='w-100' alt="home" />


</button>


<div className="modal fade" id="three" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  
  <div className="modal-body">
  <img src={three} className='w-100' alt="home" />
  </div>

</div>
</div>
</div>
</div>
  </div>
</div>

   </>
  )
}
