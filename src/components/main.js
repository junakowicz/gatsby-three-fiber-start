import * as THREE from "three"
import React from "react"
import { Canvas } from "react-three-fiber"
import Model from "../components/model"
import Controls from "../components/controls"
import GLTF_BUC from "./BUCv2.gltf"
import uniforms from "./uniforms"
import "../style.css"

uniforms.init(THREE)

const RectAreaLightDecl = ({
  color = "white",
  intensity = 1.5,
  width = 1000,
  height = 400,
  position = [100, 200, -700],
  lookAt = [0, 0, 0],
}) => {
  return (
    <rectAreaLight
      intensity={intensity}
      position={position}
      color={color}
      width={width}
      height={height}
      onUpdate={self => self.lookAt(...lookAt)}
    />
  )
}


function Main() {
 return (<main>
    <div style={{ position: 'absolute', color: 'white', left: 9, top: 9 }}>HORNBEAM BICYCLES</div>
    <Canvas camera={{ position: [0, 0, 300] }}>
      <ambientLight intensity={0.2} />
      <RectAreaLightDecl />
      <RectAreaLightDecl
        intensity={4}
        width={100}
        height={1000}
        position={[0, 0, 2000]}
        color="purple"
      />
      <RectAreaLightDecl
        intensity={0.5}
        width={500}
        height={1000}
        position={[0, 1000, 0]}
      />

      <RectAreaLightDecl
        intensity={5}
        width={1000}
        height={100}
        position={[-800, 0, 800]}
      />
      <Model url={GLTF_BUC} />
      <Controls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        rotateSpeed={1}
      // maxPolarAngle={Math.PI / 3}
      // minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  </main>)
}

export default Main
