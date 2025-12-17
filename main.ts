// # Micro:Bit Shake Duel
// 
// Goal: Develop a fun 2 players game with Micro:Bit
// 
// Rules: Shake the Micro:Bit faster than your opponent to win the duel. The first to win 2 duels wins the match.
// 
// To win a duel: shake the Micro:Bit 25 time before your opponent does the same.
// 
// On start:
// 
// ..Initialize variables: numberOfShake, numberOfWin, otherNumberOfWin to 0
// 
// ..Set your radio group number to the same value as your opponent's radio group number
// 
// On shake:
// 
// ..Increase numberOfShake by 1
// 
// ..If numberOfShake reach 25:
// 
// ....Increase numberOfWin by 1
// 
// ....Reset numberOfShake to 0
// 
// ....Send numberOfWin to the opponent
// 
// ....If numberOfWin reach 2:
// 
// ......You win !
// 
// On radio received number:
// 
// ..Set this number as a new value for otherNumberOfWin
// 
// ..Reset numberOfShake to 0
// 
// ..If otherNumberOfWin reach 2:
// 
// ....You lose !
radio.onReceivedNumber(function (receivedNumber) {
    otherCompleted = receivedNumber
    music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.InBackground)
    shake = 0
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
