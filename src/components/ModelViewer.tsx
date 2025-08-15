import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";

type ModelProps = { url: string };

// 3D Motor Model Component
const Model: React.FC<ModelProps> = ({ url }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url) as any;
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations && animations.length && group.current) {
      mixer.current = new THREE.AnimationMixer(group.current);
      animations.forEach((clip: THREE.AnimationClip) => {
        const action = mixer.current?.clipAction(clip);
        action?.setLoop(THREE.LoopRepeat, Infinity);
        action?.play();
      });
    }
  }, [animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
    if (group.current && (!animations || animations.length === 0)) {
      group.current.rotation.y += 0.01; // Auto-rotate if no animation
    }
  });

  // Lower motor slightly
  return <primitive ref={group} object={scene} position={[0, -0.3, 0]} />;
};

// Forest Backdrop Component
const ForestBackdrop: React.FC = () => {
  const exrTexture = useLoader(EXRLoader, "/forest.exr") as unknown as THREE.Texture;

  // Lower the forest plane slightly to align with motor
  return (
    <mesh position={[0, -0.3, -6]}>
      <planeGeometry args={[24, 14]} />
      <meshStandardMaterial map={exrTexture} toneMapped={false} />
    </mesh>
  );
};

// Main ModelViewer Component
const ModelViewer: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 50 }}
      style={{ width: "100%", height: "500px" }}
      gl={{ alpha: true }} // Transparent canvas
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      <Suspense fallback={null}>
        {/* 3D Motor */}
        <Model url="/landing_page_motor.glb" />
        {/* Forest backdrop behind motor */}
        <ForestBackdrop />
        {/* Metallic reflections */}
        <Environment files="/forest.exr" background />
      </Suspense>

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ModelViewer;
