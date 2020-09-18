input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.powerUp.play()
    light.setAll(0x00ff00)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    music.powerUp.play()
    light.setAll(0xff0000)
})
light.setBrightness(50)
light.setAll(0xffffff)
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
