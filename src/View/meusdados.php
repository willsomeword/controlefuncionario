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
              <p class="text-success">Meus Dados</p>
            </h3>
            <h6>Aqui voce podera cadastrar seus equipamentos</h6>
          </div>
          <div>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">

            </div>
          </div>
          <div class="card-body">
            <input type="hidden" id="id_end">
            <form method="post" action="meusdados.php" id="form_id">

              <div class="form-group">
                <label>nome</label>
                <input class="form-control obg" id="Nome"  placeholder="digite aqui...">
                <div class="form-group">
                </div>

                <div class="form-group">
                  <label>E-mail</label>
                  <input class="form-control obg" id="email"  placeholder="digite aqui...">
                </div>

                <div class="form-group">
                  <label>Telefone</label>
                  <input class="form-control obg" id="telefone"  placeholder="digite aqui...">
                </div>

                <div class="form-group">
                  <label>Cep</label>
                  <input class="form-control obg" id="cep" placeholder="digite aqui...">
                </div>
                <div class="form-group">
                  <label>Bairro</label>
                  <input class="form-control obg" id="bairro"  placeholder="digite aqui...">
                </div>
                <div class="form-group">
                  <label>Rua</label>
                  <input class="form-control obg" id="rua"  placeholder="digite aqui...">
                </div>
                <div class="form-group">
                  <label>Cidade</label>
                  <input class="form-control obg" id="cidade" placeholder="digite aqui...">
                </div>
                <div class="form-group">
                  <label>Estado</label>
                  <input class="form-control obg" id="sigla" placeholder="digite aqui...">
                </div>
                <div>
                  <button onclick="return AlterarMeusDados('form_id')" name="btnGravar" class="btn bg-gradient-success">Cadastrar</button>
                </div>


              </div>
            </form>


          </div>
          <!-- /.card -->

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
<script>CarregarMeusDados();</script>
<script> Verify();</script>

</html>