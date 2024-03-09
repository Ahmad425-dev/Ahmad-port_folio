import Image from "next/image"
import Link from "next/link"

const Portfolio = () => {


  return (
    <>
    <div className=' flex h-full w-full justify-center items-center      ' >
    <div className=" w-full h-full relative bg-cover ">
    <Image src="/back.jpg" fill alt="" className=' bg-cover w-full block m-auto' sizes="100vw" ></Image>
<div className=
  "w-full h-full gap-3 top-0 left-0 absolute flex items-center flex-col justify-center text-yellow-400 font-bold  "
  ><h1 className=" text-7xl font-bold font-mono ">MY WORK</h1>
  <div className="p-3 bg-white  text-black rounded-full ring-2">
  <a className="" href="https://ahmad-port-foliow.vercel.app/">Click here</a>
  </div>
  </div>

</div>   </div>
  </>
  )
}

export default Portfolio