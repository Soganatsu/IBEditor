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
var selectedObjectName;
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
	        console.log("Selected " + selectedObjectName);
	    } else {
	    	if(pickResult.pickedMesh == null && (selectedObjectName != "")){
	    		console.log("Selection Cleared");
	    		selectedObjectName = "";
	    	}
	    }
    }
	if(evt.button === right){
		
	}
});