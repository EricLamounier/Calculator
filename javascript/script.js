let currentKey = ''
let lastKey = ''
let bttn = document.querySelectorAll('.btn')
let res = 'empty';

const operadores = ['+', '-', '*', 'x', '/']
const opcoes = ['-1', '-2', '=']

let input = document.getElementById('screenContent')
let p = document.getElementById('topScreen')

let currentValue = ''
let operation = ''

bttn.forEach( e => {
    e.addEventListener('click' , () => {
        currentKey = e.getAttribute('data-btn')

        operation += currentKey


        //verifica se for ponto, se ja existe ponto
        if(currentKey == '.'){

            if(checkDot(input.value)){
                return
            }
        }

        currentValue = currentValue + currentKey

        if(operadores.includes(currentKey)){
            p.innerText = input.value + ' ' + currentKey + ' '
            currentValue = ''
             //operadores consecutivos
            if(!checkOperador(operation)){
                operacao(currentKey)
            }

            lastKey = currentKey
            return

        }else if(opcoes.includes(currentKey)){
            options(currentKey)
            currentValue = ''
            operation = ''
            return
        }
        input.value = currentValue
    })
})

function checkOperador(str) {

    let penultimo = str.substring(str.length - 2, str.length - 1)

    if(operadores.includes(penultimo)) {
        return true
    }
    return false
    
}

function checkDot(str) {
    return ( (str.indexOf('.') != -1 || str.length == 0) ? true : false )
}

function operacao(key){

    if(res === 'empty') {
        res = Number(input.value)
        p.innerText = res + ' ' + key + ' '
        return
    }
    
    switch(key) {
        case '+':
            if(lastKey == key){
                input.value = soma(Number(input.value))
                p.innerText = input.value + ' ' + currentKey + ' '
                return
            }
            
            switch(lastKey){
                case '-':
                    input.value = subtracao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case 'x':
                case '*':
                    input.value = multiplicacao(Number(input.value))
                    p.innerText = input.value + ' * '
                break;

                case '/':
                    input.value = divisao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;
            }
        break;

        case '-':
            if(lastKey == key){
                input.value = subtracao(Number(input.value))
                p.innerText = input.value + ' ' + currentKey + ' '
                return
            }

            switch(lastKey){
                case '+':
                    console.log('o')
                    input.value = soma(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case 'x':
                case '*':
                    input.value = multiplicacao(Number(input.value))
                    p.innerText = input.value + ' * '
                break;

                case '/':
                    input.value = divisao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;
            }
        break;

        case 'x':
        case '*':
            if(lastKey == key){
                input.value = multiplicacao(Number(input.value))
                p.innerText = input.value + ' * '
                return
            }

            switch(lastKey){
                case '+':
                    input.value = soma(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case '-':
                    input.value = subtracao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case '/':
                    input.value = divisao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;
            }
        break;

        case '/':
            if(lastKey == key){
                input.value = divisao(Number(input.value))
                p.innerText = input.value + ' ' + currentKey + ' '
                return
            }

            switch(lastKey){
                case '+':
                    input.value = soma(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case '-':
                    input.value = subtracao(Number(input.value))
                    p.innerText = input.value + ' ' + currentKey + ' '
                break;

                case 'x':
                case '*':
                    input.value = multiplicacao(Number(input.value))
                    p.innerText = input.value + ' * '
                break;
            }
        break;
    }
}

function soma(num) {
    return res += num
}

function subtracao(num) {
    return res -= num
}

function multiplicacao(num) {
    return res *= num
}

function divisao(num) {
    return num == 0 ? 'Infinite' : (res/=num).toFixed(5)
}

function options(op){
    if(op == '-1'){ //del
        del()
    }else if(op == '-2'){ //reset
        reset()
    }else if(op == '='){ //equal
        equal(p.innerText[p.innerText.length-1])
    }
}

function del() {
    if(input.value.length > 0){
        input.value = input.value.substring(0, input.value.length-1)
    }
}

function equal(e) {
    let val = input.value

    switch(e){
        case '+':
            p.innerText = res + ' + ' + val
            input.value = soma(Number(val))
            p.innerText = p.innerText + ' = ' + input.value
        break;

        case '-':
            p.innerText = res + ' - ' + val
            input.value = subtracao(Number(val))
            p.innerText = p.innerText + ' = ' + input.value
        break;

        case 'x':
        case '*':
            p.innerText = res + ' * ' + val
            input.value = multiplicacao(Number(val))
            p.innerText = p.innerText + ' = ' + input.value
        break;

        case '/':
            p.innerText = res + ' / ' + val
            input.value = divisao(Number(val))
            p.innerText = p.innerText + ' = ' + input.value
        break;
    }
    res = 'empty'
}

function reset() {
    currentKey = ''
    lastKey = ''
    res = 'empty';
    input.value = '0'
    p.innerText = '0'
    currentValue = ''
    operation = ''
}