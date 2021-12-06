function calc(tipo, valor){
    if(tipo === 'acao') {

        if(valor === 'c') {
            //limpa o visor
            document.getElementById('visor').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('visor').value += valor
        }

        if(valor === '=') {
            var valor_visor = eval(document.getElementById('visor').value)
            document.getElementById('visor').value = valor_visor
        }

    } else if(tipo === "valor") {
        //para mostrar os números no visor
        // concatenado value com valor para um número não sobrepor o outro
        document.getElementById('visor').value += valor
        }
    }