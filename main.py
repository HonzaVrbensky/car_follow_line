radio.set_group(92)
radio.set_transmit_power(7)
OVLADANI = False
P1 = 1000
P2 = 1000
def on_button_pressed_a():
    print(P1)
    print(P2)
input.on_button_pressed(Button.A, on_button_pressed_a)
def follow_line():
    global P1, P2
    P1 = pins.analog_read_pin(AnalogPin.P0)
    P2 = pins.analog_read_pin(AnalogPin.P2)
    
    if P1 < 100 and P2 > 200:
            PCAmotor.motor_run(PCAmotor.Motors.M2, -200)
            PCAmotor.motor_run(PCAmotor.Motors.M1, -0)
            
    elif P1 > 100 and P2 < 200:
            PCAmotor.motor_run(PCAmotor.Motors.M2, 0)
            PCAmotor.motor_run(PCAmotor.Motors.M1, -200)
            
    else:
            PCAmotor.motor_run(PCAmotor.Motors.M1, -200)
            PCAmotor.motor_run(PCAmotor.Motors.M2, -200)
           
    print(P1+" "+P2)
basic.forever(follow_line)