<?php
require_once dirname(__DIR__, 2) . '/vendor/autoload.php';
?>

<!DOCTYPE html>
<html>
<head>
<?php include_once PATH_URL . '/Template/_includes/_head.php' ?>
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    Controle de CHAMADOS 
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Faça seu acesso</p>

      <form action="login.php" method="post" id="form_login">
        <div class="input-group mb-3">
          <input  name="login" id="login"  class="form-control obg" placeholder="E-mail" value="<?= isset($_POST['login']) ? $_POST['login'] : '' ?>" >
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="senha" id="senha" class="form-control obg" placeholder="Digite sua senha">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
         
          <!-- /.col -->
          <div class="col-4">
            <button name="btn_acessar" class="btn btn-primary btn-block" onclick="return ValidarAcesso('form_login')">Acessar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

     
      <!-- /.social-auth-links -->

      
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<?php
    include_once PATH_URL . '/Template/_includes/_scripts.php';
    include_once PATH_URL . '/Template/_includes/_msg.php';
    ?>

</body>
<script src="../../Resource/ajax/funcionario-ajx.js"></script>
</html>
