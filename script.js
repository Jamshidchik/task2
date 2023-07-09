let num1 = +prompt("Kvadrat tomonini kiriting:")
while(isNaN(num1) || num1 == 0) {
    num1 = +prompt("Qaytadan urinib ko'ring:")
}
let chess = ""
for (let a = 0; a < num1; a++) {
    for (let b = 0; b < num1; b++) {
        if (a == b || a == 0 || b == 0 || a == num1 - 1 || b == num1 - 1) {
            chess = chess + "✅"
        } else {
            chess += "⬜"
        }
    }
    console.log(chess);
    chess = ""
}
