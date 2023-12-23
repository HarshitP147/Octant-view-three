import { Vector3 } from 'three'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { Line2 } from 'three/examples/jsm/lines/Line2'

export default class Line{
	constructor(axis,thickness){

		this.points = []; 
		
		// Based on the axis, push the appropriate points to the array
		switch(axis){
			case 'x':
				this.points.push(new Vector3(-100,0,0));
				this.points.push(new Vector3(0,0,0));
			 	this.points.push(new Vector3(100,0,0));
				break;

			case 'y':
				this.points.push(new Vector3(0,-100,0));
				this.points.push(new Vector3(0,0,0));
			 	this.points.push(new Vector3(0,100,0));
				break;

			case 'z':
				this.points.push(new Vector3(0,0,-100));
				this.points.push(new Vector3(0,0,0));
			 	this.points.push(new Vector3(0,0,100));
				break;

			default:
				throw new Error('Axis must be X,Y or Z for 3 dimensional lines.');
		}

		this.lineGeometry = new LineGeometry();
		this.lineGeometry.setPositions(this.points);

		this.lineMaterial = new LineMaterial({
			color:'#aaafff',
			linewidth:thickness,
			resolution:new Vector3(window.innerWidth,window.innerHeight)
		})

		this.line = new Line2(this.lineGeometry,this.lineMaterial);
	}

	getLine(){
		return this.line;
	}
}
