// Waits until html is finished loading then starts JS

$(document).ready(function(){

	//giff object to contain variables and methods

	var giff = {

		// Array of marvel characters

		marvelChar: ["spider-man", "wolverine", "psylocke", "beast", "thing", "storm", "professor x", "venom", "magneto", "deadpool", "rogue", "nightcrawler"],

		// Populate buttons

		butPopulate: function() {
			$("#buttonsView").empty();

			// for loop to make each button in the array

			for (var i = 0; i < giff.marvelChar.length; i++) {

				// Create a button with the name of the character

				var charDiv = $("<button>");
				charDiv.addClass("char");
				charDiv.attr("data-name", giff.marvelChar[i]);
				charDiv.text(giff.marvelChar[i]);
				$("#buttonsView").append(charDiv);
				console.log(charDiv);

			}
		}, // End of butPopulate method

	} // Ends giff object

	// populate buttons in array using a for loop, but empty the div first so you can keep adding new buttons

	giff.butPopulate();

	// on click to add a new button for search and then repopulate the array of buttons

	// on click for giff buttons to populate giffs from api

	// on click for giffs to start and stop
	

}); // Ends document.ready function