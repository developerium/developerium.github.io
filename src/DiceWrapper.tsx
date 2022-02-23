import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();

  return <orbitControls args={[camera, gl.domElement]} />;
};

const Floor = () => {
  return (
    <mesh receiveShadow>
      <boxBufferGeometry args={[20, 0.1, 20]} />
      <meshPhysicalMaterial color={'green'} />
    </mesh>
  );
};

const LightBulb = () => {
  return (
    <mesh position={[0, 7, 0]}>
      <pointLight color="white" intensity={2} castShadow />
      <sphereBufferGeometry args={[0.5]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export const DiceWrapper = () => {
  return (
    <Canvas
      camera={{ position: [3, 5, 20], fov: 60 }}
      style={{ backgroundColor: 'black' }}
      shadows
    >
      <Floor />

      <ambientLight intensity={0.2} />
      <LightBulb />

      <Box position={[-5, 2, 0]} />
      <Box position={[1.2, 4, 0]} />

      <mesh position={[5, 2, 4]} castShadow>
        <sphereBufferGeometry args={[0.5]} />
        <meshPhysicalMaterial color="hotpink" />
      </mesh>

      <axesHelper scale={5} />
      <Orbit />
    </Canvas>
  );
};
