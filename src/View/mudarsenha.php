<?php
require_once dirname(__DIR__, 2) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
  <?php
  include_once PATH_URL . '/Template/_includes/_head.php';
  ?>
</head>

<body class="hold-transition sidebar-mini">
  <!-- Site wrapper -->
  <div class="wrapper">
    <?php
    include_once PATH_URL . '/Template/_includes/_topo.php';
    include_once PATH_URL . '/Template/_includes/_menu.php';
    ?>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-10">
            <div class="col-sm-60">
              <h1>Gerenciar setores</h1>
            </div>
            <div class="col-sm-12">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Administrador</a></li>
                <li class="breadcrumb-item active">Gerenciar setores</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            <h3>
              <p class="text-success">Mudar Senha</p>
            </h3>
            <h6>Altere sua senha aqui</h6>
          </div>
          <div>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">

            </div>
          </div>
          <div class="card-body">

            <form id="form_senha">
              <div id="divsenhaatual">
                <div class="form-group">
                  <label>Senha atual</label>
                  <input type="password" class="form-control obg" id="senha" name="senha" placeholder="Password">
                </div>
                <button onclick="return VerificarSenhaAtual('form_senha')" class="btn bg-gradient-success">Alterar</button>
              </div>
            </form>
            <form id="form_nova">
              <div id="divmudarsenha" style="display: none">
                <label>Nova senha</label>
                <div class="form-group">
                  <input class="form-control obg" id="senhanova" name="senhanova " placeholder="digite aqui...">
                </div>
                <label>Repetir senha</label>
                <div class="form-group">
                  <input class="form-control obg" id="senhanova1" name="senhanova1" placeholder="digite aqui...">
                </div>
                <button  type="button" onclick="return AtualizarSenha('form_nova')" class="btn bg-gradient-success">gravar</button>
              </div>

            </form>



          </div>
          <!-- /.card type buton nao tem como levar no servidor. -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <?php
    include_once PATH_URL . '/Template/_includes/_footer.php';
    ?>


  </div>
  <!-- ./wrapper -->

  <?php
  include_once PATH_URL . '/Template/_includes/_scripts.php';
  include_once PATH_URL . '/Template/_includes/_msg.php';
  ?>
</body>
<script src="../../Resource/ajax/funcionario-ajx.js"></script>
<script> Verify();</script>


</html>