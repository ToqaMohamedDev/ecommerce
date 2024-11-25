'use client'
import ViewModel from '../3dModel/ViewModel';
import { preLoaderAnim } from './loader';
import './PreLoader.css'
import { useGSAP } from '@gsap/react'

export default function PreLoader() {
    useGSAP(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className='preloader gap-[5px] bg-background overflow-hidden
    text-[14px] sm:gap-[10px] relative sm:text-[18px] lg:text-[20px]'>
            <div className='w-full h-full absolute top-0 opject'>
            <ViewModel/>
            </div>
            <div className='texts-container w-500 flex h-60 items-center
     justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold
     opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>
                <span>
                    BUILD
                </span>
                <span>
                    YOUR
                </span>
                <span>
                    PC
                </span>
                <div className='sub hidden'>
                    asdasdas
                </div>
            </div>
        </div>
    )
}
