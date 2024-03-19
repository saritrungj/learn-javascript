import { PI, getArea, getCircumference, getVolume } from './mathUtil.js'

console.log(PI);
const areas = getArea(10);
const circumferences = getCircumference(10);
const volumes = getVolume(10);
console.log(`${areas.toFixed(2)} cm^2.`);
console.log(`${circumferences.toFixed(2)} cm.`);
console.log(`${volumes.toFixed(2)} cm^3.`);