/*
  <body>
    <form>
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label for="dni">DNI:</label>
        <input type="text" id="dni" name="dni" />
      </div>
      <div>
        <label for="clientType">Tipo de Cliente:</label>
        <select id="clientType" name="clientType">
          <option value="mayorista">Cliente Mayorista</option>
          <option value="minorista">Cliente Minorista</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
      </body>
    */

// obten el nodo del formulario
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const dniInput = document.querySelector("#dni");
// añade un evento al formulario
form.addEventListener("submit", function (e) {
  // previene el envío del formulario
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // imprime el objeto en la consola
  console.log(data);
});

// añade validaciones al formulario en tiempo real
form.addEventListener("input", function (e) {
  // obten el valor del campo
  const value = e.target.value;

  // valida que el campo tenga al menos 6 caracteres si es el campo de nombre
  if (e.target === nameInput && value.length < 6) {
    // si el campo tiene menos de 6 caracteres, añade la clase "is-invalid"
    e.target.classList.add("is-invalid");
  } else if (e.target === nameInput) {
    // si el campo tiene 6 o más caracteres, remueve la clase "is-invalid"
    e.target.classList.remove("is-invalid");
  }

  // valida que el campo tenga exactamente 8 caracteres si es el campo de DNI
  if (e.target === dniInput && value.length !== 8) {
    // si el campo no tiene exactamente 8 caracteres, añade la clase "is-invalid"
    e.target.classList.add("is-invalid");
  } else if (e.target === dniInput) {
    // si el campo tiene exactamente 8 caracteres, remueve la clase "is-invalid"
    e.target.classList.remove("is-invalid");
  }

  if (
    !nameInput.value ||
    !dniInput.value ||
    !form.querySelector(".is-invalid")
  ) {
    form.querySelector("button").disabled = true;
  } else {
    form.querySelector("button").disabled = false;
  }
});
