//procurar o botao
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener("click", cloneField)

//executar uma ação
function cloneField() {
    //Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //criei um clone do schedule-item e ele chama newFieldContainer

    //Limpar os campos, quais?
    const fields = newFieldContainer.querySelectorAll("input") //Dentro do meu novo clone, eu achei todo input, uma lista de dois, a lista chama fields
    
    //for cada campo, limpar
    fields.forEach(function(field) { //na minha lista fields, pra cada item, eu aplico a function, que eu criei
        field.value = " " // a função vai pegar o item do momento e atribuir um valor vazio
    })
    
    // poderia ser:
    // fields[0].value = "" //atribuo o valor vazio para o primeiro
    // fields[1].value = "" //atribuo o valor vazio para o segundo

    //Agora que limpei each field da minha lista de fields, meu clone newFieldContainer tem que ser adicionado
    //mas onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    //no documento, acho o id #schedule-items e coloco o meu clone lá
}

//Isso tudo para cada vez que eu clicar no botão, pq eu adicionei um event listener
    

    