import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x808080);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const line = new THREE.LineSegments(edges, lineMaterial);
scene.add(line);

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  line.rotation.x += 0.005;
  line.rotation.y += 0.005;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
