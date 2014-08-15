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

var ibeMeshTerrain = function(){
		var terrain = new BABYLON.Mesh.CreateGroundFromHeightMap("terGround", "hm_test.png", 100, 100, 50, 0, 10, scene, false);
		var tMat = new BABYLON.StandardMaterial("testMatTerrain", scene);
		tMat.wireframe = true;
		terrain.material = tMat;
};
var ibeDiffuseMap =  function(){};
var ibeHeightMap =  function(){};
var ibeSubtractMap =  function(){};
var ibeVertexMerge =  function(){};
var ibeVertexSplit =  function(){};