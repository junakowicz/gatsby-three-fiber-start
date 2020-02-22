import * as THREE from "three"
import React from "react"
import { Canvas } from "react-three-fiber"
import Model from "../components/model"
import Controls from "../components/controls"
import GLTF_BUC from "./BUCv2.gltf"
// import GLTF_BUC from "./buc3blenderop.gltf"
import uniforms from "./uniforms"
import { fabric } from "fabric";
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

function createTextureCanvas() {
  // var x = document.createElement("TCANVAS");
  // console.log("DOCCCCxxx",x)
  // var ctx = x.getContext("2d");
  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(20, 20, 150, 100);
  // document.body.appendChild(x);
  var canvas = document.createElement('canvas');

  canvas.id = "tCanvas";

  canvas.style.width = '256px';
  canvas.style.height = '256px';
  canvas.style.zIndex = 8;
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.border = "1px solid";


var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

console.log('fabricc', fabric)

var fCanvas = new fabric.Canvas('tCanvas', {
  backgroundColor: '#9CC89C',
   width: 256, height: 256,
   position: 'absolute',
   top:0, 
});

const fCanvasContainer = fCanvas.getElement().parentNode;
fCanvasContainer.style.position = 'absolute'


var text = new fabric.IText('Hornbeam bicycles', {
  fontSize: 40,
  textAlign: 'center',
  fontWeight: 'bold',
  left: 128,
  top: 128,
  angle: 0,
  originX: 'center',
  originY: 'center',
  // shadow: 'blue -5px 6px 5px',
  // styles: {
  //   0: {
  //     0: {
  //       fontSize: 60,
  //       fontFamily: 'Impact',
  //       fontWeight: 'normal',
  //       fill: 'orange'
  //     }
  //   },
  //   1: {
  //     0: {
  //       fill: "blue"
  //     }
  //   },
  //   2: {
  //     0: {
  //       textBackgroundColor: 'red'
  //     },
  //     2: {
  //       fill: 'fuchsia',
  //       stroke: 'orange',
  //       strokeWidth: 1
  //     }
  //   }
  // }
});

fCanvas.add(text);
fCanvas.setActiveObject(text);

var rect = new fabric.Rect({
  width: 50,
  height: 50,
  left: 50,
  top: 128,
  stroke: '#aaf',
  strokeWidth: 5,
  fill: '#faa',
  selectable: false,
  originX: 'center',
  originY: 'center'
});
fCanvas.add(rect);
fCanvas.setActiveObject(rect);

// below is optional

// var ctx = tCanvas.getContext("2d");
// ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
// ctx.fillRect(100, 100, 200, 200);
// ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
// ctx.fillRect(150, 150, 200, 200);
// ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
// ctx.fillRect(200, 50, 200, 200);

return canvas;
}

function Main() {
 const fabricCanvas = createTextureCanvas()

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
      <Model url={GLTF_BUC} fabricCanvas={fabricCanvas} />
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
