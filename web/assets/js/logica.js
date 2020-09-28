const formulario = document.getElementById('formulario');
const nombre = document.querySelector('#formulario #nombre');
const apellido = document.querySelector('#formulario #apellido');
const email = document.querySelector('#formulario #email');
const departamentos = document.querySelector('#formulario #departamentos');
const localidades = document.querySelector('#formulario #localidades');
const documento = document.querySelector('#formulario #documento');
const aceptoCondiciones = document.querySelector('#formulario #acepto');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaFormulario();
    focoFormulario();
    inputFormulario();
});

function inputFormulario() {
    nombre.addEventListener('input', ()=> {
        if(nombre.value.length != 0) {
            nombre.parentElement.querySelector('span').style.display='block';
            nombre.parentElement.querySelector('span').textContent="NOMBRE"
        } else {
            nombre.parentElement.querySelector('span').innerHTML=""
        }
    });
    apellido.addEventListener('input', ()=>{
        if(apellido.value.length != 0) {
            apellido.parentElement.querySelector('span').style.display='block';
            apellido.parentElement.querySelector('span').textContent="APELLIDO"
        } else {
            apellido.parentElement.querySelector('span').innerHTML=""
        }
    });
    email.addEventListener('input', ()=>{
        if(email.value.length != 0) {
            email.parentElement.querySelector('span').style.display='block';
            email.parentElement.querySelector('span').textContent="EMAIL"
        } else {
            email.parentElement.querySelector('span').innerHTML=""
        }
    });
    departamentos.addEventListener('input', ()=>{
        if(departamentos.value.length != 0) {
            departamentos.parentElement.querySelector('span').style.display='block';
            departamentos.parentElement.querySelector('span').textContent="DEPARTAMENTO"
        } else {
            departamentos.parentElement.querySelector('span').innerHTML=""
        }
    });
    localidades.addEventListener('input', ()=>{
        if(localidades.value.length != 0) {
            localidades.parentElement.querySelector('span').style.display='block';
            localidades.parentElement.querySelector('span').textContent="LOCALIDAD"
        } else {
            localidades.parentElement.querySelector('span').innerHTML=""
        }
    });
    documento.addEventListener('input', ()=>{
        if(documento.value.length != 0) {
            documento.parentElement.querySelector('span').style.display='block';
            documento.parentElement.querySelector('span').textContent="C.I"
        } else {
            documento.parentElement.querySelector('span').innerHTML=""
        }
    });
}

function focoFormulario() {
    nombre.addEventListener('focus', (e)=>{
        nombre.parentElement.querySelector('small').innerHTML="";
    });
    apellido.addEventListener('focus', (e)=>{
        apellido.parentElement.querySelector('small').innerHTML="";
    });
    email.addEventListener('focus', (e)=>{
        email.parentElement.querySelector('small').innerHTML="";
    });
    departamentos.addEventListener('focus', (e)=>{
        departamentos.parentElement.querySelector('small').innerHTML="";
    });
    localidades.addEventListener('focus', (e)=>{
        localidades.parentElement.querySelector('small').innerHTML="";
    });
    documento.addEventListener('focus', (e)=>{
        documento.parentElement.querySelector('small').innerHTML="";
    });
    aceptoCondiciones.addEventListener('focus', (e)=>{
        aceptoCondiciones.parentElement.parentElement.parentElement.querySelector('small').innerHTML="";
    });
}

function cargaFormulario() {
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();

        const campoVacio = "El campo está vacío"
        const minimo2 = "El campo debe contener mínimo 2 caracteres"

        // EVALUACIÓN DE NOMBRE
        if (nombre.value.length == 0) {
            nombre.parentElement.style.border='1px solid red';
            nombre.parentElement.querySelector('small').textContent=campoVacio;
        } else if (nombre.value.length < 2) {
            nombre.parentElement.style.border='1px solid red';
            nombre.parentElement.querySelector('small').textContent=minimo2;
        } else {
            nombre.parentElement.style.border='1px solid green';
            nombre.parentElement.querySelector('small').innerHTML="";
        }

        // EVALUACIÓN DE APELLIDO
        if (apellido.value.length == 0) {
            apellido.parentElement.style.border='1px solid red';
            apellido.parentElement.querySelector('small').textContent=campoVacio;
        } else if (apellido.value.length < 2) {
            apellido.parentElement.style.border='1px solid red';
            apellido.parentElement.querySelector('small').textContent=minimo2;
        } else {
            apellido.parentElement.style.border='1px solid green';
            apellido.parentElement.querySelector('small').innerHTML="";
        }

        // EVALUACIÓN DE EMAIL
        if (email.value.length == 0) {
            email.parentElement.style.border='1px solid red';
            email.parentElement.querySelector('small').textContent=campoVacio;
        } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)) {
            email.parentElement.style.border='1px solid red';
            email.parentElement.querySelector('small').style.color="red";
            email.parentElement.querySelector('small').textContent="El formato no es correcto o el correo no existe";
        } else {
            email.parentElement.style.border='1px solid green';
            email.parentElement.querySelector('small').style.color="green";
            email.parentElement.querySelector('small').textContent="El correo es correcto";
        }

        //EVALUACIÓN DE DEPARTAMENTOS
        if (departamentos.value == "") {
            departamentos.parentElement.style.border='1px solid red';
            departamentos.parentElement.querySelector('small').textContent='Elija un departamento';
        } else {
            departamentos.parentElement.style.border='1px solid green';
            departamentos.parentElement.querySelector('small').innerHTML="";
        }
        
        // EVALUACIÓN DE LOCALIDADES
        if (localidades.value == "") {
            localidades.parentElement.style.border='1px solid red';
            localidades.parentElement.querySelector('small').textContent='Elija una localidad';
        } else {
            localidades.parentElement.style.border='1px solid green';
            localidades.parentElement.querySelector('small').innerHTML="";
        }

        // EVALUACIÓN DE CÉDULA
        if (documento.value.length == 0) {
            documento.parentElement.querySelector('small').textContent=campoVacio;
            documento.parentElement.style.border='1px solid red';
            documento.parentElement.style.border='1px solid red';
        } else if (!validarCedula(documento.value)) {
            documento.parentElement.style.border='1px solid red';
            documento.parentElement.querySelector('small').style.color="red";
            documento.parentElement.querySelector('small').textContent='La cédula no existe o no es correcta';
        } else {
            documento.parentElement.style.border='1px solid green';
            documento.parentElement.querySelector('small').style.color='green';
            documento.parentElement.querySelector('small').innerHTML='La cédula es correcta';
        }

        // EVALUACIÓN DE ACEPTACIÓN DE CONDICIONES
        if (!aceptoCondiciones.checked) {
            aceptoCondiciones.parentElement.parentElement.parentElement.querySelector('small').textContent="Debe aceptar las condiciones";
        } else {
            aceptoCondiciones.parentElement.parentElement.parentElement.querySelector('small').innerHTML="";
        }

    });
}

function validarCedula(ci) {
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = ci.substring(i, i + 1);
        //Lo tenía como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al ésta posición del digito
        var coef = arrCoefs[i + difCoef];
        //Multiplico dígito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if ((suma % 10) === 0) {
        result = true;
    }
    return result;
}