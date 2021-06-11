function App() {
  const principal = document.querySelector(".principal");

  const getInicial = (nombre) => {
    const partesNombre = nombre.split(" ");
    const posicion = partesNombre[0].length > 2 ? 0 : 1;
    return partesNombre[posicion].charAt(0).toUpperCase();
  };

  const pintarListaSenyores = () => {
    for (const {
      nombre,
      foto,
      profesion,
      estado,
      twitter,
      marcado,
    } of senyores) {
      const senyorElemento = document
        .querySelector(".senyor-molde")
        .cloneNode(true);
      senyorElemento.classList.remove("senyor-molde");
      const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
      nombreElemento.textContent = nombre;
      const imagen = senyorElemento.querySelector(".avatar > img");
      imagen.src = `img/${foto}`;
      imagen.alt = `${nombre} apuntándote con el dedo`;
      const profesionElemento = senyorElemento.querySelector(
        ".datos-profesion .valor-dato"
      );
      profesionElemento.textContent = profesion;
      const estadoElemento = senyorElemento.querySelector(
        ".datos-estado .valor-dato"
      );
      estadoElemento.textContent = estado;
      const twitterElemento = senyorElemento.querySelector(
        ".datos-twitter .valor-dato"
      );
      twitterElemento.textContent = twitter;
      const inicialElemento = senyorElemento.querySelector(".inicial");
      inicialElemento.textContent = getInicial(nombre);

      if (marcado) {
        senyorElemento.classList.add("marcado");
      }

      principal.append(senyorElemento);
    }
  };

  const pintaTotal = () => {
    const totalElemento = document.querySelector(".total");
    totalElemento.textContent = senyores.filter(
      (senyor) => senyor.marcado
    ).length;
  };

  const borrarListaSenyores = () => {
    const senyoresElementos = principal.querySelectorAll(
      ".senyor:not(.senyor-molde)"
    );
    for (const senyorElemento of senyoresElementos) {
      senyorElemento.remove();
    }
  };

  const pintaUI = () => {
    pintaTotal();
    borrarListaSenyores();
    pintarListaSenyores();
  };

  pintaUI();

  const botonMarcarTodos = document.querySelector(".marcar-todos");
  botonMarcarTodos.addEventListener("click", (evento) => {
    evento.preventDefault();
    senyores = senyores.map((senyor) => ({ ...senyor, marcado: true }));
    pintaUI();
  });

  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Señores que te apuntan con el dedo</title>
      </head>
      <body>
        <div class="contenedor-general container-xl">
          <header class="cabecera text-center py-2 row">
            <h1 class="col-12">Señores que te apuntan con el dedo</h1>
            <span class="col-12 mt-2">
              <span class="total">0</span> señores que te apuntan con el dedo
              marcados
            </span>
            <a href="marcar-todos" class="marcar-todos col-2 offset-5 btn mt-2">
              Marcar todos
            </a>
          </header>
          <main class="principal mt-2 row">
            <article class="senyor senyor-molde col-8 offset-2 mb-4">
              <div class="row">
                <div class="avatar col">
                  <img
                    src=""
                    class="img-fluid rounded-circle"
                    width="214"
                    alt=""
                  />
                  <span class="inicial text-center rounded-circle"></span>
                </div>
                <div class="info col">
                  <h2 class="nombre-senyor"></h2>
                  <ul class="datos list-unstyled mt-2">
                    <li class="datos-profesion row">
                      <span class="nombre-dato col-4">Profesión:</span>
                      <span class="valor-dato col"></span>
                    </li>
                    <li class="datos-estado row">
                      <span class="nombre-dato col-4">Estado:</span>
                      <span class="valor-dato col"></span>
                    </li>
                    <li class="datos-twitter row">
                      <span class="nombre-dato col-4">Twitter:</span>
                      <span class="valor-dato col"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <i class="icono fas fa-check"></i>
            </article>
          </main>
        </div>
      </body>
    </html>
  );
}

export default App;
