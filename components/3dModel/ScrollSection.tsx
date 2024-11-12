import React from 'react'
import ViewModel from './ViewModel'
import { AiFillFacebook, AiFillTikTok, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'

export default function ScrollSection() {
  return (
    <section className='relative z-10 flex flex-col items-center justify-center py-16 md:py-20 '>
     <div className='sticky top-0 z-30 h-[50vh] w-full pointer-events-none'><ViewModel/></div>
 
    <div className='container flex flex-col items-center justify-center'>
       {/* 1 */}
    <div className='first-section absolute h-[50vh] flex flex-col items-center justify-center top-0'>
     <div className='lg:text-[55px] text-[35px] font-bold text-gray-400 uppercase'>
      youtube 
     </div>   
     <div className='lg:text-[18px] text-[16px] text-center font-bold text-gray-400 uppercase w-[500px] px-5'>
     Subscribe to my YouTube channel for in-depth tutorials and project showcases. Find detailed guides on my work and applications, plus interact through comments to get answers and engage with the educational content. 
     </div> 
     <Link href='/' className='flex gap-3 mt-4 text-white bg-gray-600 px-6 py-3 rounded-2xl'>
     <AiFillYoutube size={25}/>
      Go
      </Link>   
    </div>  
     {/* 2 */}
     <div className='second-section h-[50vh] flex flex-col items-center justify-center'>
     <div className='lg:text-[55px] text-[35px] font-bold text-gray-400 uppercase'>
      tiktok 
     </div> 
     <div className='lg:text-[18px] text-[16px] text-center font-bold text-gray-400 uppercase w-[500px]'>
     Catch quick tutorials and valuable tips on my TikTok! Don’t miss out on my step-by-step demos in a fun, engaging style. Follow me to stay updated on all the latest content. 
     </div> 
     <Link href='/' className='flex gap-3 mt-4 text-white bg-gray-600 px-6 py-3 rounded-2xl'>
     <AiFillTikTok size={25}/>
      Go
      </Link>   
      </div>  
    {/* 3 */}
    <div className='third-section h-[50vh] flex flex-col items-center justify-center'>
    <div className='lg:text-[55px] text-[35px] font-bold text-gray-400 uppercase'>
      facebook 
     </div> 
     <div className='lg:text-[18px] text-[16px] text-center font-bold text-gray-400 uppercase w-[500px]'>
     Follow my Facebook page to see my latest work and exclusive tutorials. Connect with me directly to ask questions and join a supportive community for continuous updates. 
     </div> 
     <Link href='/' className='flex gap-3 mt-4 text-white bg-gray-600 px-6 py-3 rounded-2xl'>
     <AiFillFacebook size={25}/>
      Go
      </Link>   
    </div>  
    </div>
    </section>
  )
}
