function Tabela(idNome,idDesc,idPreco) {

    this.idNome =  idNome = document.getElementById("id_nome").value;
    this.idDesc =  idDesc = document.getElementById("id_desc").value;
    this.idPreco =  idPreco = document.getElementById("id_preco").value;

    var table = document.getElementById("table");
   
    // Se os Campos vieram vazios, return false. (OBS: Se colocar espaço, ele é um campo válido!!!)
    if(idNome == "" || idDesc == "" || idPreco ==""){

        alert("Inserir campos");
        return false;
    }else{
   
    var numLinha = table.rows.length;
    
    var numColuna = table.rows[numLinha-1].cells.length;

    var novaLinha = table.insertRow(numLinha);

    for (var i = 0; i < numColuna; i=5) {
        
        novaColuna = novaLinha.insertCell(i);
        novaColuna.innerHTML = "R$ " + idPreco;

        novaColuna = novaLinha.insertCell(i);
        novaColuna.innerHTML = idDesc;

        novaColuna = novaLinha.insertCell(i);
        novaColuna.innerHTML = idNome;




        // text correto
        // novaColuna3 = novaLinha.insertCell(i);
        // novaColuna3.innerHTML = "R$ " + idPreco;

        // novaColuna2 = novaLinha.insertCell(i);
        // novaColuna2.innerHTML = idDesc;

        // novaColuna = novaLinha.insertCell(i);
        // novaColuna.innerHTML = idNome;
      
    }

    alert("Item Cadastrado");
    return true;
    }
    
}

    
