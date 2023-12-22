import { PerspectiveCamera } from "three"; 

const camera = new PerspectiveCamera(75,window.innerWidth/window.innerHeight,10,10000);

let pos = 140;

camera.position.set(pos,pos,pos);

camera.lookAt(0,0,0);

export default camera;
