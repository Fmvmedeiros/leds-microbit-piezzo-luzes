let Som = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let Offset = pins.analogReadPin(AnalogPin.P3)
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
strip.show()
basic.forever(function () {
    while (true) {
        if (pins.analogReadPin(AnalogPin.P3) > Offset + Offset / 3) {
            Som = Math.map(pins.analogReadPin(AnalogPin.P3), Offset, 1023, 0, 255)
            strip.showColor(neopixel.hsl(0, 255, Som))
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
