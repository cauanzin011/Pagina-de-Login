const senha =
 document.getElementById("senha");
const email =
 document.getElementById("email");
const btnOlho =
 document.getElementById("btnOlho");
const entrar =
 document.getElementById("entrar");
const mensagem =
 document.getElementById("mensagem");
const imagem = 
 document.getElementById("imagem");
function olho(){
    if(senha.type === "password"){
        senha.type = "text";
        imagem.src = "./olhoAberto.png"
    }else{
        senha.type = "password";
        imagem.src = "./olhoFechado.png"
    }
}
    function input(){
    if(senha.value!== "" && email.value!== ""){
        mensagem.innerText = "Seja bem-vindo!"
        mensagem.style.color = "#4ADE80"
    }else{
        mensagem.innerText = "Preencha os dois campo."
        mensagem.style.color = "#F87171"
    }}

entrar.addEventListener("click", input)