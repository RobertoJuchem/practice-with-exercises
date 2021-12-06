function calcTip (payment, tip) {
    let tipValue = payment * (tip/100)
    return tipValue
}

//onChange é utilizado para realizar determinada ação após alguma mudança
window.onchange = function () {
    let account = parseFloat(document.getElementById('account').value)
    let tipPercentage = parseFloat(document.getElementById('percentage').value)
    document.getElementById('percentageValue').innerHTML = `${tipPercentage}%`
    let tipValue = calcTip(account, tipPercentage)
    let finalAccountValue = account + tipValue
    document.getElementById('tipAmount').value = tipValue.toFixed(2)
    document.getElementById('totalAmount').value = finalAccountValue.toFixed(2)
}