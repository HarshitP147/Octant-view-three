import { Vector3,Line,LineBasicMaterial,BufferGeometry } from 'three'

let points = []

points.push(new Vector3(100,0,0));
points.push(new Vector3(0,0,0));
points.push(new Vector3(-100,0,0));

const xAxisMaterial = new LineBasicMaterial({
	color: 0x000fff
});

const xAxisGeometry = new BufferGeometry().setFromPoints(points);

export default new Line(xAxisGeometry,xAxisMaterial);
