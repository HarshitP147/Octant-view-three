import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import camera from './camera'

import Line from './lines';

function main(){

	const renderer = new Three.WebGLRenderer();

	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const scene = new Three.Scene();

	const xAxis = new Line('x',0,1);
	scene.add(xAxis.getLine());

	//const yAxis = new Line('y',0,1);
	//scene.add(yAxis.getLine());
	const zAxis = new Line('z',0,1);
	scene.add(zAxis.getLine());

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
