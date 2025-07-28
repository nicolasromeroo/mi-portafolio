import * as THREE from 'three';

const canvas = document.getElementById('bg-three');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(240, 240); // match avatar

// Crear partículas
const particles = new THREE.Geometry();
for (let i = 0; i < 500; i++) {
  particles.vertices.push(
    new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100)
    )
  );
}

const material = new THREE.PointsMaterial({ color: 0x00ffff, size: 1 });
const pointCloud = new THREE.Points(particles, material);
scene.add(pointCloud);

camera.position.z = 50;

function animate() {
  requestAnimationFrame(animate);
  pointCloud.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();
