function chickenClass(passedX, passedY)
{
    //stuff related to object state
    this.speed = 8;
    this.animationRate = 100;
    this.positionX = passedX;
    this.positionY = passedY;
    //track the current move
    this.currentMove = 'down';
    //functions for the chicken
    this.randomMove = randomMove;
    this.updatePosition = chickenUpdatePosition;
    this.goUp = chickenGoUp;
    this.goDown = chickenGoDown;
    this.goLeft = chickenGoLeft;
    this.goRight = chickenGoRight;
    this.stopUp = chickenStopUp;
    this.stopDown = chickenStopDown;
    this.stopLeft = chickenStopLeft;
    this.stopRight = chickenStopRight;
    //put the chicken on the board for first time
    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") 0px 0px');
}
function randomMove()
{
    //cancel the last action
    switch(this.currentMove)
    {
        case 'up':
            chicken.stopUp();
            break;
        case 'down':
            chicken.stopDown();
            break;
        case 'left':
            chicken.stopLeft();
            break;
        case 'right':
            chicken.stopRight();
            break;
    }
    //random number between 0 and 3
    var actionInt = Math.floor(Math.random() * 10);
    switch(actionInt)
    {
        case 0:
            chicken.goLeft();
            break;
        case 1:
            chicken.goRight();
            break;
        case 2:
            chicken.goUp();
            break;
        case 3:
            chicken.goDown();
            break;
    }

}
function chickenGoLeft()
{
    chicken.intervalId = setInterval(
        function()
        {
            var backgroundArray= $('#chicken').css('background').split(' ');
            var currentFrameX = backgroundArray[7];
            var currentFrameY = backgroundArray[8];
            switch(currentFrameX)
            {
                case '0px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -43px');
                    break;
                case '-43px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -86px -43px');
                    break;
                default:
                   $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") 0px -43px');
                    break; 
            }
            chicken.currentMove = 'left';
            chicken.updatePosition({'x': chicken.positionX-chicken.speed, 'y': chicken.positionY});
        },
        chicken.animationRate
    );
};
function chickenGoRight()
{
    chicken.intervalId = setInterval(
        function()
        {
            var backgroundArray= $('#chicken').css('background').split(' ');
            var currentFrameX = backgroundArray[7];
            var currentFrameY = backgroundArray[8];
            switch(currentFrameX)
            {
                case '0px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -86px');
                    break;
                case '-43px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -86px -86px');
                    break;
                default:
                   $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") 0px -86px');
                    break; 
            }
            chicken.currentMove = 'right';
            chicken.updatePosition({'x': chicken.positionX+chicken.speed, 'y': chicken.positionY});
        },
        chicken.animationRate
    );
};
function chickenGoUp()
{
    chicken.intervalId = setInterval(
        function()
        {
            var backgroundArray= $('#chicken').css('background').split(' ');
            var currentFrameX = backgroundArray[7];
            var currentFrameY = backgroundArray[8];
            switch(currentFrameX)
            {
                case '0px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -129px');
                    break;
                case '-43px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -86px -129px');
                    break;
                default:
                   $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") 0px -129px');
                    break; 
            }
            chicken.currentMove = 'up';
            chicken.updatePosition({'x': chicken.positionX, 'y': chicken.positionY-chicken.speed});
        },
        chicken.animationRate
    );
};
function chickenGoDown()
{
    chicken.intervalId = setInterval(
        function()
        {
            var backgroundArray= $('#chicken').css('background').split(' ');
            var currentFrameX = backgroundArray[7];
            var currentFrameY = backgroundArray[8];
            switch(currentFrameX)
            {
                case '0px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px 0px');
                    break;
                case '-43px':
                    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -86px 0px');
                    break;
                default:
                   $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") 0px 0px');
                    break; 
            }
            chicken.currentMove = 'down';
            chicken.updatePosition({'x': chicken.positionX, 'y': chicken.positionY+chicken.speed});
        },
        chicken.animationRate
    );
};
function chickenUpdatePosition(positionObject)
{
    chicken.positionX = positionObject['x'];
    chicken.positionY = positionObject['y'];
    $('#chicken').css('left', chicken.positionX+'px');
    $('#chicken').css('top', chicken.positionY+'px');
};
function chickenStopDown()
{
    clearInterval(chicken.intervalId);
    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px 0px');
};
function chickenStopLeft()
{
    clearInterval(chicken.intervalId);
    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -43px');
};
function chickenStopRight()
{
    clearInterval(chicken.intervalId);
    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -86px');
};
function chickenStopUp()
{
    clearInterval(chicken.intervalId);
    $('#chicken').css('background', 'url("../assets/chickenSpriteSheet.png") -43px -129px');
};