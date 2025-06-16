import './style.css'

//Construyendo pagina principal
const app= document.querySelector("#app");
const contenedorPrincipal = `<main class="container">
        <header class="header">
            <h1>🚀 Guía de Ejercicios JavaScript</h1>
            <p>Estructuras de Control - Academia Kodigo</p>
        </header>
    </main>`;

 // HTML del ejercicio 1   
 const ejercicio1 = 
 `<section class="content">
            <div class="exercise">
                <div class="exercise-header" >
                    <h3>Ejercicio 1: Verificar Mayoría de Edad</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-1">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 1: Verificar mayoría de edad usando operador ternario
                        function verificarMayoriaEdad(edad) {
                            return edad >= 18 
                                ? ' Eres mayor de edad'
                                : 'Eres menor de edad';
                        }</code></pre>
                </div>
                <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <div class="form-group">
                            <label for="edad1">Ingresa tu edad:</label>
                            <input type="number" id="edad1" placeholder="Ej: 25">
                        </div>
                        <button class="btn" id="btn-1">Verificar Edad</button>
                        <div id="resultado1"></div>
                    </div>
                </div>
            </div>
</section>`;

// HTML del ejercicio 2
const ejercicio2 = `<section class="exercise">
    <div class="exercise-header" onclick="toggleExercise(2)">
        <h3>Ejercicio 2: Calcular Nota Final</h3>
        <span class="toggle-icon">▼</span>
    </div>
    <div class="exercise-content" id="exercise-2">
        <div class="code-section">
            <h4>📝 Código:</h4>
            <pre><code>
    // Ejercicio 2: Calcular nota final del alumno
    function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
        const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
        return {
        nombre: nombre,
        carnet: carnet,
        notaFinal: notaFinal.toFixed(2)
        };
        }
            </code></pre>
        </div>
    </div>
    <div class="test-section">
        <h4>🧪 Prueba el código:</h4>
        <div class="grid">
            <div class="form-group">
                <label>Nombre del estudiante:</label>
                <input type="text" id="nombre2" placeholder="Ej: Juan Pérez">
            </div>
            <div class="form-group">
                <label>Carnet:</label>
                <input type="text" id="carnet2" placeholder="Ej: 20240001">
            </div>
            <div class="form-group">
                <label>Nota Examen (0-10):</label>
                <input type="number" id="examen2" step="0.1" max="10" placeholder="Ej: 8.5">
            </div>
            <div class="form-group">
                <label>Nota Tareas (0-10):</label>
                <input type="number" id="tareas2" step="0.1" max="10" placeholder="Ej: 9.0">
            </div>
            <div class="form-group">
                <label>Nota Asistencia (0-10):</label>
                <input type="number" id="asistencia2" step="0.1" max="10" placeholder="Ej: 10.0">
            </div>
            <div class="form-group">
                <label>Nota Investigación (0-10):</label>
                <input type="number" id="investigacion2" step="0.1" max="10" placeholder="Ej: 7.5">
            </div>
        </div>
        <button class="btn" id="btn-2" >Calcular Nota Final</button>
        <div id="resultado2"></div>
    </div>
</div>
</div>
</section>`

// HTML del ejercicio 3
const ejercicio3 = 
`<section class="exercise">
                <div class="exercise-header">
                    <h3>Ejercicio 3: Calcular Aumento Salarial</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-3">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 3: Calcular aumento salarial por categoría
function calcularAumento(nombre, salario, categoria) {
    let porcentajeAumento;
    
    switch(categoria.toUpperCase()) {
        case 'A':
            porcentajeAumento = 15;
            break;
        case 'B':
            porcentajeAumento = 30;
            break;
        case 'C':
            porcentajeAumento = 10;
            break;
        case 'D':
            porcentajeAumento = 20;
            break;
        default:
            porcentajeAumento = 0;
    }
    
    const aumento = salario * (porcentajeAumento / 100);
    const nuevoSalario = salario + aumento;
    
    return {
        nombre: nombre,
        salarioOriginal: salario,
        categoria: categoria.toUpperCase(),
        porcentajeAumento: porcentajeAumento,
        aumento: aumento,
        nuevoSalario: nuevoSalario
    };
}</code></pre>
                    </div>
                    <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <div class="grid">
                            <div class="form-group">
                                <label>Nombre del empleado:</label>
                                <input type="text" id="nombre3" placeholder="Ej: María González">
                            </div>
                            <div class="form-group">
                                <label>Salario actual:</label>
                                <input type="number" id="salario3" placeholder="Ej: 1200">
                            </div>
                            <div class="form-group">
                                <label>Categoría:</label>
                                <select id="categoria3">
                                    <option value="">Seleccionar...</option>
                                    <option value="A">A - 15%</option>
                                    <option value="B">B - 30%</option>
                                    <option value="C">C - 10%</option>
                                    <option value="D">D - 20%</option>
                                </select>
                            </div>
                        </div>
                        <button class="btn" id="btn-3">Calcular Aumento</button>
                        <div id="resultado3"></div>
                    </div>
                </div>
            </section>`;

// HTML del ejercicio 4
// Para usar las comillas en el bloque de código se deben escapar con barra invertida (\`\) 
const ejercicio4 = `<section class="exercise">
<div class="exercise-header">
    <h3>Ejercicio 4: Encontrar el Número Mayor</h3>
    <span class="toggle-icon">▼</span>
</div>
<div class="exercise-content" id="exercise-4">
    <div class="code-section">
        <h4>📝 Código:</h4>
        <pre><code>// Ejercicio 4: Encontrar el número mayor entre dos números
function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return \`\${num1} es mayor que \${num2}\` ;
    } else if (num2 > num1) {
        return \`\${num2} es mayor que \${num1}\` ;
    } else {
        return \`\${num1} y \${num2} son iguales\` ;
    }
}</code></pre>
</div>
<div class="test-section">
    <h4>🧪 Prueba el código:</h4>
    <div class="grid">
        <div class="form-group">
            <label>Primer número:</label>
            <input type="number" id="num1_ej4" placeholder="Ej: 15">
        </div>
        <div class="form-group">
            <label>Segundo número:</label>
            <input type="number" id="num2_ej4" placeholder="Ej: 23">
        </div>
    </div>
    <button class="btn" id="btn-4">Comparar Números</button>
    <div id="resultado4"></div>
</div>
</div>
</section>`;

// HTML del ejercicio 5
const ejercicio5 = 
`<section class="exercise">
    <div class="exercise-header">
        <h3>Ejercicio 5: Descuentos en Tienda de Coches</h3>
        <span class="toggle-icon">▼</span>
    </div>
    <div class="exercise-content" id="exercise-5">
        <div class="code-section">
            <h4>📝 Código:</h4>
            <pre><code>// Ejercicio 5: Calcular descuentos en tienda de coches Ford
function calcularDescuentoCoche(modelo, precio) {
let descuento = 0;
let porcentajeDescuento = 0;

switch(modelo.toUpperCase()) {
case 'FORD FIESTA':
porcentajeDescuento = 5;
break;
case 'FORD FOCUS':
porcentajeDescuento = 10;
break;
case 'FORD ESCAPE':
porcentajeDescuento = 20;
break;
default:
porcentajeDescuento = 0;
}

descuento = precio * (porcentajeDescuento / 100);
const precioFinal = precio - descuento;

return {
modelo: modelo,
precioOriginal: precio,
porcentajeDescuento: porcentajeDescuento,
descuento: descuento,
precioFinal: precioFinal
};
}</code></pre>
        </div>
        <div class="test-section">
            <h4>🧪 Prueba el código:</h4>
            <div class="grid">
                <div class="form-group">
                    <label>Modelo del coche:</label>
                    <select id="modelo5">
                        <option value="">Seleccionar modelo...</option>
                        <option value="FORD FIESTA">Ford Fiesta - 5% descuento</option>
                        <option value="FORD FOCUS">Ford Focus - 10% descuento</option>
                        <option value="FORD ESCAPE">Ford Escape - 20% descuento</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Precio del coche:</label>
                    <input type="number" id="precio5" placeholder="Ej: 25000">
                </div>
            </div>
            <button class="btn" id="btn-5">Calcular Descuento</button>
            <div id="resultado5"></div>
        </div>
    </div>
</section>`;

// Desarrollo de los Ejercicios
//<!-- Ejercicio 1 -->
function verificarMayoriaEdad(edad) {
    return edad >= 18 
        ? 'Eres mayor de edad'
        : 'Eres menor de edad';
}
const probarEjercicio1 = () => {
     const edad = parseInt(document.querySelector('#edad1').value);
            if (isNaN(edad) || edad < 0) {
                mostrarResultado('resultado1', '❌ Por favor ingresa una edad válida');
                return;
            }
            const resultado = verificarMayoriaEdad(edad);
            mostrarResultado('resultado1', `✅ ${resultado}`);
  }

// Ejercicio 2
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    return {
    nombre: nombre,
    carnet: carnet,
    notaFinal: notaFinal.toFixed(2)
    };
}

const probarEjercicio2 = () => {
        const nombre = document.getElementById('nombre2').value;
        const carnet = document.getElementById('carnet2').value;
        const examen = parseFloat(document.getElementById('examen2').value);
        const tareas = parseFloat(document.getElementById('tareas2').value);
        const asistencia = parseFloat(document.getElementById('asistencia2').value);
        const investigacion = parseFloat(document.getElementById('investigacion2').value);

        if (!nombre || !carnet || isNaN(examen) || isNaN(tareas) || isNaN(asistencia) || isNaN(investigacion)) {
            mostrarResultado('resultado2', '❌ Por favor completa todos los campos con valores válidos');
            return;
        }

        const resultado = calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);
        mostrarResultado('resultado2', `
            <strong>📊 Datos del Estudiante:</strong><br>
            👤 Nombre: ${resultado.nombre}<br>
            🎓 Carnet: ${resultado.carnet}<br>
            📝 Nota Final: ${resultado.notaFinal}<br>
            <br>
            <strong>Desglose de notas:</strong><br>
            • Examen (20%): ${examen} → ${(examen * 0.20).toFixed(2)} puntos<br>
            • Tareas (40%): ${tareas} → ${(tareas * 0.40).toFixed(2)} puntos<br>
            • Asistencia (10%): ${asistencia} → ${(asistencia * 0.10).toFixed(2)} puntos<br>
            • Investigación (30%): ${investigacion} → ${(investigacion * 0.30).toFixed(2)} puntos
        `);
 }

// Ejercicio 3: Calcular aumento salarial
function calcularAumento(nombre, salario, categoria) {
    let porcentajeAumento;
    
    switch(categoria.toUpperCase()) {
        case 'A':
            porcentajeAumento = 15;
            break;
        case 'B':
            porcentajeAumento = 30;
            break;
        case 'C':
            porcentajeAumento = 10;
            break;
        case 'D':
            porcentajeAumento = 20;
            break;
        default:
            porcentajeAumento = 0;
    }
    
    const aumento = salario * (porcentajeAumento / 100);
    const nuevoSalario = salario + aumento;
    
    return {
        nombre: nombre,
        salarioOriginal: salario,
        categoria: categoria.toUpperCase(),
        porcentajeAumento: porcentajeAumento,
        aumento: aumento,
        nuevoSalario: nuevoSalario
    };
}
const probarEjercicio3=()=>{
        const nombre = document.querySelector('#nombre3').value;
        const salario = parseFloat(document.querySelector('#salario3').value);
        const categoria = document.querySelector('#categoria3').value;

        if (!nombre || isNaN(salario) || !categoria) {
            mostrarResultado('resultado3', '❌ Por favor completa todos los campos');
            return;
        }

        const resultado = calcularAumento(nombre, salario, categoria);
        mostrarResultado('resultado3', `
            <strong>💰 Cálculo de Aumento Salarial:</strong><br>
            👤 Empleado: ${resultado.nombre}<br>
            💵 Salario Original: ${resultado.salarioOriginal.toFixed(2)}<br>
            🏷️ Categoría: ${resultado.categoria}<br>
            📈 Porcentaje de Aumento: ${resultado.porcentajeAumento}%<br>
            💸 Aumento: ${resultado.aumento.toFixed(2)}<br>
            💰 Nuevo Salario: ${resultado.nuevoSalario.toFixed(2)}
        `);
 }

// Ejercicio 4: Encontrar el número mayor entre dos números
function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}` ;
    } else if (num2 > num1) {
        return `${num2} es mayor que ${num1}` ;
    } else {
        return `${num1} y ${num2} son iguales` ;
    }
}
const probarEjercicio4 = ()=>{
    const num1 = parseFloat(document.querySelector('#num1_ej4').value);
    const num2 = parseFloat(document.querySelector('#num2_ej4').value);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado('resultado4', '❌ Por favor ingresa dos números válidos');
        return;
    }

    const resultado = encontrarMayor(num1, num2);
    mostrarResultado('resultado4', `🔢 ${resultado}`); 
}

// Ejercicio 5: Descuentos en coches
function calcularDescuentoCoche(modelo, precio) {
    let descuento = 0;
    let porcentajeDescuento = 0;
    
    switch(modelo.toUpperCase()) {
        case 'FORD FIESTA':
            porcentajeDescuento = 5;
            break;
        case 'FORD FOCUS':
            porcentajeDescuento = 10;
            break;
        case 'FORD ESCAPE':
            porcentajeDescuento = 20;
            break;
        default:
            porcentajeDescuento = 0;
    }
    
    descuento = precio * (porcentajeDescuento / 100);
    const precioFinal = precio - descuento;
    
    return {
        modelo: modelo,
        precioOriginal: precio,
        porcentajeDescuento: porcentajeDescuento,
        descuento: descuento,
        precioFinal: precioFinal
    };
}
const probarEjercicio5 = ()=>{
    const modelo = document.querySelector('#modelo5').value;
    const precio = parseFloat(document.querySelector('#precio5').value);

    if (!modelo || isNaN(precio)) {
        mostrarResultado('resultado5', '❌ Por favor selecciona un modelo e ingresa un precio válido');
        return;
    }

    const resultado = calcularDescuentoCoche(modelo, precio);
    mostrarResultado('resultado5', `
        <strong>🚗 Tienda de Coches Ford:</strong><br>
        🏷️ Modelo: ${resultado.modelo}<br>
        💵 Precio Original: USD $${resultado.precioOriginal.toFixed(2)}<br>
        🎯 Descuento: USD $${resultado.porcentajeDescuento}%<br>
        💸 Ahorro: USD $${resultado.descuento.toFixed(2)}<br>
        💰 Precio Final: USD $${resultado.precioFinal.toFixed(2)}
    `); 
} 
//Inyección del HTML
app.innerHTML = contenedorPrincipal + ejercicio1 + ejercicio2 + ejercicio3 + ejercicio4 + ejercicio5;


const exerciseHeader = document.querySelector(".exercise-header");



// Mostrar todos los ejercicios al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los ejercicios
    const exercises = document.querySelectorAll('.exercise-content');
    
    // Mostrar cada ejercicio
    exercises.forEach(exercise => {
        exercise.classList.add('active');
        exercise.parentElement.classList.add('active');
    });
});

// Agregar evento de clic al encabezado del ejercicio
/* exerciseHeader.addEventListener("click", () => {
   document.querySelector(".exercise").classList.toggle('active');
   document.querySelector(".exerciseContainer").parentElement.classList.toggle('active');
}); */

// funciones para mostrar y ocultar el contenido del ejercicio
function toggleExercise(numero) {
    const exercise = document.querySelector(`#exercise-${numero}`);
    if (exercise) {
        exercise.classList.add('active');
        exercise.parentElement.classList.add('active');
    }
}
 // Función para mostrar resultados
function mostrarResultado(elementId, contenido) {
    const elemento = document.querySelector(`#${elementId}`);
    elemento.innerHTML = `<div class="result">${contenido}</div>`;
}

//Ejecutar Ejercicio 1, asignando evento de clic al botón y llamando a la función de prueba
const btnEjercicio1 = document.querySelector("#btn-1");
btnEjercicio1.addEventListener("click", probarEjercicio1);

//Ejecutar Ejercicio 2, asignando evento de clic al botón y llamando a la función de prueba
const btnEjercicio2 = document.querySelector("#btn-2");
btnEjercicio2.addEventListener("click", probarEjercicio2);

//Ejecutar Ejercicio 3, asignando evento de clic al boton y llamando a la función de prueba
const btnEjercicio3 = document.querySelector("#btn-3");
btnEjercicio3.addEventListener("click", probarEjercicio3);

//Ejecutar Ejercicio 4, asignando evento de clic al boton y llamando a la función de prueba
const btnEjercicio4 = document.querySelector("#btn-4");
btnEjercicio4.addEventListener("click", probarEjercicio4);

const btnEjercicio5 = document.querySelector("#btn-5");
btnEjercicio5.addEventListener("click", probarEjercicio5);