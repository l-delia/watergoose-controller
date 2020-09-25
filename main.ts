input.buttonB.onEvent(ButtonEvent.LongClick, function () {
    makerController.player1.press(ArcadeButton.B)
    music.powerUp.play()
    light.setAll(0xff0000)
})
input.onGesture(Gesture.TiltLeft, function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    light.showRing(
    `blue blue blue blue blue black black blue black black`
    )
})
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    makerController.player1.press(ArcadeButton.A)
    music.powerUp.play()
    light.setAll(0x00ff00)
})
input.onGesture(Gesture.TiltRight, function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    light.showRing(
    `black black blue black black blue blue blue blue blue`
    )
})
light.setBrightness(10)
light.setAll(0xffffff)
