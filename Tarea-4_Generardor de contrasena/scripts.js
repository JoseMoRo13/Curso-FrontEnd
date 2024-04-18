window.addEventListener("load",function(){
    let input_password = document.getElementById("input_password");
    let range_selector = document.getElementById("range-selector");
    let number_selector = document.getElementById("number-selector");
    let btn_generate = document.getElementById("btn-generate");
    let uppercase_cb = document.getElementById("uppercase");
    let lowercase_cb = document.getElementById("lowercase");
    let numbers_cb = document.getElementById("numbers");
    let symbols_cb = document.getElementById("symbols");

     // variables de la funcion

    const uppercaseLeater = "BCDFGHJKLMNOPQRSTVWXYZ";
    const lowercaseLeater = "bcdfghjklmnopqrstvwxyz";
    const numbersLeater = "0123456789";
    const symbolsLeater = "!@#$%^&*()-=+?><{}[]";

    // funcion para optener la contrasena

    function getPassword(){
       
        let length = number_selector.value;
        let password = ""
        
        if(!uppercase_cb.checked && !lowercase_cb.checked && !numbers_cb.checked && !symbols_cb.checked){
            input_password.classList.add("shake");
        }else{
            input_password.classList.remove("shake");
            for(i=0; i<length; i++){
            let result_function = SelectItem();
            password = password + result_function;

        }
        
        input_password.value = password;
        }
        
    }

    // funcion para elegir los selectores y hacer un numero ramdom

    function SelectItem(){

        let ramdom_item = [];

        if(uppercase_cb.checked){

            ramdom_item.push(getUppercase());
        }

        if(lowercase_cb.checked){

            ramdom_item.push(getLowercase());
        }

        if(numbers_cb.checked){

            ramdom_item.push(getNumbers());
        }

        if(symbols_cb.checked){

            ramdom_item.push(getSymbols());
        }
        
        let value_to_return = ramdom_item[Math.floor(Math.random() * ramdom_item.length)];
        return value_to_return;
    }

    // funcion para cada tipo de selector

    function getUppercase(){
        let uppercase_array = uppercaseLeater.split("");
        return uppercase_array[Math.floor(Math.random() * uppercase_array.length)];
    }

    function getLowercase(){
        let lowercase_array = lowercaseLeater.split("");
        return lowercase_array[Math.floor(Math.random() * lowercase_array.length)];
    }

    function getNumbers(){
        let numbers_array = numbersLeater.split("");
        return numbers_array[Math.floor(Math.random() * numbers_array.length)];
    }

    function getSymbols(){
        let symbols_array = symbolsLeater.split("");
        return symbols_array[Math.floor(Math.random() * symbols_array.length)];
    }

    // El Math.floor()método estático siempre redondea hacia abajo y devuelve el número entero más grande menor o igual a un número determinado.

    // El Math.random()método estático devuelve un número pseudoaleatorio de punto flotante que es mayor o igual a 0 y menor que 1, con una distribución aproximadamente uniforme en ese rango, que luego puede escalar al rango deseado. La implementación selecciona la semilla inicial para el algoritmo de generación de números aleatorios; el usuario no puede elegirlo ni restablecerlo.


    btn_generate.addEventListener("click", getPassword);

    // funciones para el rango y la caja de numeros del rgando

    range_selector.addEventListener("mousemove", function(){
        number_selector.value = range_selector.value;
    });

    number_selector.addEventListener("blur", function(){
        range_selector.value = number_selector.value;
    });


});

    //El mousemoveevento se activa en un elemento cuando se mueve un dispositivo señalador (generalmente un mouse) mientras el punto de acceso del cursor está dentro de él.

    //El blur()método realiza una solicitud para poner una ventana en segundo plano.