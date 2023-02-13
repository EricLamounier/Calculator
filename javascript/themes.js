//Theme 1
//Button theme
function buttonTheme(theme) {
    let bodyClass = document.getElementById('body')

    moveButton(theme)

    bodyClass.className = ''
    if(theme == 1){
        bodyClass.classList.add('theme1')
    }else if(theme == 2){
        bodyClass.classList.add('theme2')
    }else if(theme == 3){
        bodyClass.classList.add('theme3')
    }
}

function moveButton(theme) {
    let button = document.getElementById('circle')

    if(theme == 1) { //theme 1
        button.style.left = '9%'
    }else if(theme == 2) { //theme 2 
        button.style.left = '39%'
    }else if(theme == 3) { //theme 3 
        button.style.left = '69%'
    }
}