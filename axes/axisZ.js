import { Vector3,Line,LineBasicMaterial,BufferGeometry } from 'three'

let points = []

points.push(new Vector3(0,0,100));
points.push(new Vector3(0,0,0));
points.push(new Vector3(0,0,-100));

const zAxisMaterial = new LineBasicMaterial({
	color: 0xaaafff
});

const zAxisGeometry = new BufferGeometry().setFromPoints(points);

export default new Line(zAxisGeometry,zAxisMaterial);
