$.getJSON("topspots.json", function(json) 
{
	var topspots = json.topspots;

	topspots.forEach( function( item ) 
		{
			var name = item.name //.replace(/[^\x00-\x7F]/g, "");
			var description = item.description //.replace(/[^\x00-\x7F]/g, "");
			var location = item.location;

			var row = "<tr class='table table-striped'><td>" + name + "</td><td>" + description + "</td><td>"
				+ "<a href='https://www.google.com/maps?q=" + location[0] + "," + location[1] + "'>"
				+ "<button type='button' class='btn btn-primary'>" 
				+ "Open in Google Maps</button></td></tr>";

				$('#topSpots').append( row );
		});
});
