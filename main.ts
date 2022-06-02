radio.setGroup(92)
radio.setTransmitPower(7)
let OVLADANI = false
let P1 = 1000
let P2 = 1000
let speed_1 = -200
let speed_2 = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    console.log(P1)
    console.log(P2)
})
basic.forever(function follow_line() {
    
    P1 = pins.analogReadPin(AnalogPin.P0)
    P2 = pins.analogReadPin(AnalogPin.P2)
    if (P1 < 100 && P2 > 200) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, speed_1)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed_2)
    } else if (P1 > 100 && P2 < 200) {
        PCAmotor.MotorRun(PCAmotor.Motors.M2, speed_2)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed_1)
    } else {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed_1)
        PCAmotor.MotorRun(PCAmotor.Motors.M2, speed_1)
    }
    
    console.log(P1 + " " + P2)
})
