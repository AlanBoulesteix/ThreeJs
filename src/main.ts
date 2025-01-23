import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

const waterSphere = new THREE.Mesh(sphereGeometry, material);
scene.add(waterSphere);

const edges = new THREE.EdgesGeometry(sphereGeometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const line = new THREE.LineSegments(edges, lineMaterial);
scene.add(line);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
