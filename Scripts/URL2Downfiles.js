/**
	{
		"api":1,
		"name":"URL to Downfiles",
		"description":"Convert URL to Downfile in Orbit.",
		"author":"Gh.Wang",
		"icon":"quote",
		"tags":"url,orbit,downfile"
	}
**/

function main(state) {
    const urls = state.text;
    const urlArray = urls.split("\n");
	

    var downfiles = '';
    urlArray.forEach(url => {
		let url = URL()
		let path = url.split("/")
        var downfile = `
{
	"targeturl": "${url}",
	"filepath": ${path},
	"size": "0",
	"md5": "0"
}
		`
		downfiles += downfile
    });

	try {
		state.text = downfiles
	}
	catch(error) {
		state.postError("Something strange happened here...")
	}
}

var script = `
/**
	{
		"api":1,
		"name":"New Boop Script",
		"description":"What does your script do?",
		"author":"Whooooooo are you?",
		"icon":"broom",
        "tags":"place,tags,here",
        "bias":0.0
	}
**/

function main(state) {
	try {
        
        /*
        The 'state' object has three properties to deal with text: text, fullText, and selection.

        state.fullText will contain or set the entire string from the Boop editor, regardless of whether a selection is made or not.
        state.selection will contain or set the currently selected text, one at a time if more that one selection exists.
        state.text will behave like selection if there is one or more selected piece of text, otherwise it will behave like fullText.
        */

		state.fullText = state.selection; // Remove all but selected text
	}
	catch(error) {
		state.postError("Explain what went wrong here...")
	}
	
}
`
