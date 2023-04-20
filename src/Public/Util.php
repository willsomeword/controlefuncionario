<?php

namespace Src\Public;

class Util{

    public static function IniciarSessao(){
        if(!isset ($_SESSION))
        session_start();
    }
    #toda vez que precisar trabalhar com sessao, dar um self e chamar ela.  self chamar recurso dentro de uma classe estatica
    #se nao for estatica dis.

    public static function CriarSessao($id, $nome){
        self::IniciarSessao();
        $_SESSION['id'] = $id;
        $_SESSION['nome'] = $nome;

    }
    public static function CodigoLogado(){

       self::IniciarSessao();
        return isset($_SESSION['id'])  ? $_SESSION['id'] : 0;
    }
    public static function NomeLogado(){
        
        self::IniciarSessao();
        return $_SESSION['nome'];

    }
    public static function Deslogar(){
        self::IniciarSessao();
        unset($_SESSION['id']);
        unset($_SESSION['nome']);
        self::IrParaLogin();

    }

    public static function IrParaLogin(){
        header('location:http://localhost/ControleFuncionarioOs13h/src/View/login.php');
        exit;
    }

    public static function VerificarLogado(){
        self::IniciarSessao();
        if (!isset($_SESSION['id']))
        self::IrParaLogin();

    }


 //ASpas duplas faz leitura de variavel dentro de um string.
    public static function chamarPagina($pag){
        header("location: $pag");
        
        exit;

    }
}