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
var mouse = new BABYLON.Vector2();
var selectedObjectName;
var camPos, camPosN;

function onDocumentMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;
}
function onCameraMove(){
	camPos = scene.activeCamera.position;
	document.getElementById("vpd-campos").innerHTML = "Camera Pos: X:"+camPos.x.toFixed(2)+" Y:"+camPos.y.toFixed(2)+" Z:"+camPos.z.toFixed(2);
}
canvas.addEventListener("mousemove", function(mpos){
	var xpos = mpos.clientX;
	var ypos = mpos.clientY;
	document.getElementById("vpd-curpos").innerHTML = "Mouse Pos: X:"+xpos+" Y:"+ypos;
	onCameraMove();
});
canvas.addEventListener("mousedown", function (evt) {
	var left, right;
	left = 0;
	right = 1;
	if(evt.button === left){
	    var pickResult = scene.pick(evt.clientX, evt.clientY);
	    if (pickResult.hit && (selectedObjectName != pickResult.pickedMesh.name)) {
	    	selectedObjectName = pickResult.pickedMesh.name;
	        var dir = pickResult.pickedPoint.subtract(scene.activeCamera.position);
	        dir.normalize();
	        pickResult.pickedMesh.applyImpulse(dir.scale(50), pickResult.pickedPoint);
	        //console.log("Selected " + selectedObjectName);
    		document.getElementById("vpd-selobj").innerHTML = "Selected: " + selectedObjectName;
	    } else {
	    	if(pickResult.pickedMesh == null && (selectedObjectName != "")){
	    		//console.log("Selection Cleared");
	    		document.getElementById("vpd-selobj").innerHTML = "Selected: (empty)";
	    		selectedObjectName = "";
	    	}
	    }
    }
	if(evt.button === right){
		
	}
});