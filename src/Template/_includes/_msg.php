<?php

if(isset($ret)){


    switch($ret):

        case -2:
            echo'     <script>
                            MensagemExcluirUso();
                     </script>';

            break;

        case -1:
            echo'     <script>
                          MensagemErro();
                     </script>';

            break;


        case 0:
            
            echo'   <script>
                        MensagemCamposObrigatorio();
                    </script>';
            
            break;


        case 1:
            
            echo'   <script>
                        MensagemSucesso();
                     </script>';

            break;

    endswitch;

}
