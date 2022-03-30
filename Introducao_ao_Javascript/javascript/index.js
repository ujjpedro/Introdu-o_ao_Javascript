      function login(){
        document.getElementById("login").innerHTML = document.getElementById("nome").value;
      }

      function produto(acao) {
        var unit1 = parseInt(document.getElementById("unit1").innerHTML);
        var precoUnit1 = parseFloat(document.getElementById("precoUnit1").innerHTML);
        var unit2 = parseInt(document.getElementById("unit2").innerHTML);
        var precoUnit2 = parseFloat(document.getElementById("precoUnit2").innerHTML);

        switch(acao){
                case 'mais1':
                  document.getElementById("unit1").innerHTML = unit1 + 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 + 5.901,54;
                  break;
                case 'menos1':
                  document.getElementById("unit1").innerHTML = unit1 - 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 - 5.901,54;

                  break;
                case 'mais2':
                  document.getElementById("unit2").innerHTML = unit2 + 1;
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 + 2.159,10;
                  break;
                case 'menos2':
                  document.getElementById("unit2").innerHTML = ""+(unit2 - 1);
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 - 2.159,10;
                  break;
            }
      }

      function finalizar(){
        window.location.href = window.location.href;
      }

