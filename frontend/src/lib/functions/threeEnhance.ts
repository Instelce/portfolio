import * as THREE from 'three';

export function createRoundedPlaneGeometry(
  width: number,
  height: number,
  radius: number,
  widthSegments: number,
  heightSegments: number
): THREE.PlaneGeometry {
  const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);

  return geometry as THREE.PlaneGeometry;
}