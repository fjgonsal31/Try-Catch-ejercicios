// Ejercicios para practicar try...catch en JavaScript

// Ejercicio 1: Manejo básico de errores
console.log("Ejercicio 1: Manejo básico de errores");
// Implementa la función dividir usando try...catch
// Debe lanzar un error si b es cero
function dividir(a, b) {
  let resultado = null;

  try {
    if (b === 0) {
      throw new Error("Error!: No se puede dividir entre 0.");
    } else {
      resultado = a / b;
    }
  } catch (error) {
    console.error(error.message);
  }
  return resultado;
}

// Prueba la función
console.log(dividir(10, 2)); // Debería imprimir: 5
console.log(dividir(10, 0)); // Debería imprimir un mensaje de error y retornar null

// Ejercicio 2: Manejo de diferentes tipos de errores
console.log("\nEjercicio 2: Manejo de diferentes tipos de errores");

function provocarErrores() {
  try {
    // Intentamos acceder a una variable no declarada, lo que provocará un ReferenceError
    let resultado = variableNoDeclarada.metodoInexistente();
  } catch (error) {
    console.error("Primer error capturado:", error.message);

    try {
      // Ahora, intencionalmente provocamos un TypeError
      let otraVariable = undefined;
      otraVariable.metodoInexistente();
    } catch (otroError) {
      console.error("Segundo error capturado:", otroError.message);
    }
  }
}

provocarErrores();

// Ejercicio 3: Uso de finally
// console.log("\nEjercicio 3: Uso de finally");
// daba error y no quedó claro

// Ejercicio 4: Creación y manejo de errores personalizados
console.log("\nEjercicio 4: Creación y manejo de errores personalizados");
class ValidacionError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ValidacionError";
  }
}

function validarEdad(edad) {
  // Implementa la validación de edad
  // Debe lanzar un ValidacionError si la edad es negativa o mayor a 120
  try {
    if (edad > 0 && edad < 120) {
      return edad;
    } else {
      throw new Error("Error!: edad no válida");
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Prueba la función
try {
  console.log(validarEdad(25)); // Debería imprimir: 25
  console.log(validarEdad(-5)); // Debería lanzar un ValidacionError
  console.log(validarEdad(150)); // Debería lanzar un ValidacionError
} catch (error) {
  console.error(error.name + ": " + error.message);
}

// // Ejercicio 5: Propagación de errores
// console.log("\nEjercicio 5: Propagación de errores");
// function func1() {
//   // Lanza un error
//   throw new Error("Error en func1");
// }

// function func2() {
//   // Llama a func1() y maneja el error
//   // TODO: Tu código aquí
// }

// function func3() {
//   // Llama a func2() y propaga el error
//   // TODO: Tu código aquí
// }

// // Prueba las funciones
// try {
//   func3();
// } catch (error) {
//   console.error("Error capturado en el nivel superior:", error.message);
// }

// // Bonus: Ejercicio 6: Async/Await con try...catch
// console.log("\nEjercicio 6: Async/Await con try...catch");
// async function obtenerDatosUsuario(id) {
//   // Simula una llamada a una API
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 1) {
//         resolve({ id: 1, nombre: "Usuario 1" });
//       } else {
//         reject(new Error("Usuario no encontrado"));
//       }
//     }, 1000);
//   });
// }

// async function procesarUsuario(id) {
//   // Utiliza try...catch con async/await para manejar errores
//   // TODO: Tu código aquí
// }

// // Prueba la función
// procesarUsuario(1).then(() => console.log("Procesamiento completado"));
// procesarUsuario(2)
//   .then(() => console.log("Procesamiento completado"))
//   .catch((error) => console.error(error.message));
