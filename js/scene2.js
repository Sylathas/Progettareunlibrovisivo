var camera, scene, renderer, mesh, material, cameraControls, cube;
init();
animate();

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
    var container = document.getElementById('canvaspages');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    // Create camera.
    camera = new THREE.PerspectiveCamera(70, w / h, 1, 1000);

    //create controls
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
    cameraControls.enableKeys = false;
    cameraControls.enableZoom = false;
    cameraControls.enablePan = false;

    // Create scene.
    scene = new THREE.Scene();

    //add a cube
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 2;

    cameraControls.update();
}

function animate() {
    resizeCanvasToDisplaySize();

    if(mouseDown == 0){
      cube.rotation.y += 0.01;
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
