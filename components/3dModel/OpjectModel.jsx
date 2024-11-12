"use client";
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leva, useControls } from "leva";
import { forwardRef, useRef,useEffect } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export function OpjectModel(props) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF('/gaming_pc_with_curved_monitor.glb')

  const {camera,scene}= useThree();
  const tl=gsap.timeline();
  const {cameraPosition,scenePosition,sceneRotation} =useControls({
    cameraPosition:{
      value:{
       x:0,
       y:0,
       z:5,
      },
      step:0.05,
    },
    scenePosition:{
      value:{
        x:0,
        y:0,
        z:0,
       },
       step:0.05,
    },
    sceneRotation:{
      value:{
        x:0,
        y:0,
        z:0,
       },
       step:0.05,
    }
  });

    useGSAP(()=>{
      gsap.set(camera.position,{
        x:-5.10,
        y:-6.45,
        z:12.20,
      });
      gsap.set(scene.rotation,{
        x:0,
        y:-0.85,
        z:0,
      });

      tl.to(
      camera.position,
      {
        x:3.15,
        y:-0.35,
        z:10.80,
        scrollTrigger:{
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      },
    ).to(
      scene.rotation,
      {
        x:0.10,
        y:1.10,
        scrollTrigger:{
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    ).to(
      camera.position,
      {
        x:-4.10,
        y:-2.45,
        z:12.20,
        scrollTrigger:{
          trigger: ".third-section",
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    ).to(
      scene.rotation,
      {
        x:0.35,
        y:5.50,
        z:0.20,
        scrollTrigger:{
          trigger: ".third-section",
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    );
         //camera
      console.log(camera.position.x);//0
      console.log(camera.position.y);//0
      console.log(camera.position.z);//5
      //scene
      console.log(scene.position.x);//0
      console.log(scene.position.y);//0
      console.log(scene.position.z);//0
      //scene
      console.log(scene.rotation.x);//0
      console.log(scene.rotation.y);//0
      console.log(scene.rotation.z);//0
    },[]);

        useFrame(()=>{
      //camera
      camera.position.x=cameraPosition.x;
      camera.position.y=cameraPosition.y;
      camera.position.z=cameraPosition.z;
       //scene position
       scene.position.x=scenePosition.x;
       scene.position.y=scenePosition.y;
       scene.position.z=scenePosition.z;
       //scene Rotation
       scene.rotation.x=sceneRotation.x;
       scene.rotation.y=sceneRotation.y;
       scene.rotation.z=sceneRotation.z;
    });
  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.LLIM_Table_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.LLIM_Table_Wood_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.LLIM_Table_Wood_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.MonitorPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.MonitorScreen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.buttons}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.casing}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.cover_gamingPC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.insides_gamingPC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.metal_gamingPC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.sensors}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.wheel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.casing_Gaming_Keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.casing_Gaming_Keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.casing_gamingPC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.casing_gamingPC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.plastic_gamingPC}
      />
    </group>
  </group>
  )
}

useGLTF.preload('/gaming_pc_with_curved_monitor.glb')



