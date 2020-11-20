var body = document.getElementById('body')
var goodDay = document.querySelector('p#goodDay')
var hour = document.querySelectorAll('p.hour')
var day = document.querySelector('p#day')

function atualizaData() {
    var agora = new Date()
    var days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
                  'outubro', 'novembro', 'dezembro']
    var getday = agora.getDay()
    var getdayNumber = agora.getDate()
    var getMonth = agora.getMonth()
    day.innerHTML = `${days[getday]}, ${getdayNumber} de ${months[getMonth]}`
}

function atualizaHora() {
    var agora = new Date()
    var getHou = agora.getHours()
    var getMin = agora.getMinutes()
    var getSec = agora.getSeconds()

    //Descomente uma das linhas abaixo para testar
    //getHou = 8         //Manhã
    //getHou = 13        //Tarde
    //getHou = 20        //Noite
    //getHou = 3         //Madrugada

    if(getHou < 6) {
        body.className = 'madrugada'
        goodDay.innerHTML = 'Boa madrugada'
    } else if(getHou < 12) {
        body.className = 'manha'
        goodDay.innerHTML = 'Bom dia'
    } else if(getHou < 18){
        body.className = 'tarde'
        goodDay.innerHTML = 'Boa tarde'
    } else {
        body.className = 'noite'
        goodDay.innerHTML = 'Boa noite'
    }

    if(getHou < 10) {
        getHou = `0${getHou}`
    } 
    if(getMin < 10) {
        getMin = `0${getMin}`
    }
    if(getSec < 10) {
        getSec = `0${getSec}`
    }

    hour[0].innerHTML = `${getHou}`
    hour[1].innerHTML = `${getMin}`
    hour[2].innerHTML = `${getSec}`

}
    var atualiza = setInterval(atualizaHora, 1000)

