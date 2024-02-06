import React from 'react'
import contactCss from './contact.module.css';

export default function Contact() {
  return <>
  
  <div >
    <h2 className='text-center fs-1 fw-bold p-5'>CONATCT SECTION</h2>
  </div>
  <div className="container w-50 ">
  <form className='pb-5'>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Name</label>
    <input type="text" className="form-control"     />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Age </label>
    <input type="number" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className={contactCss.send + ' text-white p-2 rounded-3'}>Send Message</button>
</form>
  </div>
  
  </>
}
