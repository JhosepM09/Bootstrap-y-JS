function saludo() {
    alert("Bienvenido a mi website con bootstrap y Js")
}

function suma() {
    // Declaramos las variables necesarias
    let a=0;
    let b=0;
    let sum=0;
    // solicitamos los valores
    a=parseInt(prompt("Ingrese el primer valor a sumar"));
    b=parseInt(prompt("Ingrese el segundo valor a sumar"));
    // realizamos los procesos
    sum=a+b;
    // mostamos el resultado en pantalla
    alert("El resultado de la suma es: " +sum);
    
}

function operaciones() {
    let a=0;
    let b=0;
    let sum=0;
    let res=0;
    let mul=0;
    let div=0;

    a=parseInt(prompt("Ingrese el primer valor"));
    b=parseInt(prompt("Ingrese el segundo valor"));

    sum=a+b;
    res=a-b;
    mul=a*b;
    div=a/b;

    // alert("El resultado de los valores en suma son: " +sum);
    // alert("El resultado de los valores en resta es: " +res);
    // alert("El resultado de los valores en multiplcacion es: " +mul);
    // alert("El resultado de los valores en division es: " +div);
    alert("El resultado de los valores en suma son: "+sum,  "El resultado en resta es: " +res, "El resultado en multiplicacion es: " +mul, "y el resultado en division es: " +div);
    
}

function mayor() {
    alert("Algoritmo que determinara el número mayor de los ingresados");

    let n1=0;
    let n2=0;

    n1=parseInt(prompt("Ingrese el primer valor"));
    n2=parseInt(prompt("Ingrese el segundo valor"));

    if (n1 == n2) {
        alert("Los valores igresados son iguales");
    }
    else if(n1>n2){
        alert("El número mayor es: " + n1);
    }
    else {
        alert("el número mayor es: " + n2);
    }
}

// El colegio abc requiere un algoritmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 calificaciones y este sistema le indique si aprobo o reprobo teniendo encuenta  que se aprueba si el puntaje es mayor o igual a 6

function promedio() {
    alert("Algoritmo para sacar el promedio de las notas del colegio abc")

    let n1=0;
    let n2=0;
    let n3=0;
    let n4=0;
    let n5=0;
    let n6=0;
    let n7=0;

    let nom;
    let mat;

    let sum=0;
    let resultado=0;

    nom=prompt("Ingrese su nombre");
    mat=prompt("ingrese la materia");

    n1=parseInt(prompt("Ingrese su primera nota"));
    n2=parseInt(prompt("Ingrese su segunda nota"));
    n3=parseInt(prompt("Ingrese su tercera nota"));
    n4=parseInt(prompt("Ingrese su cuarta nota"));
    n5=parseInt(prompt("Ingrese su quinta nota"));
    n6=parseInt(prompt("Ingrese su sexta nota"));
    n7=parseInt(prompt("Ingrese su septima nota"));

    sum=n1+n2+n3+n4+n5+n6+n7;

    resultado=sum/7;

    if (resultado < 6) {
        alert("La nota del estudiante " +nom + " es: " +resultado + " su estado es reprobado.");   
    }
    else if (resultado >= 6) {
        alert("La nota del estudiante " +nom + ", en la materia de " +mat + " es: " +resultado + " su estado es aprobado.");
    }

   

    
}

 // se requiere una sistema de algoritmo que al ingresar un valor en dolares nos indique a cuantos pesos colombianos, euros y soles equivalen

 function conversion() {
    let d=0;
    let p=0;
    let e=0;
    let s=0;

    d=parseInt(prompt("Ingrese los dolares a convertir"));

    p=d*4118;
    e=d*0.92;
    s=d*3.72;

    alert("La conversion de: " +d + " dolares es igual a: " +p + " pesos colombianos, " +e + " euros y " +s + " soles.");
    
 }

//  Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numeros de años teniendo encuenta que el banco paga un interes del 1,3% mensual

function cdt() {
    let capitalInicial = parseFloat(prompt("Ingrese el capital a invertir"));
    let numeroDeAnios = parseInt(prompt("Ingrese el número de años"));

    let tasaInteresMensual = 1.3; // 1.3% mensual
    let vecesCompuestoPorAnio = 12; // Mensualmente

    let t = numeroDeAnios;
    let r = tasaInteresMensual / 100;
    let n = vecesCompuestoPorAnio;

    let montoAcumulado = capitalInicial * Math.pow(1 + r, n * t);

    alert("Después de " + numeroDeAnios + " años, tendrás aproximadamente $" + montoAcumulado.toFixed(2) + " con interés compuesto.");
}

function menor() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));

    let menor = num1;

    if (num2 < menor) {
        menor = num2;
    }

    if (num3 < menor) {
        menor = num3;
    }

    alert("El número menor es: " + menor);
}

encontrarNumeroMenor();


function promedioFor() {
    alert("Algoritmo para sacar el promedio de las notas del colegio abc");

    let numNotas = 7; // Número de notas a ingresar
    let notas = [];
    let sum = 0;
    let resultado = 0;

    let nom = prompt("Ingrese su nombre");
    let mat = prompt("Ingrese la materia");

    for (let i = 0; i < numNotas; i++) {
        notas[i] = parseInt(prompt("Ingrese la nota " + (i + 1)));
        sum += notas[i];
    }

    resultado = sum / numNotas;

    if (resultado < 6) {
        alert("La nota del estudiante " + nom + " es: " + resultado + " su estado es reprobado.");
    } else {
        alert("La nota del estudiante " + nom + ", en la materia de " + mat + " es: " + resultado + " su estado es aprobado.");
    }
}


// capturamos en una constante el elemento html que deseamos manipular
function circulo() {
    const figura=document.getElementById("figura");
    // A este elemento html le agregamos la clase circulo
    figura.classList.toggle("circulo");
}

function moveTop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");

    
}

function panelSuperior() {
    const panel = document.getElementById("panel-superior");
    panel.classList.toggle("activee");

    
}

function horizontal() {
    const figura= document.querySelector("#figura");
    figura.classList.toggle("hor");
    
}

function vertical() {
    const figura=document.getElementById("figura");
    figura.classList.toggle("ver");
    
}

function moveRight() {
    const figura=document.getElementById("figura");
    figura.classList.toggle("right");
    
}

function moveLeft() {
    const figura=document.querySelector("#figura");
    figura.classList.toggle("left");
    
}

function moveBottom() {
    const figura=document.getElementById("figura");
    figura.classList.toggle("bot");
    
}

function degradado() {
    const figura=document.querySelector("#figura");
    figura.classList.toggle("deg");
    
}

function rombo() {
    const figura=document.getElementById("figura");
    figura.classList.toggle("rom");
    
}

function triangulo() {
    const figura=document.querySelector("#figura");
    figura.classList.toggle("trian");
    
}

function gift() {
    const figura=document.querySelector("#figura");
    figura.classList.toggle("gif");
    
}
