let nomeHeroi = "SuperDev"
let qteExperiencia = 7001
let resul

if (qteExperiencia <= 1000){
    resul = "Ferro"
}else if (qteExperiencia <= 2000 ){
    resul = "Bronze"
}else if (qteExperiencia <= 5000 ){
    resul = "Prata"
}else if (qteExperiencia <= 7000 ){
    resul = "Ouro"
}else if (qteExperiencia <= 8000 ){
    resul = "Platina"
}else if (qteExperiencia <= 9000 ){
    resul = "Ascendente"
}else if (qteExperiencia <= 10000 ){
    resul = "Imortal"
}else {
    resul = "Radiante"
}

console.log(" O heroi de nome " + nomeHeroi + " está no nivel de " + resul)

