# Nodejs API file

Este proyecto muestra como:

- Publicar un RestAPI en Nodejs que retorna un archivo
- Consumir un RestAPI desde Python que descargue el archivo

## Herramientas
- [Nodejs](htthttps://nodejs.org/)
- [Expressjs](https://expressjs.com/)
- [Python](https://www.python.org/)

## Servidor

### Instalación de dependencias
Para instalar las dependencias del servidor se debe ejecutar en el folder `servidor` el siguiente comando:
~~~console
npm install
~~~

### Ejecución del servidor
Para iniciar el servidor, en el folder `servidor` se debe ejecutar el comando:
~~~console
node app.js
~~~ 

## Cliente

### Instalación de dependencias

Se sugiere instalar las dependencias del cliente usando [virtualenv](https://virtualenv.pypa.io/en/latest/).
Para instalar las dependencias, en el folder `cliente` se debe ejecutar el comando:

~~~console
pip install -r requirements.txt
~~~

### Ejecución del cliente

En el folder `cliente` se debe ejecutar:
~~~console
python cliente.py
~~~