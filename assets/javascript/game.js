// Waits until html is finished loading then starts JS

$(document).ready(function(){

	//gif object to contain variables and methods

	var gif = {

		// Array of marvel characters

		marvelChar: ["spider-man", "wolverine", "psylocke", "beast", "thing", "storm", "professor x", "venom", "magneto", "deadpool", "rogue", "nightcrawler"],

		// Populate buttons

		butPopulate: function() {

			$("#buttonsView").empty();

			// for loop to make each button in the array

			for (var i = 0; i < gif.marvelChar.length; i++) {

				// Create a button with the name of the character

				var charDiv = $("<button>");
				charDiv.addClass("char");
				charDiv.attr("data-name", gif.marvelChar[i]);
				charDiv.text(gif.marvelChar[i]);
				$("#buttonsView").append(charDiv);

			} // End of for loop

			console.log(gif.marvelChar);

		}, // End of butPopulate method

		// on click to add a new button for search and then repopulate the array of buttons
		searchClick: function() {
			$("#addGif").on("click", function(){
				console.log(gif.marvelChar);
				// This line of code will grab the input from the textbox
				var hero = $('#gif-input').val().trim();

				// The hero from the textbox is then added to our array
				gif.marvelChar.push(hero);
				
				// Our array then runs which handles the processing of our marvelChar array
				gif.butPopulate();

				// *****clear form so it doesn't rise exponentially

				$("#gif-input").val('');

				// on click for gifs to start and stop

				gif.move();

				// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page

				return false;

			}); // Ends on click addGif function
		}, // Ends searchClick fucntion

		// on click for gif buttons to populate gifs from api

		apiCall: function() {

			// onclick for buttons to produce gifs

			$("#buttonsView").on("click", ".char", function() {

				// variable for character name

				var name = $(this).attr('data-name');

				// variable for url of giphy

				var queryURL = "http://api.giphy.com/v1/gifs/search?q=marvel+" + name + "&api_key=dc6zaTOxFJmzC&limit=10";

				// API call

				$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

				

					console.log(response);

					for (var i = 0; i < response.data.length; i++) {

						// create div where gif, rating, etc will be stored

						var div = $("<div class='character'>");

						var rating = response.data[i].rating;

						var p1 = $('<p>').text( "Rating: " + rating);

						div.append(p1);

						var still = $('<img>').attr('src', response.data[i].images.downsized_still.url).attr("data-still", response.data[i].images.downsized_still.url).attr("data-animate", response.data[i].images.downsized.url).attr("data-state", "still").addClass("gif");

						div.append(still);

						$("#gifView").prepend(div);

					} // End of for loop

					gif.move();
				
				}); // End of done function on api call

			}); // end of on click to produce gifs
		}, // End apiCall function

		// on click for gifs to start and stop

		move: function() {
			$("#gifView").on("click", ".gif", function() {

				var state = $(this).attr("data-state");

	            var animate = $(this).attr("data-animate");

	            var still = $(this).attr("data-still");

	            if (state == "still") {
	                $(this).attr("data-state", "animate");
	                $(this).attr("src", animate);
	            } // end of if statement

	            else {
	                $(this).attr("data-state", "still");
	                $(this).attr("src", still);
	            } // end of else statement


			}); // End of on click function
		} // End of move function

	} // Ends gif object

	// populate buttons in array using a for loop, but empty the div first so you can keep adding new buttons

	gif.butPopulate();

	// on click to add a new button for search and then repopulate the array of buttons

	gif.searchClick();

	// on click for gif buttons to populate gifs from api

	gif.apiCall();

	// on click for gifs to start and stop
	
	gif.move();

}); // Ends document.ready function