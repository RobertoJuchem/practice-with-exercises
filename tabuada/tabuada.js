function multiply(num1, num2){
    return num1 * num2
}

function getMultplications(num){
    let results = []
    for(let i = 1; i <= 10; i++){
        results.push(multiply(num, i))
    }
    return results
}

function solve(num){
    let resultList = getMultplications(num)
    console.log(resultList)
    document.getElementById('response1').value = `${num} X 1 = ${resultList[0]}`
    document.getElementById('response2').value = `${num} X 2 = ${resultList[1]}`
    document.getElementById('response3').value = `${num} X 3 = ${resultList[2]}`
    document.getElementById('response4').value = `${num} X 4 = ${resultList[3]}`
    document.getElementById('response5').value = `${num} X 5 = ${resultList[4]}`
    document.getElementById('response6').value = `${num} X 6 = ${resultList[5]}`
    document.getElementById('response7').value = `${num} X 7 = ${resultList[6]}`
    document.getElementById('response8').value = `${num} X 8 = ${resultList[7]}`
    document.getElementById('response9').value = `${num} X 9 = ${resultList[8]}`
    document.getElementById('response10').value = `${num} X 10 = ${resultList[9]}`

}