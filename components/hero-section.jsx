"use client"
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";


const Box = ({ position, rotation }) => {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 10, // lower = lighter
      curveSegments: 10,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshPhysicalMaterial
        color="#232323"
        metalness={1}
        roughness={0.3}
        reflectivity={0.5}
        clearcoat={0}
        iridescence={0.5}
      />
    </mesh>
  );
};

// === Animated Boxes (Group) ===
const AnimatedBoxes = () => {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  const boxes = Array.from({ length: 50 }, (_, index) => ({
    position: [(index - 25) * 0.75, 0, 0],
    rotation: [(index - 10) * 0.1, Math.PI / 2, 0],
    id: index,
  }));

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  );
};

// === Scene Wrapper ===
export const Scene = () => {
  const [cameraPosition] = React.useState([5, 5, 20]);

  return (
    <div className="w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: cameraPosition, fov: 40 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <AnimatedBoxes />
      </Canvas>
    </div>
  );
};
