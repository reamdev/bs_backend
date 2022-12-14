# Prueba - BSALE Backend

Esta es una API REST para la prueba tecnica de Desarrollador de Software para la empresa BSALE, en esta se busca crear una API para obtener y devolver la información de los productos y categorias que están en la base de datos asignada para esta prueba.

## Requerimientos

Antes de poder ejecutar el proyecto debemos asegurarnos de tener instalado [NodeJS](https://nodejs.org/es/) de preferencia en su version `16.16.0` y asi no tener problema al ejecutar el proyecto. 

Este proyecto esta hecho en [TypeScript](https://www.typescriptlang.org/) y necesita de los siguientes modulos para funcionar:

 * [cors](https://www.npmjs.com/package/cors)
 * [dotenv](https://www.npmjs.com/package/dotenv)
 * [express](https://www.npmjs.com/package/express)
 * [module-alias](https://www.npmjs.com/package/module-alias)
 * [morgan](https://www.npmjs.com/package/morgan)
 * [mysql](https://www.npmjs.com/package/mysql)
 * [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
 * [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
 * [ts-node](https://www.npmjs.com/package/ts-node)

Además de los @types de los modulos de:

 * cors
 * dotenv
 * express
 * express-myconnection
 * morgan
 * mysql

Todos estos modulos se instalan de manera automatica con el comando de instalación.

## Instalación

Para poder instalar este proyecto debemos clonar el proyecto con el comando `git clone ${URL}` y de ahi ejecutar el comando correspondiente para que NodeJs empiece a instalar los modulos necesarios.

En caso de tener instaldo yarn

```bash
yarn install
```

Caso contrario ejecutar el comando
```bash
npm install
```

Con esto se deberian instalar las dependencias necesarias para ejecutar el proyecto.

## Configuración:

Antes de proceder a ejecutar el proyecto debemos configurar nuestras variables de entorno para ello copiaremos el archivo `.env.example`, luego le cambiamos el nombre para dejarlo con el nombre de `.env`.

Después abrimos el archivo `.env` y configuramos el puerto y las credenciales de la base de datos. Como en el siguiente ejemplo:

```
PORT=8000

DB_HOST=localhost
DB_USER=dev
DB_PASSWORD=dev
DB_NAME=dev
```

## Ejecutar el proyecto

En caso este cambiando el codigo se recomienda usar el comando `dev` para que el programa se autocompile cada vez que detecte un cambio. Para ejecutarlo solo hay que poner el comando:

En caso de tener yarn:

```bash
yarn dev
```

Caso contrario ejecutar:

```bash
npm run dev
```

Por otro lado si desea simplemente ejecutar el proyecto de manera normal primero debemos compilar los archivos Typescript y para eso usaremos el comando `build` ejecutando el siguiente comando:

En caso de tener yarn:

```bash
yarn build
```

Caso contrario ejecutar:

```bash
npm run build
```

Esto nos creara los archivos JavaScript compilados.Y para poder iniciar el proyecto ya solo bastaria ejecutar el comando `start ejecutan el siguiente comando:

En caso de tener yarn:

```bash
yarn start
```

Caso contrario ejecutar:

```bash
npm run start
```

Con los archivos compilados ya no hay necesidad de volver a ejecutar el comando `build` cada vez que queremos iniciar el proyecto, a menos que realizaramos cambios desde la última compilación, solamente bastara con ejecutar el comando `start` para poder iniciarlo.

### Enlaces

 * [Repositorio de GitHub](https://github.com/reamdev/bs_backend)

 * [Despliegue de la aplicación](https://reambsbackend.herokuapp.com/)
