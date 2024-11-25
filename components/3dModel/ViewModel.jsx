"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, } from "react";
import { Center, Environment, Float, OrbitControls, } from "@react-three/drei";
import { OpjectModel } from './OpjectModel'

export default function ViewModel() {
  return (
    <div className='h-screen w-full'>
    <Canvas 
 
    >
      <Suspense fallback={null}>
        <Center>
          <Float
            speed={1}
            rotationIntensity={0}
            floatIntensity={2}
            floatSpeed={2}
          >
            <OpjectModel />
          </Float>
          <OrbitControls  
       enableZoom={false}
          />
          <Environment files="/hdr/field.hdr" intensity={2} />
        </Center>
      </Suspense>
    </Canvas>
  </div>
  )
}
