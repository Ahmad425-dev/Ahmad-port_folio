"use client"
import Image from "next/image";
const Homepage = () => {
  return <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
{/*image section */}
{/*<div className=" h-1/2 ">
<Image src="/hero.png"  alt="" fill   className=" object-contain"></Image>
</div> */}
{/*text section */}
<div className="h-full items-center flex flex-col justify-center gap-8 ">
  <h1 className=" text-4xl font-sans  pa md:text-4xl font-bold">Crafting Digital Experiences, Designing Tomorrow</h1>
  <p className="md:text-xl">i am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
  <div className=" w-full md:justify-center lg:justify-center flex"> 
  
  <button href="/contact" className=" p-2 md:p-4 rounded-full ring-1 bg-black text-white" ><a href="./contact">Contact me</a></button>
  </div>
</div>




  </div>;
};

export default Homepage;
