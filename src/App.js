function App() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Señores que te apuntan con el dedo</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
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
