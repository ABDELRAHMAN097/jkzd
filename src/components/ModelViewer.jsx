import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = () => {
  const gltf = useGLTF('../../public/image/modal/batman.glb')
  return <primitive object={gltf.scene} scale={1.5} />
}

const ModelViewer = () => {
  return (
    <Canvas className="w-full h-full bg-transparent flex justify-end items-end mt-32 border border-red-500">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={true} />
      <Model />
    </Canvas>
  )
}

export default ModelViewer;
