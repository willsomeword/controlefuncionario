$(document).ready(function () {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.tel').mask('(00) 0000-0000');
    $('.cel').mask('(00)00000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.dinheiro').mask('00000000.00', {reverse: true});
    $('.porcentagem').mask('00.00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.num').keypress(function (event) {
        var tecla = (window.event) ? event.keyCode : event.which;
        if ((tecla > 47 && tecla < 58))
            return true;
        else {
            if (tecla != 8)
                return false;
            else
                return true;
        }
    });
    $(".telpree").focusout(function () {
        if ($('#telcel').val().length < 14)
            $('#telcel').val('');
    });
    $(".datapree").focusout(function () {
        if ($('.date').val().length < 10)
            $('.date').val('');
    });
   
   
});