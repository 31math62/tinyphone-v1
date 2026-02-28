input.onButtonPressed(Button.A, function () {
    if (select_screen == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            # # # # #
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(between_time)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        app += 1
    }
})
// script to run the whole menu/console reading
input.onButtonPressed(Button.AB, function () {
    if (select_screen == 0) {
        if (app == 0) {
            basic.showString("how to use")
        }
        if (app == 1) {
            basic.showString("messages")
        }
        if (app == 2) {
            basic.showString("voice record")
        }
        if (app == 3) {
            basic.showString("rock paper sciccers")
        }
        if (app == 4) {
            basic.showString("tennis for 1")
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
// script to run the whole menu/console
input.onButtonPressed(Button.B, function () {
    if (select_screen == 0) {
        if (app == 1) {
            select_screen = 1
            basic.showString("messages")
            while (0 == 0) {
                if (app == 1) {
                    select_screen = 1
                    basic.showString("messages")
                    while (0 == 0) {
                        if (input.buttonIsPressed(Button.A)) {
                            radio.setTransmitPower(100)
                            radio.sendString("Hi!")
                        }
                        if (input.buttonIsPressed(Button.AB)) {
                            radio.setTransmitPower(100)
                            radio.sendString("How are you?")
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            radio.setTransmitPower(100)
                            radio.sendString("I am a person (maybe).")
                        }
                    }
                }
            }
        }
        if (app == 2) {
            select_screen = 1
            basic.showString("voice record")
            while (0 == 0) {
                if (input.buttonIsPressed(Button.A)) {
                    record.startRecording(record.BlockingState.Blocking)
                }
                if (input.buttonIsPressed(Button.B)) {
                    record.playAudio(record.BlockingState.Blocking)
                }
            }
        }
        if (app == 3) {
            select_screen = 1
            basic.showString("rock paper sciccers")
            while (0 == 0) {
                if (input.buttonIsPressed(Button.A)) {
                    hand = randint(1, 3)
                    if (hand == 1) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 2757, 1923, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
                    } else if (hand == 2) {
                        basic.showLeds(`
                            . # # # .
                            # # # # #
                            # # # # #
                            # # # # #
                            # . # # .
                            `)
                        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 600, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
                    } else {
                        basic.showLeds(`
                            # # . . .
                            # # # . #
                            . . . # .
                            # # # . #
                            # # . . .
                            `)
                        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3196, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
                    }
                }
            }
        }
        if (app == 4) {
            select_screen = 1
            basic.showString("tennis for 1")
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            control.waitMicros(300000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            sprite = game.createSprite(0, 2)
            while (0 == 0) {
                if (input.buttonIsPressed(Button.A)) {
                    control.waitMicros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.waitMicros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.waitMicros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.waitMicros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(200)
                } else {
                    sprite.delete()
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    basic.showLeds(`
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
                        `)
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showString("GAME OVER")
                    basic.clearScreen()
                }
            }
        }
    }
})
let sprite: game.LedSprite = null
let hand = 0
let select_screen = 0
let app = 0
let between_time = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
between_time = 1
app = 1
select_screen = 0
record.setMicGain(record.AudioLevels.Low)
