function CarregarMeusDados() {



    var dados = GetTnkValue();
    var id_user = dados.funcionario_id;
    
    var dados = {
        endpoint: "DetalharMeusDados",
        id_user: id_user
    }


    $.ajax({
        type: "POST",
        url: BASE_URL_AJAX("funcionario_api"),
        data: JSON.stringify(dados),

        headers: {
            'Authorization' : 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        },

        success: function (dados_ret) {
            var resultado = dados_ret["result"];
            //console.log(resultado);
            $("#Nome").val(resultado.nome);
            $("#email").val(resultado.login);
            $("#telefone").val(resultado.telefone);
            $("#cep").val(resultado.cep);
            $("#bairro").val(resultado.bairro);
            $("#rua").val(resultado.rua);
            $("#cidade").val(resultado.cidade);
            $("#sigla").val(resultado.sigla_estado);




        }

    })
}

function AlterarMeusDados(id_form) {
    if (NotificarCamposGenerico(id_form)) {
        var dados = GetTnkValue();
        var id_user = dados.funcionario_id;
        

        var dados = {
            id_user: id_user,
            endpoint: "AlterarMeusDados",
            Nome: $("#Nome").val().trim(),
            login: $("#email").val().trim(),
            telefone: $("#telefone").val().trim(),
            id_end: $("#id_end").val().trim(),
            rua: $("#rua").val().trim(),
            bairro: $("#bairro").val().trim(),
            cep: $("#cep").val().trim(),
            sigla: $("#sigla").val().trim(),
            cidade: $("#cidade").val().trim(),
            id_setor: id_user
        }

        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),

            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (dados_ret) {
                var resultado = dados_ret["result"];
               // console.log(resultado);

            }

        })
    }

    return false;
}

function CarregarEquipamentosAlocados() {

    var dados = GetTnkValue();
    var id_user = dados.setor_id;

    var combo_equipamento = $("#equipamento");
    combo_equipamento.empty();
    var dados = {
        endpoint: 'SelecinarEquipamentosAlocados',
        setor_id: id_user
    }

    $.ajax({
        type: 'POST',
        url: BASE_URL_AJAX("funcionario_api"),
        data: JSON.stringify(dados),
        headers: {
            'Authorization' : 'Bearer' + GetTnk(),
            'Content-Type': 'application/json'
        },

        success: function (dados_ret) {
            //console.log(dados_ret);

            var resultado = dados_ret['result'];


            $('<option>').val("").text("Selecione").appendTo(combo_equipamento);

            $(resultado).each(function () {
                $('<option>').val(this.id).text(this.nome_tipo + " / " + this.nome_modelo + " / " + this.identificacao).appendTo(combo_equipamento);
            })
        }
    })
}


function AbrirChamado(id_form) {
    if (NotificarCamposGenerico(id_form)) {
        var dados = GetTnkValue();
        var id_user_func = dados.funcionario_id;
        var dados = {
            endpoint: "AbrirChamado",
            id_user: id_user_func,
            problema: $("#descricao").val().trim(),
            id_alocar: $("#equipamento").val()
        }

        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (dados_ret) {
                console.log(dados_ret);
                var resultado = dados_ret["result"];
                if (resultado == '1') {

                    CarregarEquipamentosAlocados();
                    LimparCamposGenerico(id_form);
                }

            }
        })
    }
}


function VerificarSenhaAtual(id_form) {
    if (NotificarCamposGenerico(id_form)) {
// a variavel dados recupera todo o tokin que vc armazenou no localstorage
        var dados = GetTnkValue();
        //ai com a propriedade funcionario_id vc joga na variavel id_user
        var id_user = dados.funcionario_id;

        var dados = {
            endpoint: "VerificarSenhaAtual",
            senha: $("#senha").val().trim(),
            id: id_user
        }

        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),
            headers: {
                //vc criou no cabeçalho a autorização 
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                
                var ret = resultado['result'];
               

                if (ret == -1) {
                    MensagemCustomizada("Senha nao bate com atual");
                } else if (ret == 1) {
                    $("#divsenhaatual").hide();
                    $("#divmudarsenha").show();
                } else if(ret == -1000){
                    ClearTnk();
                    RedirectToPage("login");
                }
            }
        })

    }
    //quando estiver dentro de um form. 
    return false;
}

function AtualizarSenha(id_form) {
    if (NotificarCamposGenerico(id_form)) {

        var dados = GetTnkValue();
        var id_user = dados.senha;

        var dados = {
            endpoint: "AtualizarSenha",
            senha: $("#senhanova").val().trim(),
            repetir_senha: $("#senhanova1").val().trim(),
            id: id_user//Fixo por enquanto
        }
        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                var ret = resultado["result"];

                if (ret == -1) {
                    MensagemErro();
                }
                if (ret == -2) {
                    MensagemCustomizada("A senha deverá conter no mínimo 6 caracteres");
                } else if (ret == -3) {
                    MensagemCustomizada("O campo SENHA e REPETIR SENHA não conferem");
                } else if (ret == 1) {
                    MensagemSucesso();
                }
            }
        })

    }
    return false;
}
function ValidarAcesso(id_form) {
    if(NotificarCamposGenerico(id_form)){

     
        var dados = {
            login: $("#login").val(),
            senha: $("#senha").val(),
            endpoint: 'Autenticar'
        }
        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                
                var dados = resultado['result'];
            
                if(dados == -3){
                    MensagemCustomizada("Usuário não autorizado")
                } else{
                   AddTnk(dados);
                    location = "chamadosrealizados.php";
                }
            }
        })
        
    }
    return false;
}
