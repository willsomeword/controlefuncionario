function FiltrarChamados() {
    
    var dados = GetTnkValue();
    let id_setor_logado = dados.setor_id;
   
    var dados = {
        situacao: $("#situacao").val(),
        endpoint: 'FiltrarChamado',
        setor_id: id_setor_logado
    }

    $.ajax({
        type: "POST",
        url: BASE_URL_AJAX("funcionario_api"),
        data: JSON.stringify(dados),
        headers: {
           
            'Content-Type': 'application/json'
        },
        success: function (dados_ret) {
            var chamados = dados_ret["result"];
            //console.log(chamados);



          if (chamados != "") {
                var table_start = '';
                var table_end = '';
                var table_data = '';
                var table_head = '';

                table_start = '<table class="table table-hover" id="tableResult"><thead>';
                table_head += '<tr><th>Data Abertura</th><th>Funcionário</th>';
                table_head += '<th>Equipamento</th><th>Problema</th><th>Data Atendimento</th>';
                table_head += '<th>Técnico</th><th>Data Encerramento</th><th>Laudo</th></tr></thead><tbody>';

                $(chamados).each(function () {

                    table_data += '<tr>';
                    table_data += '<td>' + this.data_abertura + '</td>';
                    table_data += '<td>' + this.nome_funcionario + '</td>';
                    table_data += '<td>' + this.identificacao + '  Modelo: ' + this.nome + ' /Equip: ' + this.nomeequip + '</td>';
                    table_data += '<td>' + this.descriçao_problema + '</td>';
                    table_data += '<td>' + (this.data_atendimento == null ? '-' : this.data_atendimento) + '</td>';
                    table_data += '<td>' + (this.nome_tecnico == null ? '-' : this.nome_tecnico) + '</td>';
                    table_data += '<td>' + (this.data_encerramento == null ? '-' : this.data_encerramento) + '</td>';
                    table_data += '<td>' + (this.laudo_tecnico == null ? '-' : this.laudo_tecnico) + '</td>';
                    table_data += '</tr>';

                })

                table_end = '</tbody></table>';

                var vaso = table_start + table_head + table_data + table_end;

                $("#tableResult").html(vaso);
                $("#divResult").show();
            } else {
                MensagemRegistronaoencontrado();
                $("#divResult").hide();
            }
        }
    })

    return false;
}
function VerificarSenhaAtual(id_form) {
    if (NotificarCamposGenerico(id_form)) {

        var dados = GetTnkValue();
        var id_user = dados.funcionario_id;

        var dados = {
            endpoint: "VerificarSenhaAtual",
            senha: $("#senha").val().trim(),
            id:id_user
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
                    MensagemRegistronaoencontrado("Senha Atual não confere");
                } else if (ret == 1) {
                    $("#divSenhaAtual").hide();
                    $("#divMudarSenha").show();
                } else if (ret == -1000) {
                    ClearTnk();
                    RedirectToPage("login");
                }
            }
        })

    }
    return false;
}

function AtualizarSenha(id_form) {
    if (NotificarCampoObg(id_form)) {

        var dados = GetTnkValue();
        var id_user = dados.funcionario_id;

        var dados = {
            endpoint: "AtualizarSenha",
            senha: $("#senhanova").val().trim(),
            repetir_senha: $("#senhanova2").val().trim(),
            id: id_user
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
                else if (ret == -2) {
                    MensagemGenerica("A senha deverá conter no mínimo 6 caracteres");
                }
                else if (ret == -3) {
                    MensagemGenerica("O campo SENHA e REPETIR SENHA não conferem");
                }
                else if (ret == 1) {
                    MensagemSucesso();

                }
            }
        })

    }
    return false;
}

function ValidarAcesso(id_form) {
    if (NotificarCampoObg(id_form)) {

        var dados = {
            login: $("#login").val(),
            senha: $("#senha").val(),
            endpoint: 'Autenticar'
        }
        $.ajax({
            type: "POST",
            url: 'http://localhost/ControleOS/src/Resource/api/funcionario_api.php',
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                console.log(resultado)
                var dados = resultado['result'];

                if(dados == -3){
                MensagemGenerica("Usuário não autorizado")
                } else{
                 AddTnk(dados);
                location = "chamados.php";
                }
            }
        })

    }
    return false;
}