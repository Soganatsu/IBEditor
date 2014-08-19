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

// File Menu Functions
var ibeOpen = function(){};
var ibeUpdate = function(){};
var ibeCommit = function(){};
var ibeImport = function(){};
var ibeExport = function(){};
var ibeLogout = function(){};

// Edit Menu Functions
var ibeUndo = function(){};
var ibeRedo = function(){};
var ibeCut = function(){};
var ibeCopy = function(){};
var ibePaste = function(){};
var ibeSettings = function(){};

// Windows Menu Functions
var ibeEditorItem = function(){};
var ibeEditorNPC = function(){};
var ibeEditor3DAssets = function(){};
var ibeEditor2DAssets = function(){};

// Camera Menu Functions
var ibeCameraGame = function(){
	document.getElementById("vpd-cammode").innerHTML = "Game Camera";
};
var ibeCameraFPS = function(){
	document.getElementById("vpd-cammode").innerHTML = "FPS Camera";
};
var ibeCameraMaya = function(){
	document.getElementById("vpd-cammode").innerHTML = "Maya Camera";
};

// View Menu Functions
var ibeViewGrid = function(){
	var showGrid = false;
	var lines;
	var xLines;
	var zLines;
	var gXLines = [];
	var gZLines = [];
	var gridLineColor = new BABYLON.Color3(.5, 0.5, 0.5);
	var width = 10;
	var height = 10;
	xLines = BABYLON.Mesh.CreateLines("lines", [
	       new BABYLON.Vector3(0, 0, 0),
	       new BABYLON.Vector3(0, 0, width)
	   ], scene);
	zLines = BABYLON.Mesh.CreateLines("lines", [
	       new BABYLON.Vector3(0, 0, 0),
	       new BABYLON.Vector3(height, 0, 0)
       ], scene);
	xLines.color = gridLineColor;
	zLines.color = gridLineColor;
	if(showGrid == true){
		showGrid = false;
	} else {
		showGrid = true;
		for(var x = 0; x <= width; x++){
			for(var z = 0; z <= height; z++){
				lines = xLines.clone("cxLine" + x);
				lines.position = new BABYLON.Vector3(x+1, 0, z);
				gXLines.push(lines);
				lines = zLines.clone("cxLine" + z);
				lines.position = new BABYLON.Vector3(x, 0, z+1);
				gZLines.push(lines);
			}
		}
	}
};
var testTerrain = ibeMeshTerrain();

var ibeViewWireframe = function(){
	if(testTerrain.material.wireframe == true){
		testTerrain.material.wireframe = false;
		document.getElementById("wireframe-mode-toggle").style.display = "none";
	} else {
		testTerrain.material.wireframe = true;
		document.getElementById("wireframe-mode-toggle").style.display = "block";
	}
};
var ibeViewSkybox = function(){};
var ibeViewBoundingBox = function(){};
var ibeViewHighlightingFaces = function(){};

//ibeViewGrid();
function get (el) {
	if (typeof el == 'string') return document.getElementById(el);
	return el;
}
function mouseX (e) {
	if (e.pageX) {
		return e.pageX;
	}
	if (e.clientX) {
		return e.clientX + (document.documentElement.scrollLeft ?
				document.documentElement.scrollLeft :
					document.body.scrollLeft);
	}
	return null;
}

function mouseY (e) {
	if (e.pageY) {
		return e.pageY;
	}
	if (e.clientY) {
		return e.clientY + (document.documentElement.scrollTop ?
				document.documentElement.scrollTop :
					document.body.scrollTop);
	}
	return null;
}
function dragable (clickEl,dragEl) {
	var p = get(clickEl);
	var t = get(dragEl);
	var drag = false;
	offsetX = 0;
	offsetY = 0;
	var mousemoveTemp = null;

	if (t) {
		var move = function (x,y) {
			t.style.left = (parseInt(t.style.left)+x) + "px";
			t.style.top  = (parseInt(t.style.top) +y) + "px";
		}
		var mouseMoveHandler = function (e) {
			e = e || window.event;

			if(!drag){return true};

			var x = mouseX(e);
			var y = mouseY(e);
			if (x != offsetX || y != offsetY) {
				move(x-offsetX,y-offsetY);
				offsetX = x;
				offsetY = y;
			}
			return false;
		}
		var start_drag = function (e) {
			e = e || window.event;

			offsetX=mouseX(e);
			offsetY=mouseY(e);
			drag=true; // basically we're using this to detect dragging

			// save any previous mousemove event handler:
			if (document.body.onmousemove) {
				mousemoveTemp = document.body.onmousemove;
			}
			document.body.onmousemove = mouseMoveHandler;
			return false;
		}
		var stop_drag = function () {
			drag=false;      

			// restore previous mousemove event handler if necessary:
			if (mousemoveTemp) {
				document.body.onmousemove = mousemoveTemp;
				mousemoveTemp = null;
			}
			return false;
		}
		p.onmousedown = start_drag;
		p.onmouseup = stop_drag;
	}
}
window.onload=function(){ dragable('tool-panel','tool-panel'); }
var npActive;
var setActive = function(id){
	if(npActive != id){
		document.getElementById(id).focus();
		console.log(id);
		npActive = id;
	}
}