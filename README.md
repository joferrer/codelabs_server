# Codelabs Server

[![DatAnnouncement](https://raw.githubusercontent.com/JhonnyGCH/img/main/codelabs.png)]()

## Table of contents 
1. 🤔 [General Information](#1--general-information)
2. 💻 [Architecture](#2--architecture)
3. 🔗 [Tecnologies](#3--tecnologies)
4. ⚡ [Instalation](#4-%EF%B8%8F-instalation)
5. 📫 [License](#5--license)
6. 👯‍ [Authors and roles](#6-%EF%B8%8F-authors-and-roles)
7. 🏛 [Academic Institution](#7--academic-institution)
8. 👩‍💻 [Documentation](#8--documentation)

## 1. 🤔 General Information

### ![Web aplication](https://img.shields.io/badge/Web_Aplication-ff69b4)
The project consists of the development of a web application that seeks to provide access to interactive learning resources to people with a low level of technological ability and software development. The application will allow users to create and deploy codelabs, which are step-by-step interactive tutorials, with the aim of facilitating the learning process.

The web application will focus on offering an intuitive and friendly interface so that anyone, regardless of their level of technical knowledge, can use it without difficulty. Special attention will be paid to usability and user experience, ensuring that the platform is accessible and attractive.

#### ![Catalogue](https://img.shields.io/badge/Catalogue-green)

#### ![Add and generate Codelabs](https://img.shields.io/badge/Add_and_generate_Codelabs-yellow)

#### ![Filtering](https://img.shields.io/badge/Filtering-9cf)

#### ![Edit Codelabs](https://img.shields.io/badge/Edit_Codelabs-succes)

#### ![Rate Codelabs](https://img.shields.io/badge/Rate_codelabs-red)


## 2. 💻 Architecture
  
  Arcitecture hERE
  
  
  <div align="center">
   <img src="https://raw.githubusercontent.com/JhonnyGCH/img/main/arquitectura.png" width="800" height="340">
</div>
  

## 3. 🔗 Tecnologies


| Tecnologies                                                                        | Definition                                                                            |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [![HTML5](https://img.shields.io/badge/HTML5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)             | HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). |
| [![CSS](https://img.shields.io/badge/CSS-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)                                     | Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. |
| [![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/) | TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| [![JavaScript](https://img.shields.io/badge/JavaScript-blue)](https://www.typescriptlang.org/) | JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
 |
| [![Bootstrap](https://img.shields.io/badge/Bootstrap-purple)](https://getbootstrap.com/) | Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version of Bootstrap. |
| [![Railway](https://img.shields.io/badge/Railway-blue)](https://railway.app/) | Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud. 

## 4. ⚡️ Instalation

![Local](https://img.shields.io/badge/Local-yellow)

* For the local installation of the project by download, you can do it by the following link: [![Download](https://img.shields.io/badge/Download-green)](https://github.com/joferrer/codelabs_server/archive/refs/heads/main.zip) 

* Go to your Downloads folder on your computer
* Unzip the .zip file named DatAnnouncement-main

![GitHub](https://img.shields.io/badge/GitHub-important)
* Perform a Fork. This will allow you to have a copy of the repository in your own account.

* Cloning the project. By cloning the project into your IDE of choice you can edit and modify it to your liking. Or you can make a Local copy of your new repository.


### ![How to run](https://img.shields.io/badge/How_to_run-blueviolet)



## 5. 📫 License

![Licencia](https://img.shields.io/badge/Licencia-MTI-blue)

**Free Software !!! :D**

## 6. 👯‍♀️ Authors and roles 

- [@Gederson Gustavo](https://github.com/GedersonG) [FrontEnd Developer]

- [@Camilo Ramirez](https://www.github.com/CamiloRamirezP) [Documenter]

- [@Daniela Sanchez](https://www.github.com/DanielaSanchezb) [Documenter]

- [@Jeison Ferrer](https://www.github.com/joferrer) [BackEnd Developer, DataBase Developer]
 
- [@Jhonny Guarin](https://www.github.com/JhonnyGCH) [Documenter, Designer]

  
## 7. 🏛 Academic Institution
Project developed in the subject Software Architecture of the [Systems Engineering Program] of the [Universidad Francisco de Paula Santander]

   [Systems Engineering Program]:<https://ingsistemas.cloud.ufps.edu.co/>
   [Universidad Francisco de Paula Santander]:<https://ww2.ufps.edu.co/>
 
 <div align="center">
   <img src="https://ingsistemas.cloud.ufps.edu.co/rsc/img/logo_vertical_ingsistemas_ht180.png" width="400" height="130">
</div>

  
## 8. 👩‍💻 Documentation

[![Documentation](https://img.shields.io/badge/Documentaci%C3%B3n-blueviolet)](https://docs.google.com/document/d/1QURNmbhpDVHpT1W2JKgSn5nRcwy2CXlAzBQNPCajtVY/edit?usp=sharing)
 
 
 # Como iniciar el proyecto.

1. npm install
2. npm start

### Rutas de la API

### Codelabs - (codelabs/*)

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
