def on_button_pressed_a():
    global app
    if select_screen == 0:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            # # # # #
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            # # # # #
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        control.wait_micros(between_time)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        app += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if app == 1:
        basic.show_string(receivedString)
radio.on_received_string(on_received_string)

# script to run the whole menu/console

def on_button_pressed_b():
    global select_screen, hand, sprite
    if select_screen == 0:
        if app == 0:
            select_screen = 1
            basic.show_string("how to use")
            basic.show_string("Hello!")
            basic.show_string("To navigate the menu press A")
            basic.show_string("when you reach the app, you want to use press B")
            basic.show_string("the end now restart the program and use these rules")
        if app == 1:
            select_screen = 1
            basic.show_string("messages")
            while 0 == 0:
                if input.button_is_pressed(Button.A):
                    radio.send_string("Hi!")
                if input.button_is_pressed(Button.AB):
                    radio.send_string("How are you?")
                if input.button_is_pressed(Button.B):
                    radio.send_string("I am a person (maybe).")
        if app == 2:
            select_screen = 1
            basic.show_string("voice record")
            while 0 == 0:
                if input.button_is_pressed(Button.A):
                    record.start_recording(record.BlockingState.BLOCKING)
                if input.button_is_pressed(Button.B):
                    record.play_audio(record.BlockingState.BLOCKING)
        if app == 3:
            select_screen = 1
            basic.show_string("rock paper sciccers")
            while 0 == 0:
                if input.is_gesture(Gesture.SHAKE):
                    hand = randint(1, 3)
                    if hand == 1:
                        basic.show_leds("""
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            """)
                        music.play_sound_effect(music.create_sound_effect(WaveShape.SAWTOOTH,
                                2757,
                                1923,
                                255,
                                255,
                                500,
                                SoundExpressionEffect.NONE,
                                InterpolationCurve.LINEAR),
                            SoundExpressionPlayMode.UNTIL_DONE)
                    elif hand == 2:
                        basic.show_leds("""
                            . # # # .
                            # # # # #
                            # # # # #
                            # # # # #
                            # . # # .
                            """)
                        music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
                                1,
                                600,
                                255,
                                0,
                                100,
                                SoundExpressionEffect.VIBRATO,
                                InterpolationCurve.LOGARITHMIC),
                            SoundExpressionPlayMode.UNTIL_DONE)
                    else:
                        basic.show_leds("""
                            # # . . .
                            # # # . #
                            . . . # .
                            # # # . #
                            # # . . .
                            """)
                        music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
                                3196,
                                1,
                                255,
                                0,
                                100,
                                SoundExpressionEffect.WARBLE,
                                InterpolationCurve.LOGARITHMIC),
                            SoundExpressionPlayMode.UNTIL_DONE)
        if app == 4:
            select_screen = 1
            basic.show_string("tennis for 1")
            basic.show_leds("""
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                """)
            control.wait_micros(300000)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            sprite = game.create_sprite(0, 2)
            while 0 == 0:
                if input.button_is_pressed(Button.A):
                    control.wait_micros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.wait_micros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.wait_micros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    control.wait_micros(300000)
                    sprite.change(LedSpriteProperty.X, 1)
                    sprite.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(200)
                else:
                    sprite.delete()
                    basic.show_leds("""
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        """)
                    basic.show_leds("""
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
                        """)
                    basic.show_leds("""
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        """)
                    basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        """)
                    basic.show_string("GAME OVER")
                    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
hand = 0
select_screen = 0
app = 0
between_time = 0
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
between_time = 1
app = 0
select_screen = 0
record.set_mic_gain(record.AudioLevels.LOW)