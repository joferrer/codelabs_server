# Como iniciar el proyecto.

1. npm install
2. npm start

# Rutas de la API

## Codelabs (codelabs/*)
- "/all" -> retorna la información de todos los codelabs de la siguiente forma: 

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