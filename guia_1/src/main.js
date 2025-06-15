import './style.css'


/* // Ejercicio 1
let edad= prompt("¿Cuál es tu edad?");
let mayorMenor = edad >= 18? "Eres mayor de edad" : "Eres menor de edad";
console.log(mayorMenor);

// Ejercicio 2

 */
 


//Construyendo pagina principal
const app= document.querySelector("#app");
const contenedorPrincipal = `<main class="container">
        <header class="header">
            <h1>🚀 Guía de Ejercicios JavaScript</h1>
            <p>Estructuras de Control - Academia Kodigo</p>
        </header>
    </main>`;
 const ejercicio1 = `<section class="content">
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
                        <button class="btn">Verificar Edad</button>
                        <div id="resultado1"></div>
                    </div>
                </div>
            </div>
            </section>`;
// funciones para mostrar y ocultar el contenido del ejercicio
function toggleExercise(numero) {
    const exercise = document.getElementById(`exercise-${numero}`);
    const exerciseContainer = exercise.parentElement;
    
    exercise.classList.toggle('active');
    exerciseContainer.classList.toggle('active');
}
 // Función para mostrar resultados
        function mostrarResultado(elementId, contenido) {
            const elemento = document.getElementById(elementId);
            elemento.innerHTML = `<div class="result">${contenido}</div>`;
        }

// Desarrollo del Ejercicio
  const probarEjercicio1 = () => {
     const edad = parseInt(document.querySelector('#edad1').value);
            if (isNaN(edad) || edad < 0) {
                mostrarResultado('resultado1', '❌ Por favor ingresa una edad válida');
                return;
            }
            const resultado = verificarMayoriaEdad(edad);
            mostrarResultado('resultado1', `✅ ${resultado}`);
  }


    app.innerHTML = contenedorPrincipal + ejercicio1;


const exerciseHeader = document.querySelector(".exercise-header");

 // Abrir el primer ejercicio por defecto
        document.addEventListener('DOMContentLoaded', function() {
            toggleExercise(1);
        });
// Agregar evento de clic al encabezado del ejercicio
exerciseHeader.addEventListener("click", () => {
   document.querySelector(".exercise").classList.toggle('active');
   document.querySelector(".exerciseContainer").parentElement.classList.toggle('active');
});
