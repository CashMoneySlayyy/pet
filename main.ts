input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        `)
    basic.showString("zzzzzzzzzzzzzz")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # # #
        # . # # .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Barbra Streisand")
})
