/**
	{
		"api":1,
		"name":"String to JSON",
		"description":"Convert String to JSON.",
		"author":"Gh.Wang",
		"icon":"quote",
		"tags":"json,string,str2json,format,convert"
	}
**/

function main(state) {
	
	var result = (state.text + '')
	.replace(/\\(.?)/g, function (s, n1) {
		switch (n1) {
			case '\\':
				return '\\'
			case '0':
				return '\u0000'
			case '':
				return ''
			default:
				return n1
		}
	});
	
	try {
		// I feel like this should have a real parser/formatter
		// but hey, it works so who am I to judge?
		state.text = JSON.stringify(JSON.parse(result), null, 2);
	} catch(error) {
		state.postError("Invalid JSON")
	}
}
