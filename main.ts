radio.onReceivedNumber(function (receivedNumber) {
    otherCompleted = receivedNumber
    music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.InBackground)
    if (otherCompleted == 2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    led.plot(shake % 5, shake / 5)
    shake += 1
    if (shake == 25) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 500), music.PlaybackMode.InBackground)
        basic.pause(1000)
        basic.clearScreen()
        shake = 0
        completed += 1
        radio.sendNumber(completed)
        if (completed == 2) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            control.reset()
        }
    }
})
let completed = 0
let shake = 0
let otherCompleted = 0
radio.setGroup(1)
otherCompleted = 0
shake = 0
completed = 0
