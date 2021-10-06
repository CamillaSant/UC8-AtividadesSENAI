//Sistema de CONTAGEM E CLASSIFICAÇÃO de peças
window.alert("Bem-vindo ao sistema de cadastro e classificação de peças")
var PeçasCarro = []
var cond = "S"
    var NovaPeça = window.prompt ("Digite o nome da peça que deseja cadastrar:")
    if (NovaPeça.length >= 3){
        PeçasCarro.push(NovaPeça)
        window.alert("Peça " + NovaPeça + " cadastrada com sucesso!")
        while (PeçasCarro.length <3 && cond == "S"){
            var cond = window.prompt ("Deseja cadastrar mais peças?\n [Digite S para sim ou N para não]").toUpperCase()
            if (cond == "S"){
                var NovaPeça = window.prompt ("Digite o nome da peça que deseja cadastrar:")
                    if (NovaPeça.length >= 3){
                        PeçasCarro.push(NovaPeça)
                        window.alert("Peça " + NovaPeça + " cadastrada com sucesso!")
                    } else {
                        window.alert("Numero de caracteres inválido!")
                    }
            }
        }
    } else {
        window.alert("Numero de caracteres inválido!")
    }

window.alert("Total de " + PeçasCarro.length + " Peças cadastradas: " + PeçasCarro)