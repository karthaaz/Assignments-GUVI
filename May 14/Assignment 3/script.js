
let calculator = document.createElement("calculator")

let header = document.createElement("header")
header.setAttribute("class", "header")
let numbers = document.createElement("div")
numbers.setAttribute("class", "numbers")




let title = document.createElement("h1")
title.setAttribute("id", "title")
title.innerText = "Calculator"
header.appendChild(title)


let description = document.createElement("p")
description.setAttribute("id", "description")
description.innerText = "Basic calculator"
header.appendChild(description)

let input = document.createElement("input")
input.setAttribute("id", "result")


numbers.appendChild(input)


let clear = document.createElement("button")
clear.setAttribute("id", "clear")
clear.innerText = 'C'
numbers.appendChild(clear)

let back = document.createElement("button")
back.setAttribute("id", "back")
back.innerHTML = '&#8592'
numbers.appendChild(back)

let dot = document.createElement("button")
dot.setAttribute("id", "dot")
dot.innerText = "."
numbers.appendChild(dot)

let mul = document.createElement("button")
mul.setAttribute("id", "mul")
mul.innerText = "X"
numbers.appendChild(mul)

let num7 = document.createElement("button")
num7.setAttribute("id", "7")
num7.innerText = "7"
numbers.appendChild(num7)


let num8 = document.createElement("button")
num8.setAttribute("id", "8")
num8.innerText = "8"
numbers.appendChild(num8)

let num9 = document.createElement("button")
num9.setAttribute("id", "9")
num9.innerText = "9"
numbers.appendChild(num9)

let mod = document.createElement("button")
mod.setAttribute("id", "mod")
mod.innerText = "/"
numbers.appendChild(mod)

let num4 = document.createElement("button")
num4.setAttribute("id", "4")
num4.innerText = "4"
numbers.appendChild(num4)

let num5 = document.createElement("button")
num5.setAttribute("id", "5")
num5.innerText = "5"
numbers.appendChild(num5)

let num6 = document.createElement("button")
num6.setAttribute("id", "6")
num6.innerText = "6"
numbers.appendChild(num6)

let subtract = document.createElement("button")
subtract.setAttribute("id", "subtract")
subtract.innerText = "-"
numbers.appendChild(subtract)

let num1 = document.createElement("button")
num1.setAttribute("id", "1")
num1.innerText = "1"
numbers.appendChild(num1)

let num2 = document.createElement("button")
num2.setAttribute("id", "2")
num2.innerText = "2"
numbers.appendChild(num2)

let num3 = document.createElement("button")
num3.setAttribute("id", "3")
num3.innerText = "3"
numbers.appendChild(num3)

let add = document.createElement("button")
add.setAttribute("id", "add")
add.innerText = "+"
numbers.appendChild(add)

let num0 = document.createElement("button")
num0.setAttribute("id", "0")
num0.innerText = "0"
numbers.appendChild(num0)



let num00 = document.createElement("button")
num00.setAttribute("id", "00")
num00.innerText = "00"
numbers.appendChild(num00)


let equal = document.createElement("button")
equal.setAttribute("id", "equal")
equal.innerText = "="
numbers.appendChild(equal)






calculator.appendChild(header)
calculator.appendChild(numbers)

document.body.appendChild(calculator)

const screenDisplay = document.querySelector('.result')
const buttons_s = document.querySelectorAll('button')

let calculation = []
let full_string
function calculate(button) {
    const value = button.textContent

    if (value == "C") {
        calculation = []
        screenDisplay.textContent = '.'
    }

    else if (value == "=") {
        screenDisplay.textContent = eval(full_string)

    }
    else if (value == (innerHTML='&#8592')) {
        screenDisplay.textContent = eval(full_string)

    }
    else {


        calculation.push(value)

        full_string = calculation.join('')
        screenDisplay.textContent = full_string
    }
}

buttons_s.forEach(button => button.addEventListener('click', () => calculate(button)));