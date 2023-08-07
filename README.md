# Formulario-Votacion
Aplicación Listado de Tareas

## Requerimientos
- Tener Docker instalado

## Intalacion y configuración
- Crear en la raíz del proyecto un archivo .env. Puede usar el .env.example de como referencia
- Ingresar el host y puerto de la api y datos de acceso de la base de datos mysql \
    **REACT_APP_API_URL**: Host de la aplicacion \
    **REACT_APP_API_PORT**: 3000 (este es fijo) \
    **DB_DATABASE**: Nombre de la base de datos que se creará con la instalación \
    **DB_USERNAME**: Nombre de usuario de la base de datos usado por la API \
    **DB_PASSWORD**: Password de la base de datos usado por la API \

- Ingresar el siguiente comando para cargar el proyecto
```sh
docker compose up -d
```
- Una vez cargado los contenedores, podrá ingresar http://HOST:8081 para acceder a la aplicación
- Para acceso a la base de datos, puede ingresar al phpmyadmin http://HOST:8010

