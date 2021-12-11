input.onButtonPressed(Button.A, function () {
    basic.showNumber(minTemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxTemp)
})
let minTemp = 0
let maxTemp = 0
let currenttemperature = input.temperature()
maxTemp = input.temperature()
minTemp = input.temperature()
basic.forever(function () {
    basic.showString(".")
    currenttemperature = input.temperature()
    if (currenttemperature < minTemp) {
        minTemp = input.temperature()
    }
    if (currenttemperature > maxTemp) {
        maxTemp = input.temperature()
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
