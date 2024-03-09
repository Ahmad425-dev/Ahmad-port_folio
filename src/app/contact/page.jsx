"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm("service_ksslchl" , "template_xs2m24s" , form.current, {
        publicKey:"BaXrCq0d-xvuL_TQT" ,
      })
      .then(
        () => {
        
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
        
          setError(true);
        },
      );
  };
const [success, setSuccess] = useState(false)
const [error, setError] = useState(false)  

const [text , settextAr] = useState ();
const [email , setEmail] = useState ();
const [vaildErorr, setvalidErorr] = useState (false);
{/*email sending process*/}
const handelText = (e) =>{
let name = e.target.value;
if(name.length < 10){
setvalidErorr(true)
}
else{
  setvalidErorr(false)
}
}

  return<> 
    <div className=' h-full flex overflow-scroll    flex-col lg:flex-row  px-4 sm:px-18 md:px-12 lg:px-20 xl:px-30'>
{/*first div */}
<div className=' h-1/3 flex items-center justify-center lg:h-full lg:w-1/2'>
  <div className='text-2xl  font-sans  md:text-4xl font-bold'>
    Lets Talk About Anything
    
  </div>
</div>
{/*first div */}
<form  ref={form} onSubmit={sendEmail} className=' h-2/3    overflow-scroll md:h-full sm:h-1/2     lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-3 justify-center p-24     '>
<label className=''>Dear Ahmad!</label>
  
<textarea placeholder='write here'  name='user_message' onChange={handelText} value={text}  rows={5} required={""} className=' pb-6 bg-transparent border-b-2  border-b-black outline-none ' />
  {vaildErorr && <span>write letter more then 10 word</span>}
  <label>Email Address</label>
  <input name='user_email' type='email'  value={email} required  className='bg-transparent border-b-2  border-b-black outline-none'/>
  <label>Regards</label>
  <button type='submit' onSubmit={sendEmail} className='p-4 bg-black text-white rounded-full'>Send</button>
{success && <span className=' text-green-600'>Sent success fully </span> }
{error && <span className=' text-red-700'>something went wrong </span> } 

</form>
    </div>
  
  </>
}

export default Contact