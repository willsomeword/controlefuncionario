function Load() {
    $("#divload").addClass("overlay dark").html('<i class="fas fa-2x fa-sync-alt fa-spin"></i>');

}
function RemoverLoad() {
    $("#divload").removeClass("overlay dark").html('');

}


function NotificarCampoObrigatorio(nome_id) {

    if ($("#" + nome_id).val().trim() == '')
        $("#" + nome_id).addClass("is-invalid");
    else
        $("#" + nome_id).removeClass("is-invalid").addClass('is-valid');
}


function NotificarCampos(form_id) {

    var ret = true;


    $("#" + form_id + "  input, " + "#" + form_id + " select, " + "#" + form_id + " textarea ").each(function () {

        if ($(this).hasClass("obg")) {

            if ($(this).val().trim() == "") {
                ret = false;
                $(this).addClass("is-invalid");

            } else {

                $(this).removeClass("is-invalid").addClass('is-valid');
            }


        }


    })

    if (!ret)
        MensagemCamposObrigatorio();
    else
        Load();

    return ret;
}
/**
 * atraves desse elemento ele faz o form ir para o html. entao cada elemento 
 * que ele encontrar,  que representar pelo this. o valor sera vazio.
 */
function LimparCampos(form_id) {
    $("#" + form_id + " input," + "#" + form_id + " select, " + "#" + form_id + "  textarea").each(function () {
        $(this).removeClass("is-invalid");
        $(this).removeClass("is-valid");
    })

}



function NotificarCamposGenerico(form_id) {
    var ret = true;
    $("#" + form_id + " input, select, textarea ").each(function () {
        if ($(this).hasClass("obg")) {
            if ($(this).val().trim() == "") {
                ret = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid").addClass("is-valid");
            }
        }
    })
    if (!ret)
        MensagemCamposObrigatorio();
    else
        Load();
    return ret;
}
function LimparCamposGenerico(form_id) {

    $("#" + form_id + " input, select, textarea ").each(function () {
        if ($(this).hasClass("obg")) {
            $(this).val('');
        }
        if($(this).hasClass("is-invalid")){
            $(this).removeClass("is-invalid");
        }else{
            $(this).removeClass("is-valid");
        }
    })
}



function BASE_URL_AJAX(file_ajax) {
    return "http://localhost/ControleOs13h/src/Resource/api/" + file_ajax + ".php";
    }


function AddTnk(t)
{
    localStorage.setItem('user_tkn', t);

}

function GetTnkValue(){
    var token = GetTnk();
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var j = decodeURIComponent (window.atob(base64).split('').map(function (c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(j);

}

function GetTnk()
{
    if (localStorage.getItem('user_tkn') !=null)
        return localStorage.getItem('user_tkn');
}

function Verify()
{
    if (localStorage.getItem('user_tkn') === null)
        location = "login.php";

}

function ClearTnk() {
    localStorage.clear();
     
}

function RedirectToPage(page){
    location = page + ".php";

}


function Sair() {
    localStorage.clear();
    ChamarOutraPagina("login");
}
function ChamarOutraPagina(pagina){
    location = pagina + ".php";
}



