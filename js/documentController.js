function documentController()
{
	$(document).on('keydown',
        function(e)
        {
            var pressedKey = e.keyCode || e.which;
            switch(pressedKey)
            {
                //s
                case 83:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'goDown'}]);
                    break;
                //w
                case 87:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'goUp'}]);
                    break;
                //a
                case 65:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'goLeft'}]);
                    break;
                //d
                case 68:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'goRight'}]);
                    break;
                default:
                    console.log(pressedKey);
                    break;
            }
        }
    );
    $(document).on('keyup',
        function(e)
        {
            var pressedKey = e.keyCode || e.which;
            switch(pressedKey)
            {
                //s
                case 83:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopDown'}]);
                    break;
                //w
                case 87:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopUp'}]);
                    break;
                //a
                case 65:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopLeft'}]);
                    break;
                //d
                case 68:
                    $(document).trigger('updateObject', [{'object': 'player', 'action': 'stopRight'}]);
                    break;
                default:
                    console.log(pressedKey);
                    break;
            }
        }
    );
    $(document).on('updateObject',
        function(e, dataObject)
        {
            switch(dataObject['object'])
            {
                case 'player':
                    switch(dataObject['action'])
                    {
                        case 'goUp':
                            player.goUp();
                            break;
                        case 'goDown':
                            player.goDown();
                            break;
                        case 'goLeft':
                            player.goLeft();
                            break;
                        case 'goRight':
                            player.goRight();
                            break;
                        case 'stopUp':
                            player.stopUp();
                            break;
                        case 'stopDown':
                            player.stopDown();
                            break;
                        case 'stopLeft':
                            player.stopLeft();
                            break;
                        case 'stopRight':
                            player.stopRight();
                            break;
                        default:
                            player.updatePosition({'x': dataObject['x'], 'y': dataObject['y']});
                            break;
                    }
                    break;
                case 'chicken':
                    switch(dataObject['action'])
                    {
                        case 'randomMove':
                            chicken.randomMove();
                            break;
                    }
                    break;
                default:
                    console.log('game object not implemented');
                    break;
            }
            collision.checkCollision('player', 'chicken');
        }
    );
};