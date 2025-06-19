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
    <div class="exercise-header">
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

//HTML del  Ejercicio 6
const ejercicio6 = `
<section class="exercise">
                <div class="exercise-header" >
                    <h3>Ejercicio 6: Descuentos en Viajes Turísticos</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-6">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 6: Calcular descuentos en viajes turísticos desde Palma
function calcularDescuentoViaje(origen, destino, precioViaje) {
    let porcentajeDescuento = 0;
    
    if (origen.toLowerCase() === 'palma') {
        switch(destino.toLowerCase()) {
            case 'la costa del sol':
                porcentajeDescuento = 5;
                break;
            case 'panchimalco':
                porcentajeDescuento = 10;
                break;
            case 'puerto el triunfo':
                porcentajeDescuento = 15;
                break;
            default:
                porcentajeDescuento = 0;
        }
    }
    
    const descuento = precioViaje * (porcentajeDescuento / 100);
    const precioFinal = precioViaje - descuento;
    
    return {
        origen: origen,
        destino: destino,
        precioOriginal: precioViaje,
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
                                <label>Ciudad de origen:</label>
                                <input type="text" id="origen6" placeholder="Ej: Palma" value="Palma">
                            </div>
                            <div class="form-group">
                                <label>Destino:</label>
                                <select id="destino6">
                                    <option value="">Seleccionar destino...</option>
                                    <option value="La costa del sol">La costa del sol - 5%</option>
                                    <option value="Panchimalco">Panchimalco - 10%</option>
                                    <option value="Puerto el triunfo">Puerto el triunfo - 15%</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Precio del viaje:</label>
                                <input type="number" id="precio6" placeholder="Ej: 500">
                            </div>
                        </div>
                        <button class="btn" id="btn-6">Calcular Descuento</button>
                        <div id="resultado6"></div>
                    </div>
                </div>
            </section>`

//HTML del Ejercicio 7
const ejercicio7 = `
<section class="exercise">
                <div class="exercise-header" >
                    <h3>Ejercicio 7: Análisis de 10 Valores Enteros</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-7">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 7: Análisis de 10 valores enteros
function analizarValores(valores) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;
    
    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i];
        
        // Contar negativos y positivos
        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }
        
        // Contar múltiplos de 15
        if (valor % 15 === 0 && valor !== 0) {
            multiplosDe15++;
        }
        
        // Sumar pares
        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }
    
    return {
        valores: valores,
        negativos: negativos,
        positivos: positivos,
        multiplosDe15: multiplosDe15,
        sumaPares: sumaPares
    };
}</code></pre>
                    </div>
                    <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <p>Ingresa 10 valores enteros separados por comas:</p>
                        <div class="form-group">
                            <label>Valores (separados por comas):</label>
                            <input type="text" id="valores7" placeholder="Ej: -5, 10, 15, -3, 8, 30, 0, 7, -15, 12">
                        </div>
                        <button class="btn" id="btn-7">Analizar Valores</button>
                        <div id="resultado7"></div>
                    </div>
                </div>
            </section>`
//HTML del Ejercicio 8
const ejercicio8 = `
<section class="exercise">
 <div class="exercise-header">
                    <h3>Ejercicio 8: Tabla de Multiplicar</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-8">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 8: Generar tabla de multiplicar del 1 al 10
function generarTablaMultiplicar(numero) {
    let tabla = [];
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla.push(\`\${numero} × \${i} = \${resultado}\`);
    }
    
    return tabla;
}</code></pre>
                    </div>
                    <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <div class="form-group">
                            <label>Número para la tabla de multiplicar:</label>
                            <input type="number" id="numero8" placeholder="Ej: 7">
                        </div>
                        <button class="btn" id="btn-8">Generar Tabla</button>
                        <div id="resultado8"></div>
                    </div>
                </div>
            </section>`;

//HTML del Ejercicio 9
const ejercicio9=` <section class="exercise">
                <div class="exercise-header" >
                    <h3>Ejercicio 9: Conversión de Temperatura y Clasificación</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-9">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 9: Conversión de Celsius a Fahrenheit y clasificación
function convertirYClasificarTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    let clasificacion;
    
    if (fahrenheit >= 14 && fahrenheit < 32) {
        clasificacion = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        clasificacion = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        clasificacion = "Temperatura alta";
    } else {
        clasificacion = "Temperatura desconocida";
    }
    
    return {
        celsius: celsius,
        fahrenheit: fahrenheit.toFixed(2),
        clasificacion: clasificacion
    };
}</code></pre>
                    </div>
                    <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <div class="form-group">
                            <label>Temperatura en Celsius:</label>
                            <input type="number" id="celsius9" step="0.1" placeholder="Ej: 25.5">
                        </div>
                        <button class="btn" id="btn-9">Convertir y Clasificar</button>
                        <div id="resultado9"></div>
                    </div>
                </section>`

//HTML del Ejercicio 10
const ejercicio10 = 
`            <section class="exercise">
                <div class="exercise-header">
                    <h3>Ejercicio 10: Promedios de Edades por Turno</h3>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="exercise-content" id="exercise-10">
                    <div class="code-section">
                        <h4>📝 Código:</h4>
                        <pre><code>// Ejercicio 10: Calcular promedios de edades por turno
function calcularPromediosEdades(edadesManana, edadesTarde, edadesNoche) {
    function calcularPromedio(edades) {
        const suma = edades.reduce((acc, edad) => acc + edad, 0);
        return suma / edades.length;
    }
    
    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);
    
    let turnoMayor;
    let promedioMayor = Math.max(promedioManana, promedioTarde, promedioNoche);
    
    if (promedioMayor === promedioManana) {
        turnoMayor = "Mañana";
    } else if (promedioMayor === promedioTarde) {
        turnoMayor = "Tarde";
    } else {
        turnoMayor = "Noche";
    }
    
    return {
        promedioManana: promedioManana.toFixed(2),
        promedioTarde: promedioTarde.toFixed(2),
        promedioNoche: promedioNoche.toFixed(2),
        turnoMayor: turnoMayor,
        promedioMayor: promedioMayor.toFixed(2)
    };
}</code></pre>
                    </div>
                    <div class="test-section">
                        <h4>🧪 Prueba el código:</h4>
                        <div class="form-group">
                            <label>Edades turno mañana (5 estudiantes, separadas por comas):</label>
                            <input type="text" id="edadesManana10" placeholder="Ej: 18, 19, 20, 17, 21">
                        </div>
                        <div class="form-group">
                            <label>Edades turno tarde (6 estudiantes, separadas por comas):</label>
                            <input type="text" id="edadesTarde10" placeholder="Ej: 22, 23, 20, 19, 24, 18">
                        </div>
                        <div class="form-group">
                            <label>Edades turno noche (11 estudiantes, separadas por comas):</label>
                            <input type="text" id="edadesNoche10" placeholder="Ej: 25, 30, 28, 26, 32, 29, 27, 31, 24, 33, 35">
                        </div>
                        <button class="btn" id="btn-10">Calcular Promedios</button>
                        <div id="resultado10"></div>
                    </div>
                </div>
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
        🎯 Descuento: ${resultado.porcentajeDescuento}%<br>
        💸 Ahorro: USD $${resultado.descuento.toFixed(2)}<br>
        💰 Precio Final: USD $${resultado.precioFinal.toFixed(2)}
    `); 
} 

// Ejercicio 6: Calcular descuentos en viajes turísticos desde Palma
function calcularDescuentoViaje(origen, destino, precioViaje) {
    let porcentajeDescuento = 0;
    
    if (origen.toLowerCase() === 'palma') {
        switch(destino.toLowerCase()) {
            case 'la costa del sol':
                porcentajeDescuento = 5;
                break;
            case 'panchimalco':
                porcentajeDescuento = 10;
                break;
            case 'puerto el triunfo':
                porcentajeDescuento = 15;
                break;
            default:
                porcentajeDescuento = 0;
        }
    }
    
    const descuento = precioViaje * (porcentajeDescuento / 100);
    const precioFinal = precioViaje - descuento;
    
    return {
        origen: origen,
        destino: destino,
        precioOriginal: precioViaje,
        porcentajeDescuento: porcentajeDescuento,
        descuento: descuento,
        precioFinal: precioFinal
    };
}
const probarEjercicio6 =() =>{
    const origen = document.querySelector('#origen6').value;
    const destino = document.querySelector('#destino6').value;
    const precio = parseFloat(document.querySelector('#precio6').value);

    if (!origen || !destino || isNaN(precio)) {
        mostrarResultado('resultado6', '❌ Por favor completa todos los campos');
        return;
    }

    const resultado = calcularDescuentoViaje(origen, destino, precio);
    mostrarResultado('resultado6', `
        <strong>✈️ Viajes Turísticos:</strong><br>
        📍 Origen: ${resultado.origen}<br>
        🎯 Destino: ${resultado.destino}<br>
        💵 Precio Original: ${resultado.precioOriginal.toFixed(2)}<br>
        🎁 Descuento: ${resultado.porcentajeDescuento}%<br>
        💸 Ahorro: ${resultado.descuento.toFixed(2)}<br>
        💰 Precio Final: ${resultado.precioFinal.toFixed(2)}
    `);
}
// Ejercicio 7: Análisis de valores
function analizarValores(valores) {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;
    
    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i];
        
        // Contar negativos y positivos
        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }
        
        // Contar múltiplos de 15
        if (valor % 15 === 0 && valor !== 0) {
            multiplosDe15++;
        }
        
        // Sumar pares
        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }
    
    return {
        valores: valores,
        negativos: negativos,
        positivos: positivos,
        multiplosDe15: multiplosDe15,
        sumaPares: sumaPares
    };
}

const probarEjercicio7 =() =>{
    const valoresTexto = document.getElementById('valores7').value;
    
    if (!valoresTexto) {
        mostrarResultado('resultado7', '❌ Por favor ingresa los valores');
        return;
    }

    const valores = valoresTexto.split(',').map(val => parseInt(val.trim())).filter(val => !isNaN(val));
    
    if (valores.length !== 10) {
        mostrarResultado('resultado7', '❌ Debes ingresar exactamente 10 valores enteros');
        return;
    }

    const resultado = analizarValores(valores);
    mostrarResultado('resultado7', `
        <strong>📊 Análisis de 10 Valores:</strong><br>
        🔢 Valores ingresados: [${resultado.valores.join(', ')}]<br>
        <br>
        <strong>Resultados:</strong><br>
        ❌ Valores negativos: ${resultado.negativos}<br>
        ✅ Valores positivos: ${resultado.positivos}<br>
        🔢 Múltiplos de 15: ${resultado.multiplosDe15}<br>
        ➕ Suma de números pares: ${resultado.sumaPares}
    `);
}

// Ejercicio 8: Tabla de multiplicar
function generarTablaMultiplicar(numero) {
    let tabla = [];
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla.push(`${numero} × ${i} = ${resultado}`);
    }
    
    return tabla;
}

const probarEjercicio8 =() =>{
    const numero = parseInt(document.querySelector('#numero8').value);
    
    if (isNaN(numero)) {
        mostrarResultado('resultado8', '❌ Por favor ingresa un número válido');
        return;
    }

    const tabla = generarTablaMultiplicar(numero);
    const tablaHTML = tabla.map(linea => `<div class="tabla-multiplicar">${linea}</div>`).join('');
    
    mostrarResultado('resultado8', `
        <strong>📊 Tabla de Multiplicar del ${numero}:</strong><br>
        ${tablaHTML}
    `);
}

// Ejercicio 9: Conversión de temperatura
function convertirYClasificarTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    let clasificacion;
    
    if (fahrenheit >= 14 && fahrenheit < 32) {
        clasificacion = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        clasificacion = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        clasificacion = "Temperatura alta";
    } else {
        clasificacion = "Temperatura desconocida";
    }
    
    return {
        celsius: celsius,
        fahrenheit: fahrenheit.toFixed(2),
        clasificacion: clasificacion
    };
}

const probarEjercicio9= ()=> {
    const celsius = parseFloat(document.getElementById('celsius9').value);
    
    if (isNaN(celsius)) {
        mostrarResultado('resultado9', '❌ Por favor ingresa una temperatura válida');
        return;
    }

    const resultado = convertirYClasificarTemperatura(celsius);
    mostrarResultado('resultado9', `
        <strong>🌡️ Conversión de Temperatura:</strong><br>
        ❄️ Celsius: ${resultado.celsius}°C<br>
        🔥 Fahrenheit: ${resultado.fahrenheit}°F<br>
        📊 Clasificación: ${resultado.clasificacion}
    `);
}

// Ejercicio 10: Promedios de edades
function calcularPromediosEdades(edadesManana, edadesTarde, edadesNoche) {
    function calcularPromedio(edades) {
        const suma = edades.reduce((acc, edad) => acc + edad, 0);
        return suma / edades.length;
    }
    
    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);
    
    let turnoMayor;
    let promedioMayor = Math.max(promedioManana, promedioTarde, promedioNoche);
    
    if (promedioMayor === promedioManana) {
        turnoMayor = "Mañana";
    } else if (promedioMayor === promedioTarde) {
        turnoMayor = "Tarde";
    } else {
        turnoMayor = "Noche";
    }
    
    return {
        promedioManana: promedioManana.toFixed(2),
        promedioTarde: promedioTarde.toFixed(2),
        promedioNoche: promedioNoche.toFixed(2),
        turnoMayor: turnoMayor,
        promedioMayor: promedioMayor.toFixed(2)
    };
}

const probarEjercicio10= ()=> {
    const edadesMananaTexto = document.querySelector('#edadesManana10').value;
    const edadesTardeTexto = document.querySelector('#edadesTarde10').value;
    const edadesNocheTexto = document.querySelector('#edadesNoche10').value;

    if (!edadesMananaTexto || !edadesTardeTexto || !edadesNocheTexto) {
        mostrarResultado('resultado10', '❌ Por favor completa todos los campos');
        return;
    }

    const edadesManana = [];
    const arrayManana = edadesMananaTexto.split(',');
    for (let i = 0; i < arrayManana.length; i++) {
        const edad = parseInt(arrayManana[i].trim());
        if (!isNaN(edad)) {
            edadesManana.push(edad);
        }
    }

    const edadesTarde = [];
    const arrayTarde = edadesTardeTexto.split(',');
    for (let i = 0; i < arrayTarde.length; i++) {
        const edad = parseInt(arrayTarde[i].trim());
        if (!isNaN(edad)) {
            edadesTarde.push(edad);
        }
    }

    const edadesNoche = [];
    const arrayNoche = edadesNocheTexto.split(',');
    for (let i = 0; i < arrayNoche.length; i++) {
        const edad = parseInt(arrayNoche[i].trim());
        if (!isNaN(edad)) {
            edadesNoche.push(edad);
        }
    }

    if (edadesManana.length !== 5 || edadesTarde.length !== 6 || edadesNoche.length !== 11) {
        mostrarResultado('resultado10', '❌ Debes ingresar exactamente 5 edades para mañana, 6 para tarde y 11 para noche');
        return;
    }

    const resultado = calcularPromediosEdades(edadesManana, edadesTarde, edadesNoche);
    mostrarResultado('resultado10', `
        <strong>📊 Análisis de Edades por Turno:</strong><br>
        <br>
        <strong>Promedios por turno:</strong><br>
        🌅 Turno Mañana: ${resultado.promedioManana} años<br>
        🌆 Turno Tarde: ${resultado.promedioTarde} años<br>
        🌙 Turno Noche: ${resultado.promedioNoche} años<br>
        <br>
        <strong>🏆 Turno con mayor promedio de edad:</strong><br>
        ${resultado.turnoMayor} con ${resultado.promedioMayor} años de promedio
    `);
}


//Inyección del HTML
app.innerHTML = contenedorPrincipal + ejercicio1 + ejercicio2 + ejercicio3 
+ ejercicio4 + ejercicio5 + ejercicio6 + ejercicio7 + ejercicio8 + ejercicio9 + ejercicio10;


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

const btnEjercicio6 = document.querySelector("#btn-6");
btnEjercicio6.addEventListener("click", probarEjercicio6);

const btnEjercicio7 = document.querySelector("#btn-7");
btnEjercicio7.addEventListener("click", probarEjercicio7);

const btnEjercicio8 = document.querySelector("#btn-8");
btnEjercicio8.addEventListener("click", probarEjercicio8);

const btnEjercicio9 = document.querySelector("#btn-9");
btnEjercicio9.addEventListener("click", probarEjercicio9);

const btnEjercicio10 = document.querySelector("#btn-10");
btnEjercicio10.addEventListener("click", probarEjercicio10);
