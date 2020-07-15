var camera, scene, renderer, mesh, material, cameraControls, mygltf;
init();
animate();

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/GLTFLoader.js';

//Check if mouse is down (to stop model from rotating when orbiting)
var mouseDown = 0;
document.body.onmousedown = function() {
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

function init() {
    // Renderer.
    renderer = new THREE.WebGLRenderer({alpha: true});
    //renderer.setPixelRatio(window.devicePixelRatio);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    // Add renderer to page
    //document.body.appendChild(renderer.domElement);

    // get container to contain three.js canvas.
    var container = document.getElementById('canvasbook');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    // Create camera.
    camera = new THREE.PerspectiveCamera(1.5, w / h, 1, 1000);
    camera.position.set(5,5,10);
    //create controls
    cameraControls = new OrbitControls( camera, renderer.domElement );
    cameraControls.enableKeys = false;
    cameraControls.enablePan = false;

    // Create scene.
    scene = new THREE.Scene();

    {
      const skyColor = 0xFFFFFF;  // light blue
      const groundColor = 0xFFFFFF;  // brownish orange
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      scene.add(light);
    }

    {
      const color = 0xFFFFFF;
      const intensity = 0.8;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(5, 10, 2);
      scene.add(light);
      scene.add(light.target);
    }

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./3D/MyBook.glb', (gltf) => {
      mygltf = gltf.scene;
      scene.add(gltf.scene);
    });

    cameraControls.update();
}

function animate() {
    resizeCanvasToDisplaySize();
    if(mouseDown == 0){
      if (mygltf) mygltf.rotation.y += 0.005;
    }

    cameraControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }
}
