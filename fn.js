//objects
exports.objLength=(obj)=>{var k=0;for(var i in obj)k++;return k}
exports.objDup=(obj)=>{var tmp={};for(var i in obj)tmp[i]=obj[i];return tmp}
exports.objGetkeys=(obj,array=false)=>{var tmp=[];for(var i in obj)tmp.push(i);if(array!==false)return tmp;else return tmp.toString()}

//array
exports.arrMerge=(arr,arr_)=>{arr_.forEach(function(i){arr.push(i)})}
exports.arrMerge_=(arr,arr_)=>{arr_.forEach(function(i){if(arr.indexOf(i)==-1)arr.push(i)})}

//array of objects
exports.arrobjCompkeyval=(arr,key,array=false)=>{var tmp=[];arr.forEach(function(i){tmp.push(i[key]);});if(array!==false)return tmp;else return tmp.toString()}
