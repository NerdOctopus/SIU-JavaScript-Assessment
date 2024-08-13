// declare and define function here
function mostFrequentChar(string){
	var keyCount = {};
	var mostKey = '';
	for(var i=0; i<string.length; i++){
		var key = string[i];
		if(!keyCount[key]){
		keyCount[key]=0;
		}
		keyCount[key]++;
		if(mostKey == '' || keyCount[key] > keyCount[mostKey]){
			mostKey = key;
		}else if(keyCount[key] = keyCount[mostKey]){
			if(string.indexOf(mostKey) > string.indexOf(key)){
				mostKey = key;
			}
		}
	}
	console.log(mostKey);
}

// test cases
// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('mississippi'); // -> 'i'. 'i' and 's' appear with same frequency in 'mississippi' but 'i' appears first!
