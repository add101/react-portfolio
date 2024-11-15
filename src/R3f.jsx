import React, { useRef } from 'react'; // Import React and useRef hook from 'react' library
import { Canvas, useFrame } from '@react-three/fiber';  // Import Canvas and useFrame from '@react-three/fiber' for 3D rendering
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls from '@react-three/drei' library
import { Html, Text } from '@react-three/drei';

const RotatingBox = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const R3f = ({ fullscreenRef, className }) => {
  return (
    <div ref={fullscreenRef} className={className} style={{ width: '100%', height: '100%' }}>
     
      <Canvas style={{ backgroundColor: '#0000FF00' }}>
        <Html>
          {/* <div style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.3)', padding: '5px', borderRadius: '15px' }}>
            Interactive
          </div> */}
        </Html>
        <ambientLight intensity={0.5} /> 
        <pointLight position={[1, -2, 2]} intensity={10} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} /> 
        <RotatingBox />
        <OrbitControls /> 
       
      </Canvas>
    </div>
  );
};

export default R3f;
