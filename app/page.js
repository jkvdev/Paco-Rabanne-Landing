"use client";

import { Render } from "@/components";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="w-screen h-screen fixed inset-0 overflow-hidden">
      {/* Main 3D Render Component */}
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true, precision: "mediump" }}
        frameloop="always"
      >
        <Render />
      </Canvas>
    </main>
  );
}
