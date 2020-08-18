import requests

# Url del API       
#url = 'http://localhost:3000/api/analoga'
url = 'http://54.82.156.216/api/analoga'

# Se conecta a la url y descarga el archivo
response = requests.get(url)

# Guarda localmente el archivo obtenido
open('resultado.txt', 'wb').write(response.content)

# Muestra mensaje de exito
print("Se descargó el archivo 'resultado.txt'")