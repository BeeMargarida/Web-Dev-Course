var arr = [5,11,13,8,6,7];
function findIndex(arr, callback){
	for(var i = 0; i < arr.length; i++){
		if(callback(arr[i], i, arr)){
			return i;
		}
	}
	return -1;
}