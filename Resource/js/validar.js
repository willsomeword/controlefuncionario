function Validarcampos(n_tela){

    var ret = true;





    switch(n_tela){
        case 1: //tela setor, tipo
        
        if($("#nome").val().trim() == "")
            ret = false;

            NotificarCampos('form_cad');


        break;
    
    }
 



    if (!ret)
    MensagemCamposObrigatorio();

    else
        Load();




    return ret;
}


