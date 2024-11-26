"use client";
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import {  useControls } from "leva";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export function OpjectModel(props) {
  const { nodes, materials } = useGLTF('/xbox_elite_controller.glb')
  const {camera,scene}= useThree();
  const tl=gsap.timeline();
  // const {cameraPosition,scenePosition,sceneRotation} =useControls({
  //   cameraPosition:{
  //     value:{
  //      x:0,
  //      y:0,
  //      z:30,
  //     },
  //     step:0.05,
  //   },
  //   scenePosition:{
  //     value:{
  //       x:0,
  //       y:0,
  //       z:0,
  //      },
  //      step:0.05,
  //   },
  //   sceneRotation:{
  //     value:{
  //       x:0,
  //       y:0,
  //       z:0,
  //      },
  //      step:0.05,
  //   }
  // });

    useGSAP(()=>{


      tl.to(
      camera.position,
      {
        x:0,
        y:0,
        z:45.00,
      },
    ).to(
      scene.position,
      {
        x:0,
        y:6.30,
        z:0,
      }
    ).to(
      scene.rotation,
      {
        x:0,
        y:6.30,
        z:0,
        duration:2
      }
    )
    .to(
      ".opject",
      {
        opacity:0,
        duration:2
      }
    )
    ;
    },[]);

    //     useFrame(()=>{
    //   //camera
    //   camera.position.x=cameraPosition.x;
    //   camera.position.y=cameraPosition.y;
    //   camera.position.z=cameraPosition.z;
    //    //scene position
    //    scene.position.x=scenePosition.x;
    //    scene.position.y=scenePosition.y;
    //    scene.position.z=scenePosition.z;
    //    //scene Rotation
    //    scene.rotation.x=sceneRotation.x;
    //    scene.rotation.y=sceneRotation.y;
    //    scene.rotation.z=sceneRotation.z;
    // });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[-2.011, -1.043, 2.152]}
        rotation={[-0.268, -0.033, 0.008]}
        scale={100.706}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[-3.94, 1.498, 1.328]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002_glass_0.geometry}
        material={materials.glass}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[0, 3.353, -0.822]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[-2.014, -1.853, 0.857]}
        rotation={[-0.432, -0.042, 0.007]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[3.104, 1.312, 1.164]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text_Material001_0.geometry}
        material={materials['Material.001']}
        position={[2.425, 1.45, 1.453]}
        rotation={[-0.428, 0, 0]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001_Material001_0.geometry}
        material={materials['Material.001']}
        position={[3.595, 2.428, 1.007]}
        rotation={[-0.428, 0, 0]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002_Material001_0.geometry}
        material={materials['Material.001']}
        position={[4.633, 1.302, 1.105]}
        rotation={[-0.502, 0.37, 0.027]}
        scale={0.896}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003_Material001_0.geometry}
        material={materials['Material.001']}
        position={[3.574, 0.438, 1.914]}
        rotation={[-0.428, 0, 0]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[-0.006, -0.298, 0.078]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_TT_checker_1024x1024_UV_GRID_0.geometry}
        material={materials.TT_checker_1024x1024_UV_GRID}
        position={[1.98, -0.796, 2.259]}
        rotation={[-0.299, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011_TT_checker_1024x1024_UV_GRID001_0.geometry}
        material={materials['TT_checker_1024x1024_UV_GRID.001']}
        position={[-0.006, -0.297, 0.08]}
        rotation={[-0.428, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/xbox_elite_controller.glb')

