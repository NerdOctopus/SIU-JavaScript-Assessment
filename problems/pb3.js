// declare and define function here
function compress(string){
	var count = 1;
	var char = '';
	var result = '';
	var answer = '';
	for (var i = 0; i < string.length; i++){
		char = string[i]
		if (string[i] == string[i+1]){
			count++;
		} else {
			if (count > 1){
				result = count + char
				count = 1
				answer = answer + result
			} else {
				answer = answer + char
			}
		} 
	}
return answer
}

// test cases
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
