<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="../index3.html" class="brand-link">
    <img src="" alt=".." class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="">Admin</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- codigo php indexiando as paginas para o usuario
        sem permissao para acesso a outras paginas. -->




        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Chamados
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="chamadosrealizados.php" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Chamados Realizados</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="novochamado.php" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Novo Chamado</p>
              </a>
            </li>

          </ul>
        </li>

        <!--codigo php que refere a pagina expecifica.
          nao deixando o usuario acessar qualquer pagina 
          a nao ser a expecifica.-->



        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon far fa-envelope"></i>

            <p>
              Informações
              <i class="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="meusdados.php" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Alterar Dados</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="mudarsenha.php" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Alterar Senha</p>
              </a>
            </li>
            <li class="nav-item has-treeview">
              <a href="#" onclick="Sair()" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Sair</p>
              </a>
            </li>

          </ul>
        </li>

        <li class="nav-item has-treeview">




      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>