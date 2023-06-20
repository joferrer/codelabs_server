# Como iniciar el proyecto.

1. npm install
2. npm start

# Rutas de la API

## Codelabs - (codelabs/*)

### GET: "/all"

[LINK al metodo](https://codelabsserver-production.up.railway.app/codelabs/all)

Retorna la información de todos los codelabs de la siguiente forma:

```json
{
    "status": true ,
    "message": "",
    "data": [
        {
            "_id": "6490e7be07f168959b39023e",
            "titulo": "Codelab de pueba\r\r",
            "descripcion": "Descripción de prueba para el codelab\r\r",
            "autor": "Jeison Ferrer\r\r",
            "contenido": [
                "Introducción = 5min\r",
                "Titulo 1 = 10min\r",
                "Titulo 2 = 12min\r\r"
            ],
            "tags": [
                "codelabs",
                "introducción\r"
            ],
            "filename": "codelabs_6f2de25d77cb1dd2",
            "__v": 0
        },
    ]
}
```
### POST: "/publicar"

[LINK al metodo publicar](https://codelabsserver-production.up.railway.app/codelabs/publicar)

El metodo post recibe un unico archivo .zip

```html
<form id="miFormulario">
    <input type="file" name="file" accept=".zip" class="form-control" id="formFile">
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

```js
const form = document.querySelector('#miFormulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('file', form.elements.file.files[0]);

  fetch('http://localhost:3000/codelabs/publicar', {
    method: 'POST',
    body: formData
  })
  .then(async (response) => {
    const resp = await response.json()
    if (response.ok) {
        //LOGICA PARA RESPUESTA CORRECTA 200.
    } else {
        //LOGICA PARA EL ERROR 400.
    }
  })
  .catch(error => {
    //LOGICA PARA CAPTURAR ERROR.
  });
});
```
El servidor responderá con un status 200 si todo salió bien o con un status 400 en caso de que halla errores en la estructura de los archivos markdown enviados.

Estos son los requisitos que el archivo .zip debe cumplir:

- Debe contener unicamente archivos markdown, no carpetas ni otro tipo de archivos.
- Debe conetener archivos markdown bien construidos.
- Debe contener un markdown con el nombre "contenido" que debe tener la siguiente estructura: 
```markdown
# Titulo: Codelab de pueba

# Descripcion: Descripción de prueba para el codelab

# Contenido: 

-Introducción = 5min
-Titulo 1 = 10min
-Titulo 2 = 12min

# Autor: Jeison Ferrer

# Tags: codelabs, introducción

```
#### Error en metodo POST

La siguiente es un ejemplo de una respuesta negativa. 

```json
{
    "status": false,
    "message": "Ha ocurrido un error: Verifique que el archivo contenido.md esté bien escrito. ValidationError: titulo: Path `titulo` is required., descripcion: Path `descripcion` is required., autor: Path `autor` is required., filename: Path `filename` is required.",
    "data": [
        {
            "status": false,
            "message": "prueba.md", //Nombre del archivo markdown mal escrito.
            "data": [
                {
                    "lineNumber": 3,
                    "ruleNames": [
                        "MD009",
                        "no-trailing-spaces"
                    ],
                    "ruleDescription": "Trailing spaces",
                    "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.29.0/doc/md009.md",
                    "errorDetail": "Expected: 0 or 2; Actual: 1",
                    "errorContext": null,
                    "errorRange": [
                        39,
                        1
                    ],
                    "fixInfo": {
                        "editColumn": 39,
                        "deleteCount": 1
                    }
                },
                {
                    "lineNumber": 3,
                    "ruleNames": [
                        "MD047",
                        "single-trailing-newline"
                    ],
                    "ruleDescription": "Files should end with a single newline character",
                    "ruleInformation": "https://github.com/DavidAnson/markdownlint/blob/v0.29.0/doc/md047.md",
                    "errorDetail": null,
                    "errorContext": null,
                    "errorRange": [
                        39,
                        1
                    ],
                    "fixInfo": {
                        "editColumn": 40,
                        "insertText": "\n"
                    }
                }
            ]
        }
    ]
}
```

### GET: "/buscar/:name"

Esta consulta devuelve todos los markdown de un codelab como un array de html's.
[Ejemplo de GET /buscar/:name](https://codelabsserver-production.up.railway.app/codelabs/buscar/codelabs_5e2e21d1a6187dda)
Ejemplo: 

```json
{
    "status": true,
    "message": "",
    "data": [
        "<h1 id=\"titulo-codelab-de-pueba\">Titulo: Codelab de pueba</h1>\n<h1 id=\"descripcion-descripción-de-prueba-para-el-codelab\">Descripcion: Descripción de prueba para el codelab</h1>\n<h1 id=\"contenido\">Contenido:</h1>\n<p>-Introducción = 5min\n-Titulo 1 = 10min\n-Titulo 2 = 12min</p>\n<h1 id=\"autor-jeison-ferrer\">Autor: Jeison Ferrer</h1>\n<h1 id=\"tags-codelabs-introducción\">Tags: codelabs, introducción</h1>\n",
        "<h1 id=\"goodmd\">good.md</h1>\n<p>This file passes all rules.</p>\n",
        "<h1 id=\"esto-es-una-prueba-de-md\">Esto es una prueba de md</h1>\n<p>Prueba de md. Archivo de prueba de md.</p>\n"
    ]
}

```