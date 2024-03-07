

function calcular() {
    let input1 = document.getElementById('idade5').value
    let input2 = document.getElementById('idade-atual').value
    let res = document.getElementById('res')
    let botao = window.document.getElementById('botao')
    let n1 = Number(input1)
    let n2 = Number(input2)
    if (n2>n1) {
    res.innerHTML = '<p>Parabéns</p>'
    res.style.background = 'green'
    } else {
    res.innerHTML = '<p>Impossivel</p>'
    res.style.background = 'red'
    }
}
