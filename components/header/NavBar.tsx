import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useUserStore from '@/lib/counterStore' // استيراد store

const dataNav=[
   
    {
      name:"تسجيل دخول",
      link:'/login'  
    },
    {
        name:"أنشاء حساب",
        link:'/registration'  
      },
      {
        name:"الصفحه الرئيسيه",
        link:'/'  
      },
]
export default function NavBar() {
    const path=usePathname(); 
    const { user } = useUserStore(); 

  return (
   <>
    {user?(<div  className='flex gap-x-4 items-center justify-end'>
      <div className=''>
      {`${user.firstname}  ${user.lastname} مرحبا `}
    </div>
    </div>):( <nav className= {`hidden xl:flex gap-x-4 items-center`}>{
        dataNav.map((link,index)=>{
            return <Link 
            href={link.link} 
            key={index} 
            className={`capitalize relative hover:text-primary transition-all`}>
            {link.link===path&&(<motion.span
             initial={{y:'-100%'}} 
            animate={{y:0}} 
            transition={{type:'tween'}} 
            layoutId="underline" 
            className={`absolute left-0 top-full h-[2px] bg-primary w-full`}/>)}   
            {link.name}
            </Link>
        })
    }</nav>)}
   </>
  )
}
