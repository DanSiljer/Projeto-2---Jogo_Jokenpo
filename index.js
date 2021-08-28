var sim = 0;
var computador = "";
var pontosComputador = 0;
var pontosJogador = 0;
var opcaoEscolhidaJogador = "";
var empates = 0;
var contEmpate = 0; // receberá o contador corrente do for
var escolhaRodadas = 0;
var rodadasCompGanhou = 0;
var rodadasJogadorGanhou = 0;

var opcoesComputador = ['PEDRA','PAPEL', 'TESOURA'];


do{
    
    escolhaRodadas = parseInt(prompt("Informe o número de rodadas: "));
    alert('Você escolheu jogar ' + escolhaRodadas + ' vezes');
    console.log("========================================================");

    
    for(var contador = 0; contador < escolhaRodadas; contador++){
    
        opcaoEscolhidaJogador = prompt("Escolha Pedra, Papel ou Tesoura?").toUpperCase();
        alert('Jogador escolheu: ' + opcaoEscolhidaJogador );
        
        
        if(!opcoesComputador.includes(opcaoEscolhidaJogador)){
            alert("Por favor escolha apenas Pedra, Papel ou Tesoura");
            alert("Vamos recomeçar?");
            console.log("=====================================================")
            break;
        }
 
 
        
        var computador = opcoesComputador[Math.ceil(Math.random() * (opcoesComputador.length - 1))];
        alert('Computador escolheu: ' + computador);
        
        
        
        if(opcaoEscolhidaJogador === "PEDRA" && computador === "PAPEL"){
         
            pontosJogador += 1;
            alert("Papel ganha de pedra (a embrulha)");
        }
        
        if(opcaoEscolhidaJogador === "PEDRA" && computador === "TESOURA"){ 
        
             pontosJogador += 1;
             alert("Pedra quebra tesoura");
         
        }
        
        if(opcaoEscolhidaJogador === "PAPEL" && computador === "TESOURA"){ 
         
             pontosComputador += 1;
             alert("Tesoura ganha do Papel(corta)");
         
         
        }
        
        if(opcaoEscolhidaJogador === "PAPEL" && computador === "PEDRA"){
            
            pontosJogador += 1;
            alert("Papel ganha da Pedra (a embrulha)");
         
        }
        
        if(opcaoEscolhidaJogador === "TESOURA" && computador === "PEDRA"){ 
 
            pontosComputador += 1;
            alert("Pedra quebra tesoura (quebra)");
         
        }
        
        
        if(opcaoEscolhidaJogador === computador){
         
          alert("Jogador e computador escolheram " + opcaoEscolhidaJogador);
          empates += 1;
          contEmpate += 1;
         
        }
        
        if(pontosJogador > pontosComputador){
          
            rodadasJogadorGanhou += 1;
             
        }
        
        if(pontosJogador < pontosComputador)
        {
            rodadasCompGanhou += 1;
          
        }
        
    
    }
    console.log("======================================================")
    alert("Jogador ganhou " + pontosJogador + " pontos e ganhou " + rodadasJogadorGanhou + " rodadas");
    
    alert("Computador ganhou " + pontosComputador + " pontos e ganhou " + rodadasCompGanhou + " rodadas");
    
    if(empates > 0){
        alert("Tivemos " + contEmpate + " rodada (s) empate");
    }
    
    console.log("=====================================================")
    continuar = prompt("Fim de jogo. Deseja continuar? (Resp. S / N):").toUpperCase();
    
    // Reiniciamos as variáveis
    empates = 0;
    contEmpate = 0;
    pontosJogador = 0;
    pontosComputador = 0;
    rodadasCompGanhou = 0;
    rodadasJogadorGanhou = 0;
    
}while(continuar === "S")