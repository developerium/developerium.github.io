import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Canvas,
  useFrame,
  useThree,
  useLoader,
  extend,
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three';
import woodTexture from './assets/bright-wood-texture.jpg';

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

  const texture = useLoader(TextureLoader, woodTexture);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}

export const DiceWrapper = () => {
  return (
    <Canvas
      camera={{ position: [3, 5, 20] }}
      style={{ backgroundColor: 'black' }}
      shadows
    >
      <Floor />

      <ambientLight intensity={0.2} />
      <LightBulb />

      <Suspense fallback={null}>
        <Box position={[-5, 2, 0]} />
      </Suspense>

      <Suspense fallback={null}>
        <Box position={[1.2, 4, 0]} />
      </Suspense>

      <mesh position={[5, 2, 4]} castShadow>
        <sphereBufferGeometry args={[0.5]} />
        <meshPhysicalMaterial color="hotpink" />
      </mesh>

      <axesHelper scale={5} />
      <Orbit />
    </Canvas>
  );
};
