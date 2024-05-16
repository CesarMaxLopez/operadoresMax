var valores = [true, 5, false, "hola", "adios", 2];
            var resultado = valores[3] > valores[4];
//colocar document.writte () en cada uno de los alert para que se muestre como resultado
            // Combinar valores booleanos
            var valor1 = valores[0];
            var valor2 = valores[2];

            // Obtener un resultado TRUE
            var resultado = valor1 || valor2;
            document.write("Resultado 1: " + resultado + "<br />"); 

            // Obtener un resultado FALSE
            resultado = valor1 && valor2;

            // Operaciones matemáticas
            var valor1 = valores[1];
            var valor2 = valores[5];

            var suma = valor1 + valor2;
            document.write("Suma: " + suma + "<br />");

            var resta = valor1 - valor2;
            document.write("Resta: " + resta + "<br />");

            var multiplicacion = valor1 * valor2;
            document.write("Multiplicacion: " + multiplicacion + "<br />");

            var division = valor1 / valor2;
            document.write("Division: " + division + "<br />");

            var modulo = valor1 % valor2;
            document.write("Modulo: " + modulo + "<br />");
            //var resta = num1 - num2;
            //alert(resta);

            // var multiplicacion = num1 * num2;
            // var division = num1 / num2;
            
            // alert(division);

            // var modulo = num1 % num2;
            
            // alert(modulo);
