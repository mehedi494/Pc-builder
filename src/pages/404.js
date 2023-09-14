import Image from "next/image";

import image from '../assets/404.jpg'
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound =()=>{
const router = useRouter()

  useEffect(()=>{
    setTimeout(()=>(router.push('/')
    ),4000)
  },[router])
    
return(
   <div>
     <div className="flex  items-center justify-center w-full">
<Image alt="" className=""  width={500} height={500}  src={image}></Image>

    </div>
    <h1 className="text-center font-bold text-xl text-blue-400">Page not found</h1>
   </div>
)
}

export default NotFound;