import { Vector3,Line,LineBasicMaterial,BufferGeometry } from 'three'

let points = []

points.push(new Vector3(0,100,0));
points.push(new Vector3(0,0,0));
points.push(new Vector3(0,-100,0));

const yAxisMaterial = new LineBasicMaterial({
	color: 0xaaaaaa
});

const yAxisGeometry = new BufferGeometry().setFromPoints(points);

export default new Line(yAxisGeometry,yAxisMaterial);
