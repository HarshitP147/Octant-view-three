import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import camera from './camera'

import xAxis from './axes/axisX'
import yAxis from './axes/axisY'
import zAxis from './axes/axisZ'

function main(){

	const renderer = new Three.WebGLRenderer();

	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const scene = new Three.Scene();

	scene.add(xAxis);
	scene.add(yAxis);
	scene.add(zAxis);

	const controls = new OrbitControls(camera,renderer.domElement);

	controls.update();


	function animate(){
		requestAnimationFrame(animate);
		
		controls.update();
		renderer.render(scene,camera);
	}
	animate();

}

try{
	main();
}
catch(err){
	alert(err);
}
