// components/ModelViewer.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelViewerProps {
  modelPath: string;
}

function Model({ modelPath }: ModelViewerProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

function ModelViewer({ modelPath }: ModelViewerProps) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[90, 100, 50]} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;
