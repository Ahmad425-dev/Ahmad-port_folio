"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./navlink";
import { motion } from "framer-motion"

const ListVariants = {
  closed: { x:"100vw"},
  open: { x:0 },
};
{/*top -button */}
const topVareint1={
  closed:{
    rotate:0
  },
  open:{
    rotate:0,
    backgroundColor:"rgb(255,255,255)"
  },
}
const topVareint2={
  closed:{
   rotate:0
  },
  open:{
    rotate:0,
    backgroundColor:"rgb(255,255,255)"
  },
}
const topVareint3={
  closed:{
    rotate:0
  },
  open:{
    rotate:0,
    backgroundColor:"rgb(255,255,255)"
  },
}

const links = [
  {url:"/" ,title:"Home"},
  {url:"/about" ,title:"About"},
  {url:"/portfolio" ,title:"Portfolio"},
  {url:"/contact" ,title:"Contact"}

];

const Navbar = () => {
const [open,setOpen] = useState(false)  
  return (
    <div className='h-full flex items-center justify-between 
     px-4 overflow-none sm:px-18 md:px-12 lg:px-20 xl:px-30
    '>
    <div className=" hidden md:flex gap-7"> 
    {links.map((item) =>{
            return<>

           <Navlink link={item} key={item.title}/>
            </> })}
    </div>
    {/*logo*/}
       <div className="md:flex  lg:flex  justify-center">
       <a src="/" className='text-sm  bg-black rounded-md p-1 flex items-center justify-center'>
       <span className='text-white mr-1'>Ahmad</span>
           <span className='w-12 h-9 rounded text-black bg-white flex items-center justify-center' >dev</span>
       </a>
          
</div>
{/*nav icon  */}

<div className=" hidden md:flex gap-4  ">
  <Link  href="https://github.com/Ahmad425-dev">
<Image src="/github.png" alt="" height={24} width={24} ></Image>
  </Link>
  <Link  href="https://www.facebook.com/ahmadraza72789/">
<Image src="/facebook.png" alt="" height={24} width={24} ></Image>
  </Link>
  <Link  href="https://www.instagram.com/ahmad_raza_381">
<Image src="/instagram.png" alt="" height={24} width={24} ></Image>
  </Link>
  
  <a  href="https://www.linkedin.com/in/ahmad-raza-749577254/">
<Image src="/linkedin.png" alt="" height={24} width={24} ></Image></a>
  
</div>
        {/*Responsive menu*/}
       <div className="md:hidden pr-3">
      
        <button  className='w-10  h-6 flex flex-col justify-between z-50 relative'  onClick={() => setOpen((previous) => (!previous) )}>
     <motion.div variants={topVareint1} animate={open ? "open" : "closed"} className='w-10 h-1 rounded flex  justify-between origin-top-left bg-black'></motion.div>
     <motion.div variants={topVareint2} animate={open ? "open" : "closed"} className='w-10 h-1 rounded flex  justify-between bg-black'></motion.div>
     <motion.div variants={topVareint3} animate={open ? "open" : "closed"} className='w-10 h-1 rounded flex  justify-between origin-top-left bg-black'></motion.div>

        </button>
        {/* menu list */}
{open && ( 
        <motion.div variants={ListVariants} animate="open" initial="closed"  className='absolute z-10 top-0 left-0 w-screen h-screen bg-black  text-white flex flex-col items-center container text-2xl justify-center gap-8  '>
  
          {links.map((item) =>{
            return<>
            <Link href={item.url} key={item.title}> {item.title} </Link>
            </> })}
           
            
        </motion.div>
        ) }
       </div>
    </div>
  )
}

export default Navbar;