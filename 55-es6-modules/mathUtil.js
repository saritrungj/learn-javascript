export const PI = 3.14159;

export function getCircumference(raduis) {
  return 2 * PI * raduis;
}

export function getArea(raduis) {
  return PI * raduis * raduis;
}

export function getVolume(radius) {
  return (4/3) * PI * Math.pow(radius, 3);
}