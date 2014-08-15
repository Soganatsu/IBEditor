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
var ibeCameraGame = function(){};
var ibeCameraFPS = function(){};
var ibeCameraMaya = function(){};

// View Menu Functions
var ibeViewGrid = function(){
	var showGrid = false;
	var gridLines;
	var gridLineColor = new BABYLON.Color3(.5, 0.5, 0.5);
	if(showGrid == true){
		showGrid = false;
	} else {
		showGrid = true;
		for(var x = 0; x < 10; x++){
			for(var z = 0; z < 10; z++){
				gridLines = BABYLON.Mesh.CreateLines("lines", [
				       new BABYLON.Vector3(x, 0, z),
				       new BABYLON.Vector3(x+1, 0, z),
				       new BABYLON.Vector3(x+1, 0, z+1),
				       new BABYLON.Vector3(x, 0, z+1),
				       new BABYLON.Vector3(x, 0, z)
				   ], scene);
				gridLines.color = gridLineColor;
			}
		}
	}
};
ibeViewGrid();
var testTerrain = ibeMeshTerrain();

var ibeViewWireframe = function(){
	testTerrain.wireframe = false;
};
var ibeViewSkybox = function(){};
var ibeViewBoundingBox = function(){};
var ibeViewHighlightingFaces = function(){};
