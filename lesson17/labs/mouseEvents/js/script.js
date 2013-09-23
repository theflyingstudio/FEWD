/**
 * Welcome to Mouse Events Exercise
 * A couple of thing we want to do:
 *
 * 1) When a user clicks the mousebox, turn it red by adding the "clicked" css class
 *    to it. When the user clicks it again, remove the "clicked" class and turn it blue
 *    again.
 *
 * 2) Use the mouseMove event to show the current position of the mouse using the HTML snippet provided
 */
$('#mouseBox').click(function(event){
	$('#mouseBox').toggleClass('clicked');
})

$('#mouseBox').mousemove(function(event){
	/**console.log(event.pageX)
	console.log(event.pageY)

	The following is code to get the mouse location to show on the coordinates in the
		<p>
        The mouse is at location (<span id="xLocation">0</span>, <span id="yLocation">0</span>)
      	</p>*/

$('#xLocation').text(event.pageX);
$('#yLocation').text(event.pageY);
});


$("#mouseBox").on('mouseup mousedown',)