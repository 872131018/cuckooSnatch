$(document).ready(function()
{
	controller = documentController();
	//the starting position has to match the css top/right attributes
	player = new playerClass(0, 0);
	chicken = new chickenClass(100, 100);
	collision = new collisionDetect();

	//set timer for chicken action
	setInterval(
		function()
		{
			 $(document).trigger('updateObject', [{'object': 'chicken', 'action': 'randomMove'}]);
		},
		1000
	);
});
