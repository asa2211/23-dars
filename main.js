function myRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
function randomMath() {
    let math = ['+','*','/','-'];
    let index = Math.floor(Math.random() * math.length);
    return math[index];
}
let num1 = +prompt('minimal son kiriting');
let num2 = +prompt('maksimal son kiriting');
let exmaple = +prompt('misol sonini kiriting');
function operation(a, b, oper) {
    switch (oper) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}
for (let i = 0; i < exmaple; i++) {
    let randnum1 = myRand(num1, num2);
    let randnum2 = myRand(num1, num2);
    let rand1 = randnum1
    let rand2 = randnum2
    let indexMath = randomMath()
    let answer = operation(rand1, rand2, indexMath)
    let mathmatic = +prompt(rand1 + indexMath + rand2 + "=?");
    alert(Math.floor(answer) == mathmatic ? "to'g'ri javob" : `javob xato to'g'ri javob: ${Math.floor(answer)}`);
}