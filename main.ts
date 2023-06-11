let N = 0
let A = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(N)
    N += 1
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        if (A <= N) {
            basic.showNumber(A ** 2)
            A += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(N)
    N += -1
})
