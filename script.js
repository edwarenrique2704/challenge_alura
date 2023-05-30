var frase=[];
var fraseEncriptar=[];
var fraseDesEncriptar=[];
var incrementos=[];
var mensaje;
var bandera,bandera1,banderamsg;
const vocales = ['a','e','i','o','u'];
const llaves = ["ai","enter","imes","ober","ufat"];
const caracteres = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','\u00f1','o','p','q','r','s','t','u','v','w','x','y','z'];//28 caracteres (0-27)
var ocultarImg = document.getElementById('ocultar');
ocultarImg.style.display = 'block';

function obtenerMensaje(){
    frase = document.querySelector(".texto_area").value;
}

function existeMensaje(){
    bandera = 0;
    banderamsg=0;
    if(frase == ''){
        bandera++;
        banderamsg=1;
    }
    if(bandera > 0){
        ocultar();
        alert("No se encontro ningun mensaje para encriptar/desencriptar");
        document.getElementById("texto_area2").innerHTML = '';
    }
    else{
        mostrar();
    }
}

function comprobarMinusculas(){
    for(let i = 0;i < frase.length;i++){
        for(let j = 0;j < caracteres.length;j++){
            if(frase[i] == caracteres[j]){
                bandera1 = 0;
                break;
            }
            else{
                bandera1 = 1;
            }
        }
        if(bandera1 == 1){
            break;
        }
    }
}

function crearIncrementos(){
    for(let i = 0;i < llaves.length ;i++){
        incrementos[i] = (llaves[i].length - 1);
    }
}

    function encriptar(){
        obtenerMensaje();
        existeMensaje();
        comprobarMinusculas();
        fraseEncriptar = [];
        let banderaLocal;
        if(bandera1 == 0){
            for(let i = 0;i < frase.length;i++){
                banderaLocal = 0;
                for(let j=0;j<vocales.length;j++){
                    if(frase[i] == vocales[j]){
                        fraseEncriptar.push(llaves[j]);
                        banderaLocal = 1;
                        break;
                    }
                }
                if(banderaLocal != 1){
                    fraseEncriptar.push(frase[i]);
                }
            }
            mensajeFinal(fraseEncriptar);
        }
        else{
            alert("Estas usando mayusculas o caracteres especiales, intenta de nuevo");
            ocultar();
            document.getElementById("texto_area2").innerHTML = '';
        }
    }

    function desEncriptar(){
        obtenerMensaje();
        existeMensaje();
        comprobarMinusculas();
        crearIncrementos();
        fraseDesEncriptar = [];
        let banderaLocal;
        if(bandera1 == 0){
            for(let i = 0;i < frase.length;i++){
                banderaLocal = 0;
                //
                for(let j = 0;j < vocales.length;j++){
                    if(frase[i] == vocales[j]){
                        fraseDesEncriptar.push(vocales[j]);
                        banderaLocal = 1;
                        i += incrementos[j];
                        break;
                    }
                }
                if(banderaLocal != 1){
                    fraseDesEncriptar.push(frase[i]);
                }
            }
            mensajeFinal(fraseDesEncriptar);
        }
        else{
            alert("Estas usando mayusculas o caracteres especiales, intenta de nuevo");
            ocultar();
            document.getElementById("texto_area2").innerHTML = '';
        }
    }

    function mensajeFinal(texto){
        mensaje = texto[0];
        for(let i = 1;i < texto.length;i++){
            mensaje += texto[i] + '';
        }
        if(banderamsg == 0){
        
        document.getElementById("texto_area2").innerHTML = mensaje;
        }
    }

    function ocultar(){
        if(ocultarImg.style.display === 'none'){
            ocultarImg.style.display = 'block'; 
        }
    }

    function  mostrar(){
        if(ocultarImg.style.display === 'block'){
            ocultarImg.style.display = 'none';
        }
    }

    function copiar(){
        let copyText = document.getElementById('texto_area2');
        copyText.select();
        document.execCommand('copy');
        let textoCopiado = document.execCommand('copy');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'texto copiado con exito',
            showConfirmButton: false,
            timer: 1500
          });
    }