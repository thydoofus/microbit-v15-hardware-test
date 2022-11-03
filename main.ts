input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Happy)
    control.waitMicros(242)
})
input.onPinReleased(TouchPin.P0, function () {
    basic.showIcon(IconNames.Sad)
    control.waitMicros(1306)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
