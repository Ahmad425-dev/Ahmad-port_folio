import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className=' h-full overflow-scroll w-screen flex-row'>
    <div className=' mb-5 gap-5 max-screen  flex flex-col items-center  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30'>

{/*picture */}

   <div className=' rounded-full  mt-18 pt-2 md:justify-center'> 
    <a  href="/">
    <Image src="/ahmadd.jpg" height={106} width={206} alt="" className='h-106  w-206 rounded-full ring-4 object-none ring-fuchsia-50 object-[40%_-4px]' ></Image>
     </a>
   </div>


{/*social app */}
<div className="  gap-4  md:hidden lg:hidden flex flex-row ">
  <Link href="https://github.com/Ahmad425-dev">
<Image src="/github.png" alt="" height={24} width={24} ></Image>
  </Link>
  <Link  href="https://www.facebook.com/ahmadraza72789/">
<Image src="/facebook.png" alt="" height={24} width={24} ></Image>
  </Link>
  <Link  href="https://www.instagram.com/ahmad_raza_381">
<Image src="/instagram.png" alt="" height={24} width={24} ></Image>
  </Link>
  <a  href="https://www.linkedin.com/in/ahmad-raza-749577254/">
<Image src="/linkedin.png" alt="" height={24} width={24} ></Image>
  </a>
</div>
{/*intro */}

<div className=' '> 
<div className=' pt-5   gap-4 '>
<h3 className=' font-light'>Ahmad Raza</h3>
  <h1 className=' font-bold'>I am a MERN Stack Developer  </h1>
  <p className=' it '>Have a look at my Github, skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee.</p>
</div>


{/*picture */}

<div className='gap-6'>
 <h1 className=' font-bold text-2xl pt-4'>Skills</h1>
 <div className='flex gap-3 flex-wrap'>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >HTML</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >CSS</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >BOOTSRAP</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >Tailwind</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >JAVA SCRIPT ES6</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >REACT</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >NEXT</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >MONGODB</div>
 <div className=' p-2 bg-black text-white rounded hover:bg-white hover:text-black' >MYSQL</div>

</div>
 </div>
                    
</div>
    </div>
    </div>
  )
}

export default About