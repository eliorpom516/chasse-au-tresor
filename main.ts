input.onGesture(Gesture.Shake, function () {
    if (true) {
        Pas += 1
    }
})
let Admin = 0
let Temps = 0
let Pas = 0
let Temps_sans_A_pressé = 0
let Pression_A = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . # # .
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
basic.clearScreen()
basic.forever(function () {
    while (true) {
        basic.pause(1000)
        Temps += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && Temps_sans_A_pressé <= 1000) {
        Temps_sans_A_pressé = 0
        Pression_A += 1
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
    if (Pression_A >= 5 && Temps_sans_A_pressé <= 3000) {
        Admin = 1
        basic.showIcon(IconNames.Confused)
    }
})
basic.forever(function () {
    while (false) {
        basic.pause(1)
        Temps_sans_A_pressé += 1
    }
})
