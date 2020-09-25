input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (num == 0) {
        makerController.player1.press(ArcadeButton.A)
        music.powerUp.play()
        light.setAll(0x00ff00)
        num += 1
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (num == 0) {
        makerController.player1.press(ArcadeButton.B)
        music.powerUp.play()
        light.setAll(0xff0000)
        num += 1
    }
})
let num = 0
light.setBrightness(50)
light.setAll(0xffffff)
num = 0
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
