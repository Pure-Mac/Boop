/**
	{
		"api":1,
		"name":"JSON to String",
		"description":"Convert JSON to String.",
		"author":"Gh.Wang",
		"icon":"quote",
		"tags":"json,string,json2str,format,convert"
	}
**/

function main(state) {
	var result = JSON.stringify(JSON.parse(state.text));
	state.text = (result + '')
			.replace(/[\\"']/g, '\\$&')
			.replace(/\u0000/g, '\\0')
}
