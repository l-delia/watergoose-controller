input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.setBrightness(121)
    light.setAll(0x00ff00)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
