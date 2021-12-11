let currenttemperature = input.temperature()
let maxTemp = input.temperature()
let minTemp = input.temperature()
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
