function verificar(){

    let idade = parseInt(document.getElementById("idade").value);

    if (idade < 16){
        alert("Você, ainda nao pode votar. Que pena!");

    }else{
        if (idade < 18){
            alert("Seu voto é facultativo. Exerça seu direito, vote!")
        }else{
            if(idade > 65){
                alert("Seu voto eh facultativo. Exerça seu direito, vote!")
            }else{
                alert("Seu Voto é obrigatorio!!! Faça vale apena!!")
            }
        }
    }




}