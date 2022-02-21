import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();

  return <orbitControls args={[camera, gl.domElement]} />;
};

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.01;

    // ref.current.position.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export const DiceWrapper = () => {
  return (
    <Canvas camera={{ position: [3, 3, 8] }}>
      <ambientLight intensity={0.2} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Box position={[-5, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      <mesh position={[5, 0, 0]}>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <axesHelper scale={5} />
      <Orbit />
    </Canvas>
  );
};
