class Expenses {
    constructor(year, month, day, type, description, value) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.value = value
    }
    validateInputFiling(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class DataBase {
    constructor() {
        let id = localStorage.getItem('id')
        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }
        getNextId() {
            let nextId = localStorage.getItem('id')
            return parseInt(nextId) + 1
        }

        saveStorage(expense) {
            let id = this.getNextId()
            localStorage.setItem(id, JSON.stringify(expense))
            localStorage.setItem('id', id)
        }
        recoveryRegisters(){
            let saveExpenses = []
            let id = localStorage.getItem('id')
            for(let i = 1; i <= id; i++){
                let expense = JSON.parse(localStorage.getItem(i))
                if(expense === null){
                    continue
                }
                expense.id = i
                saveExpenses.push(expense)
            }
            return saveExpenses
        }
        cleanInputs(){
            year.value = ''
            month.value = ''
            day.value = ''
            type.value = ''
            description.value = ''
            value.value = ''
        }
        search(account){
            let filterExpenses = []
            filterExpenses = this.recoveryRegisters()

            if(account.year != ''){
                filterExpenses = filterExpenses.filter(reference => reference.year == account.year)
            }
            if(account.month != ''){
                filterExpenses = filterExpenses.filter(reference => reference.month == account.month)
            }
            if(account.day != ''){
                filterExpenses = filterExpenses.filter(reference => reference.day == account.day)
            }
            if(account.type != ''){
                filterExpenses = filterExpenses.filter(reference => reference.type == account.type)
            }
            if(account.description != ''){
                filterExpenses = filterExpenses.filter(reference => reference.description == account.description)
            }
            if(account.value != ''){
                filterExpenses = filterExpenses.filter(reference => reference.value == account.value)
            }
            return filterExpenses
        }
        remove(id){
            localStorage.removeItem(id)
        }
}

const DB = new DataBase()


function filingSuccessInputs(){
    document.getElementById('writeTitle').innerHTML = 'Registro efetuado!'
    document.getElementById('contentWrite').innerHTML = 'Despesa cadastrada com sucesso!'
    document.getElementById('filingButton').innerHTML = 'Cadastrar próxima'
    document.getElementById('titleDivColor').className = 'modal-header text-success'
    document.getElementById('filingButton').className = 'btn btn-success'
        
    return $('#filingSuccessOrError').modal('show')
}

function filingErrorInputs(){
    document.getElementById('writeTitle').innerHTML = 'Erro no preenchimento!'
    document.getElementById('contentWrite').innerHTML = 'Preencha todos os campos!'
    document.getElementById('filingButton').innerHTML = 'Corrigir'
    document.getElementById('titleDivColor').className = 'modal-header text-danger'
    document.getElementById('filingButton').className = 'btn btn-danger'
    
    return $('#filingSuccessOrError').modal('show')
}

function registerExpenses() {
    let saveExpenses = new Expenses(
        year.value,
        month.value,
        day.value,
        type.value,
        description.value,
        value.value
    )

    if(saveExpenses.validateInputFiling()){
        filingSuccessInputs()
        DB.saveStorage(saveExpenses)
        DB.cleanInputs()
    } else {
        filingErrorInputs()
        DB.cleanInputs()
    }
}

function loadExpenseList(){
    let receiveExpenses = []
    receiveExpenses = DB.recoveryRegisters()
    
    return receiveExpenses
}

function searchExpense(){
    let bringExpenses = new Expenses(
        year.value,
        month.value,
        day.value,
        type.value,
        description.value,
        value.value
        )
    DB.search(bringExpenses)
    
    let writeConsultLis = DB.search(bringExpenses)
    writeConsultLis.map((list) => {
        let listOfExpenses = document.getElementById('listOfExpenses')
        let firstRow = listOfExpenses.insertRow()
        firstRow.insertCell(0).innerHTML = `${list.day}/${list.month}/${list.year}`
        firstRow.insertCell(1).innerHTML = list.type
        firstRow.insertCell(2).innerHTML = list.description
        firstRow.insertCell(3).innerHTML = list.value

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = list.id
        btn.onclick = function(){
            DB.remove(list.id)
            
        }
        firstRow.insertCell(4).append(btn)
    })
}