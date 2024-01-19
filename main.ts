input.onButtonPressed(Button.A, function () {
    led.plotBrightness(x, y, 0)
    if (input.buttonIsPressed(Button.B)) {
        led.plotBrightness(x, y, 180)
    }
    if (x <= 5) {
        x = x + 2
    } else if (x > 5) {
        y = y + 2
        x = 0
    }
    if (y > 5) {
        x = 0
        y = 0
    }
    led.plotBrightness(x, y, 100)
})
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 0)) {
    	
    }
})
let y = 0
let x = 0
basic.showLeds(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `)
