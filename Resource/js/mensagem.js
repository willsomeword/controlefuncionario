function RetornarMsg(n){
    var msg = "";


    switch(n) {


        case -5:
            msg ="Senha invalida.";
            break;


        case -4:
            msg ="O login é invalido.";
            break;


        case -3:
            msg ="Sua busca nao Retornou Nenhum Dado.";
            break;

        case -2:
            msg ="ocorreu um erro na operação, tente mais  tarde";
            break;


        case -1:
            msg ="ocorreu um erro na operação, tente mais  tarde";
            break;
        
        case 0:

            msg ="preencher o(s) campo(s) obrigatorio(s)";        
            break;
       
        case 1:

            msg ="açao realizada com sucesso";
            break;
    
    }

    return msg;
}

function MensagemLoginInvalido(){
    toastr.warning(RetornarMsg(-4));
}

function MensagemSenhaInvalida(){
    toastr.warning(RetornarMsg(-5));
}

function MensagemCamposObrigatorio(){
    toastr.warning(RetornarMsg(0));
}
function MensagemSucesso(){
    toastr.success(RetornarMsg(1));
}
function MensagemErro(){
    toastr.error(RetornarMsg(-1));
}
function MensagemExcluirUso(){
    toastr.error(RetornarMsg(-2));
}
function MensagemRegistronaoencontrado(){
    toastr.success(RetornarMsg(-3));
}
function MensagemCustomizada(texto) {
    toastr.info(texto);
}
