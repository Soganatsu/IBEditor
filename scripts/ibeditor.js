/**
 * 	  Ironbane Editor
 * 	  Developed by Ironbane Team, 2014
 * 	  Written By: Jesse Stojan
 * 	  Copyright (C) 2014  Ironbane Team
 *
 *    This program is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, GNU General Public License version 2 of the License.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License along
 *    with this program; if not, write to the Free Software Foundation, Inc.,
 *    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

//Now create a basic Babylon Scene object 
var scene = new BABYLON.Scene(engine);

//This creates and positions a free camera
var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

//This begins the creation of a function that we will 'call' just after it's built
var createScene = function () {
  // Set default background color
  scene.clearColor = new BABYLON.Color3(.15,.15,.15);
  
  // This targets the camera to scene origin
  camera.setTarget(new BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, false);

  // This creates a light, aiming 0,1,0 - to the sky.
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  // Dim the light a small amount
  light.intensity = .8;



  // Leave this function
  return scene;

};  // End of createScene function

// Now, call the createScene function that you just finished creating
var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});

