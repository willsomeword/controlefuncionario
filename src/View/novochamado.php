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
            <h2>
              <p class="text-success">Novo Chamado</p>
            </h2>
            <h6>Realize aberturas de chamados nesta pagina.</h6>
          </div>
          <div>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <div>

                </div>
            </div>
            <div class="card-body">
              <form action="novochamado.php" method="post" id="form_id"></form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Escolha o equipamento</label>
                        <select id='equipamento' name='equipamento' class="form-control obg" style="width: 100%;">
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
               <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Descrição</label>
                        <textarea class="form-control obg" id="descricao" name="descricao" placeholder="digite aqui..."></textarea>
                          
                      </div>
                    <div>
                      <button onclick="return AbrirChamado('form_id')" class="btn bg-gradient-success">Cadastrar</button>
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
  ?>''
</body>
<script src="../../Resource/ajax/funcionario-ajx.js"></script>
<script>CarregarEquipamentosAlocados();</script>
<script> Verify();</script>

</html>