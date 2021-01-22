function enviaResposta(){
    let resposta = new Array(10)
    let pontos = 0
    for(var i = 0; i < 10; i++){
        resposta[i] = document.getElementById(`certa${i+1}`).checked
        
        if(resposta[i] == true){
            (pontos+=10)
        }
    }

    document.getElementById("pontuacao").textContent="Pontuação: " + pontos
}


















// (function(){
//     startGame();

//     function startGame(){
//         for(var i = 0; i < 10; i++){
//             var card = document.querySelector("#card" + i);
//             card.style.left = (i === 0 || i === 10) ? 5 + "px" : i % 8 * 100 + 5 + "px";
//             card.style.top = i < 3 ? 1 + "px" : 510 + "px";
            
//         }

//     }
// }());