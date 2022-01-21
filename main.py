scene.set_background_color(9)
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . . f f 1 1 1 1 1 1 f f . . . . 
            . . . f f 1 1 1 1 f f . . . . . 
            . . . f f f 1 1 f f f . . . . . 
            . . . f . f f f f . f . . . . . 
            . . f f f . f f . f f f . . . . 
            . . f . f . . . . f . f . . . . 
            . . f . f . . . . f . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)