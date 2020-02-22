import * as THREE from "three"
import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model({ url }) {
  const [scene, set] = React.useState()

  // var PIXEL_RATIO = (function () {
  //   var ctx = document.createElement('canvas').getContext('2d'),
  //     dpr = window.devicePixelRatio || 1,
  //     bsr = ctx.webkitBackingStorePixelRatio ||
  //       ctx.mozBackingStorePixelRatio ||
  //       ctx.msBackingStorePixelRatio ||
  //       ctx.oBackingStorePixelRatio ||
  //       ctx.backingStorePixelRatio || 1;
  //   return dpr / bsr;
  // })();
  
  // const createRetinaCanvas = function (w, h, ratio) {
  //   if (!ratio) { ratio = PIXEL_RATIO; }
  //   var can = document.createElement('canvas');
  //   can.width = w * ratio;
  //   can.height = h * ratio;
  //   can.style.width = w + 'px';
  //   can.style.height = h + 'px';
  //   can.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  //   return can;
  // }
  // function addTexture() {
  //   var text = 'cats'
  //   //create image
  //   var bitmap = createRetinaCanvas(100, 100);
  //   var ctx = bitmap.getContext('2d', {antialias: false});
  //   ctx.font = 'Bold 20px Arial';
  //   ctx.beginPath();
  //   ctx.rect(0, 0, 100, 100);
  //   ctx.fillStyle = 'red';
  //   ctx.fill();
  //   ctx.fillStyle = 'white';
  //   ctx.fillText(text, 0, 20);
  //   ctx.strokeStyle = 'black';
  //   ctx.strokeText(text, 0, 20);
  //   // canvas contents will be used for a texture
  //   var texture = new THREE.Texture(bitmap) 
  //   texture.needsUpdate = true;
  //   var material = new THREE.MeshBasicMaterial({ map: texture });
  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube)
  // }



  React.useMemo(
    () => {

// canvas texture
      // var text = 'cats'
      // //create image
      // var bitmap = createRetinaCanvas(300, 300);
      // var ctx = bitmap.getContext('2d', { antialias: false });
      // ctx.font = 'Bold 150px Arial';
      // ctx.beginPath();
      // ctx.rect(0, 0, 300, 300);
      // ctx.fillStyle = 'red';
      // ctx.fill();
      // ctx.fillStyle = 'white';
      // ctx.fillText(text, 0, 20);
      // ctx.strokeStyle = 'black';
      // ctx.strokeText(text, 0, 20);
      // // canvas contents will be used for a texture
      // var texture = new THREE.Texture(bitmap)
      // texture.needsUpdate = true;
      // var material = new THREE.MeshBasicMaterial({ map: texture });









      return new GLTFLoader().load(url, gltf => {
        gltf.scene.traverse(obj => {
          if (obj.type === "Mesh") {
            obj.material.dispose()
            obj.material = new THREE.MeshPhysicalMaterial({
              roughness: 0.4,
              clearCoat: 1,
              clearCoatRoughness: 0.3,
              color: obj.material.color,
            })
          }
        })
        set(gltf.scene)
      }),
        [url]
    }
  )

  return scene ? <primitive object={scene} rotation={[-1.5707963267948963, 0, 0]} /> : null
}

export default Model
