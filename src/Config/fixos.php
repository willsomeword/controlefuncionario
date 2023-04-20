<?php

#FUNÇÕES 
const CADASTRO_TIPO_EQUIPAMENTO = "CadastrarTipoEquipamento";
const ALTERAR_TIPO_EQUIPAMENTO = "AlterarTipoEquipamento";
const EXCLUIR_TIPO_EQUIPAMENTO = "ExcluirTipoEquipamento";

const CADASTRO_TIPO_SETOR ="CadastrarTipoSetor";
const ALTERAR_TIPO_SETOR = "AlterarTipoSetor";
const EXCLUIR_TIPO_SETOR ="ExcluirTipoSetor";

const CADASTRO_EQUIPAMENTO ="CadastrarEquipamento";
const ALTERAR_EQUIPAMENTO = "AlterarEquipamento";
const EXCLUIR_EQUIPAMENTO ="ExcluirEquipamento";


const CADASTRO_MODELO ="CadastrarModelo";
const ALTERAR_MODELO = "AlterarModelo";
const EXCLUIR_MODELO ="ExcluirModelo";


#Situacao Chamados.

const SITUACAO_EM_ABERTO = 1;
const SITUACAO_EM_ATENDIMENTO = 2;
const SITUACAO_ENCERRADO = 3;
const SITUACAO_TODOS = 4;

#CHAVE SECRET TOKEN  OBS: PODE SER NOME QUALQUER
const SECRET_JWT_FUNC = 'secret';
const NAO_AUTORIZADO = -1000;



define('PATH_URL', $_SERVER["DOCUMENT_ROOT"] . '/ControleOsFuncionario13h/src/');

  