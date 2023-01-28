alert("Загадайте число");
alert("Помножте задумане число на 2")
alert("Додайте до отриманого результату 7")

const result = Number(prompt("Введіть отриманий результат"));

if (result) {
    let imaginedNum = (result - 7) / 2;    
    alert("Ваше число " + imaginedNum)
} else {
    alert("Ви не ввели число")
}
