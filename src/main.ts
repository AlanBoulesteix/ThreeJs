import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xe3c6b4);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 2;
controls.maxDistance = 6;

const sphereGeometry = new THREE.IcosahedronGeometry(1, 128);

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

material.uniforms.uTime = { value: 0.0 };
material.uniforms.uRadius = { value: 0.5 };
material.uniforms.uColor = { value: new THREE.Color(0xe3c6b4) };
material.uniforms.uEffect = { value: 1 };

const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);

camera.position.z = 4;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  material.uniforms.uTime.value += 0.001
  renderer.render(scene, camera);
}

animate();
