input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.baDing.play()
    light.setBrightness(121)
    light.setAll(0x00ff00)
    pause(100)
    light.setAll(0xffffff)
})
forever(function () {
    light.setAll(0xffffff)
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
