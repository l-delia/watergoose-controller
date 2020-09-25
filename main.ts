input.onGesture(Gesture.TiltLeft, function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    light.showRing(
    `blue blue blue blue blue black black blue black black`
    )
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.setButton(ArcadeButton.A, true)
    light.setAll(0x00ff00)
    music.powerUp.play()
    pause(1000)
    makerController.player1.setButton(ArcadeButton.A, false)
    light.setAll(0xffffff)
})
input.onGesture(Gesture.TiltRight, function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    light.showRing(
    `black black blue black black blue blue blue blue blue`
    )
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.setButton(ArcadeButton.B, true)
    light.setAll(0xff0000)
    music.powerUp.play()
    pause(1000)
    makerController.player1.setButton(ArcadeButton.A, false)
    light.setAll(0xffffff)
})
light.setBrightness(10)
light.setAll(0xffffff)
