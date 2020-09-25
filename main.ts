// This is for the game over screen, I'm not sure how we would activate it when that happens though.
input.onSwitchMoved(SwitchDirection.Right, function () {
    control.runInParallel(function () {
        while (true) {
            light.showAnimation(light.rainbowAnimation, 9500)
        }
    })
    control.runInParallel(function () {
        while (true) {
            music.playMelody("E F G - A - G - ", 200)
            music.playMelody("E F G - A - G - ", 200)
            music.playMelody("E F G A G A G - ", 200)
            music.playMelody("E F G - A - G - ", 200)
        }
    })
})
input.onGesture(Gesture.TiltLeft, function () {
    light.showRing(
    `blue blue blue blue blue black black blue black black`
    )
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.setButton(ArcadeButton.A, true)
    light.setAll(0x00ff00)
    music.playMelody("G - A - - - - - ", 900)
    pause(1000)
    makerController.player1.setButton(ArcadeButton.A, false)
    light.setAll(0xffffff)
})
input.onGesture(Gesture.TiltRight, function () {
    light.showRing(
    `black black blue black black blue blue blue blue blue`
    )
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.setButton(ArcadeButton.B, true)
    light.setAll(0xff0000)
    music.playMelody("G - A - - - - - ", 900)
    pause(1000)
    makerController.player1.setButton(ArcadeButton.A, false)
    light.setAll(0xffffff)
})
music.setVolume(30)
light.setBrightness(5)
light.setAll(0xffffff)
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
