scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.powerUp.play()
    game.over(true, effects.starField)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (YETT.vy == 0) {
        YETT.vy = -150
    }
})
let YETT: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666444444444222222222222222222224444446666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666664444444444222222222222222222244444446666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666664444444444222222222222222222244444466666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666444444444422222222222222222444444466666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666664444444442222222222222222444444666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666444444444222222222222222444444666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666664444444222222222222224444444666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666111111116666666666666444444222222222222224444446666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666661111111111111111111666666644444444222222222222224444446666666666666666666666666611111111111166666666666666666666666666666666666666666
    6666666666666666666666611111111111111111111111111166444444444222222222222224444466666666666666666666666661111111111111111116666666666666666666666666666666666666
    6666666666666666666611111111111111111111111111111114444444444222222222222224444466666666666666666666666611111111111111111111116666666666666666666666666666666666
    6666666666666661611111111111111111111111111111111144444444442222222222222224444466666666666666666666661111111111111111111111111166666666666666666666666666666666
    6666666666666111111111111111111111111111111111111144444444422222222222222224444466666666666666666666611111111111111111111111111111666666666666666666666666666666
    6666666666611111111111111111111111111111111111111111444442222222222222222224444466666666666666666666611111111111111111111111111111116666666666666666666666666666
    6666666666661111111111111111111111111111111111111111444442222222222222222244444eee666666611111111111111111111111111111111111111111111666666666666666666666666666
    66666666666611111111111111111111111111111111111111eee44442222222222222222444eeeeee666611111111111111111111111111111111111111111111111666666666666666666666666666
    66666666666661111111111111111111111111111111111111eeeeeee2222222222222222eeeeeeeee666111111111111111111111111111111111111111111111111666666666666666666666666666
    66666666666666111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee661111111111111111111111111111111111111111111111111666666666666666666666666666
    66666666666666666111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666111111111111111111111111111111111111111111111111666666666666666666666666666
    66666666666666666661111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666611111111111111111111111111111111111111111111116666666666666666666666666666
    6666666666666666666666661111111111111111111111116eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666661111111111111111111111111111111111111111111116666666666666666666666666666
    6666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666111111111111111111111111111111111111111111116666666666666666666666666666
    6666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666661111111111111111111111111111111111111111166666666666666666666666666666
    6666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666111111111111111111111111111111111111111166666666666666666666666666666
    6666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666661111111111111111111111111111111111111666666666666666666666666666666
    6666666666666666666666666666668866666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666661111111111111111111111111111111116666666666666666666666666666668
    6666666666666666666666666666668886666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666611111111111111111111111111111116666666666666666666666666666688
    666666666666666666666666666668888666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666111111111111111111111111111166666666666666666666666666666888
    666666666666666666666666666688888866666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666111111111111111111116666666666666666666666666666666888
    666666666666666666666666666888888886666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666661111111111111666666666666666666666666666666668888
    66666666666666666666666666888888888866666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666666666666666666666666666666666666688888
    66666666666666666666666666888888888886666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666886666666666666666666666666666666666666666666666666666666888888
    6666666666666666666666666888888888888866666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666668886666666666666666666666666666666666666666666666666666668888888
    666666666666666666666666888888888888888666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666688886666666666666666666666666666666666666666666666666666668888888
    6666666666666666666666668888888888888888866eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666668888888666666666666666666666666666666666666666666666666666688888888
    66666666666666666666666888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666688888888666666666666666666666666666666666666666666666666666888888888
    666666666666666666666688888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666888888888666666666666666666666666666666666666666666666666666888888888
    66666666666666666666688888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6668888888888666666666666666666666666666666666666666666666666668888888888
    6666666666666666666688888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6688888888888866666666666666666666666666666666666666666666666888888888888
    666666666666666666688888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888888888888886666666666666666666666666666666666666666666668888888888888
    6666666666666666668888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888888888888888666666666666666666666666666666666666666666688888888888888
    66666666666666666888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888888888888888666666666666666666666666666666666666666666888888888888888
    66666666666666668888888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888888888888888866666666666666666666666666666666666666688888888888888888
    666666666666666688888888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeee888888888888888888888886666666666666666666666666666666666668888888888888888888
    66666666666666688888888888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeee888888888888888888888888888866666666666666666666666666666668888888888888888888888
    6666666666666688888888888888888888888888888888888888888888eeeeeeeeeeeeeeeeee888888888888888888888888888888886666666666666666666666666666888888888888888888888888
    6666666666666888888888888888888888888888888888888888888888888eeeeeeeeeeeee88888888888888888888888888888888888866666666666666666666666688888888888888888888888888
    6666666666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666688888888888888888888888888888
    6666666666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666688888888888888888888888888888888
    6666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666688888888888888888888888888888888888
    6666666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888888888888888888888888888888888888
    6666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
YETT = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . f f 2 2 f f f f f f f f . . 
    . . f 2 2 2 f 9 9 9 1 1 1 f . . 
    . . f 2 2 2 f f 9 9 9 9 f f . . 
    . . f 2 2 2 2 f f f f f f . . . 
    . . f 2 2 2 2 2 2 2 2 f . . . . 
    . . f 2 2 2 2 2 2 2 2 f . . . . 
    . . f 2 2 2 2 2 2 2 2 f . . . . 
    . . f f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 f 2 2 2 f . . . . 
    . . . f 2 2 f . f 2 2 f . . . . 
    . . . f f f f . f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(YETT, 100, 0)
scene.cameraFollowSprite(YETT)
tiles.setTilemap(tilemap`level3`)
YETT.ay += 350
game.onUpdate(function () {
    YETT.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . f f 2 2 f f f f f f f f . . 
        . . f 2 2 2 f 9 9 9 1 1 1 f . . 
        . . f 2 2 2 f f 9 9 9 9 f f . . 
        . . f 2 2 2 2 f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . . f f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 f 2 2 2 f . . . . 
        . . . f 2 2 f . f 2 2 f . . . . 
        . . . f f f f . f f f f . . . . 
        `)
    if (YETT.vx < 0) {
        YETT.image.flipX()
    } else if (YETT.x % 2 == 0) {
        YETT.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f f 2 2 f f f f f f f f . . 
            . . f 2 2 2 f 9 9 9 1 1 1 f . . 
            . . f 2 2 2 f f 9 9 9 9 f f . . 
            . . f 2 2 2 2 f f f f f f . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 f 2 2 2 2 f . . . 
            . . f 2 2 2 f . f 2 2 2 f . . . 
            . . f f f f . . . f f f f . . . 
            `)
    }
})
