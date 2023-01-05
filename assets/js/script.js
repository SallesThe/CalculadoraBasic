let inputValueOne = document.getElementById('ipt-n1');
let inputValueTwo = document.getElementById('ipt-n2');
let select = document.getElementById('selecao');
let btnCalc = document.getElementById('btnCalc');
let res = document.getElementById('res');


btnCalc.addEventListener('click', () => {
    let n1 = Number(inputValueOne.value);
    let n2 = Number(inputValueTwo.value);
    let operacao = select.value;
    let result;

    switch(select.value) {
        case "soma": result = n1 + n2
        break;
        case "subtração": result = n1 - n2
        break;
        case "multiplicação": result = n1 * n2
        break;
        case "divisão": result = n1 / n2
        break;
    }

    res.innerHTML = `O resultado da ${operacao} entre ${n1} e ${n2} é <strong>${result}</strong>`
})