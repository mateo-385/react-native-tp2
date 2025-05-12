# React Native Trabajo Práctico N° 2

Este proyecto es una aplicación básica que utiliza un servidor Node.js con Express y un cliente React para validar nombres y mostrar un saludo personalizado.

## Características

1. **Servidor Node.js**:

   - Endpoint `/hola/:nombre`: Devuelve un saludo personalizado.
   - Endpoint `/validar/:nombre`: Valida si el nombre ingresado está en una lista de usuarios válidos.

2. **Cliente React**:
   - Interfaz con un campo de texto para ingresar un nombre.
   - Botón para validar el nombre y obtener un saludo.
   - Muestra mensajes de error o éxito según la respuesta del servidor.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn
- React (v18 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/mateo-385/react-native-tp2
   cd react-native-tp2
   ```
2. Instala las dependencias del servidor:
   ```bash
   cd sever
   npm install
   ```
3. Instala las dependencias del cliente:
   ```bash
   cd sever
   npm install
   ```

## Uso

Servidor

1. Inicia el servidor:

   ```bash
   cd sever
   node app.js
   ```

2. El servidor estará disponible en http://localhost:3000.

Cliente

1. Inicia el cliente:
   ```bash
   cd client
   npm start
   ```
2. Abre tu navegador en http://localhost:3000.
