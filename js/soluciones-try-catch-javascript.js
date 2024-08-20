// Soluciones a los ejercicios de try...catch en JavaScript

// Ejercicio 1: Manejo básico de errores
console.log("Ejercicio 1: Manejo básico de errores");
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.error("Error en la división:", error.message);
        return null;
    }
}

console.log(dividir(10, 2));  // Imprime: 5
console.log(dividir(10, 0));  // Imprime: Error en la división: No se puede dividir por cero
                              //          null

// Ejercicio 2: Manejo de diferentes tipos de errores
console.log("\nEjercicio 2: Manejo de diferentes tipos de errores");
function procesarDatos(datos) {
    try {
        console.log(datos.propiedad.subpropiedad);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error de tipo: Probablemente intentando acceder a una propiedad de null o undefined");
        } else if (error instanceof ReferenceError) {
            console.error("Error de referencia: Variable no definida");
        } else {
            console.error("Ocurrió un error inesperado:", error.message);
        }
    }
}

procesarDatos(null);  // Imprime: Error de tipo: Probablemente intentando acceder a una propiedad de null o undefined
procesarDatos({});    // Imprime: Error de tipo: Probablemente intentando acceder a una propiedad de null o undefined

// Ejercicio 3: Uso de finally
console.log("\nEjercicio 3: Uso de finally");
function conectarBaseDeDatos() {
    let conexion = null;
    try {
        conexion = { estado: "abierta" };
        if (Math.random() < 0.5) throw new Error("Error de conexión");
        return "Datos obtenidos con éxito";
    } catch (error) {
        console.error("Error:", error.message);
        return "No se pudieron obtener los datos";
    } finally {
        if (conexion && conexion.estado === "abierta") {
            console.log("Cerrando conexión...");
            conexion.estado = "cerrada";
        }
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`Intento ${i + 1}:`, conectarBaseDeDatos());
}

// Ejercicio 4: Creación y manejo de errores personalizados
console.log("\nEjercicio 4: Creación y manejo de errores personalizados");
class ValidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValidacionError";
    }
}

function validarEdad(edad) {
    if (typeof edad !== 'number' || isNaN(edad)) {
        throw new ValidacionError("La edad debe ser un número");
    }
    if (edad < 0 || edad > 120) {
        throw new ValidacionError("La edad debe estar entre 0 y 120");
    }
    return edad;
}

try {
    console.log(validarEdad(25));  // Imprime: 25
    console.log(validarEdad(-5));  // Lanza ValidacionError
    console.log(validarEdad(150)); // Lanza ValidacionError
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// Ejercicio 5: Propagación de errores
console.log("\nEjercicio 5: Propagación de errores");
function func1() {
    throw new Error("Error en func1");
}

function func2() {
    try {
        func1();
    } catch (error) {
        console.error("Error capturado en func2:", error.message);
        throw new Error("Error propagado desde func2");
    }
}

function func3() {
    try {
        func2();
    } catch (error) {
        console.error("Error capturado en func3:", error.message);
        throw error; // Propaga el error
    }
}

try {
    func3();
} catch (error) {
    console.error("Error capturado en el nivel superior:", error.message);
}

// Bonus: Ejercicio 6: Async/Await con try...catch
console.log("\nEjercicio 6: Async/Await con try...catch");
async function obtenerDatosUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: "Usuario 1" });
            } else {
                reject(new Error("Usuario no encontrado"));
            }
        }, 1000);
    });
}

async function procesarUsuario(id) {
    try {
        const usuario = await obtenerDatosUsuario(id);
        console.log("Usuario procesado:", usuario);
    } catch (error) {
        console.error("Error al procesar usuario:", error.message);
    }
}

procesarUsuario(1).then(() => console.log("Procesamiento completado"));
procesarUsuario(2).then(() => console.log("Procesamiento completado"));
