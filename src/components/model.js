import * as THREE from "three"
import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model({ url, fabricCanvas }) {
  const [scene, set] = React.useState()

  var canvasTexture = new THREE.CanvasTexture(fabricCanvas);
  canvasTexture.wrapS = THREE.RepeatWrapping;
  canvasTexture.wrapT = THREE.RepeatWrapping;
  canvasTexture.repeat.set(.02, .02);

  React.useMemo(
    () => {

      const fabricMat = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        metalness: 0.25,
        roughness: 0.25
      })

      const physMat = new THREE.MeshPhysicalMaterial({
        roughness: 0.4,
        clearCoat: 1,
        clearCoatRoughness: 0.3,
        // color: obj.material.color,
      })


      return new GLTFLoader().load(url, gltf => {
        gltf.scene.traverse(obj => {
          if (obj.type === "Mesh") {
            obj.material.dispose()
            obj.material = fabricMat
            // obj.material.map.needsUpdate = true;
          }

        })
        set(gltf.scene)


      }),
        [url]
    }
  )

  if (scene) {
    const animateRandom = () => {
      canvasTexture.needsUpdate = true
    };
    setInterval(animateRandom, 1000);

  }

  return scene ? <primitive object={scene} rotation={[-1.5707963267948963, 0, 0]} /> : null
}

export default Model
