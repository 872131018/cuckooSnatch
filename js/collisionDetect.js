function collisionDetect()
{
	this.checkCollision = checkCollision;
}
function checkCollision(objectOneId, objectTwoId)
{
	var objectOneBoundingRect = $('#'+objectOneId).get(0).getBoundingClientRect();
	var objectTwoBoundingRect = $('#'+objectTwoId).get(0).getBoundingClientRect();

	if(!(objectOneBoundingRect.right < objectTwoBoundingRect.left || objectOneBoundingRect.left > objectTwoBoundingRect.right ||
		objectOneBoundingRect.bottom < objectTwoBoundingRect.top || objectOneBoundingRect.top > objectTwoBoundingRect.bottom))
	{
		console.log('true');
	}
}