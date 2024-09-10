const textoInput = document.getElementById('qualquercoisa')
const botao = document.getElementById('idbotao')
const mensagem = document.getElementsByTagName('p')

botao.addEventListener("click", function () {
    const valorTexto = textoInput.value;
    if(valorTexto == ""){
        mensagem[0].textContent = 'escreva alguma coisa'
    } else{
        mensagem[0].textContent = `Voce escreveu ${valorTexto}`
    }
})