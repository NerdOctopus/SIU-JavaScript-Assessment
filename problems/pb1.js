// declare and define function here
function replaceSpaces(string, char) {
	return(string.replace(/ /g, char));
}

// test cases
// replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
// replaceSpaces('Tomorrow will be a great day', '_'); // -> 'Tomorrow_will_be_a_Great_Day'
