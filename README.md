<!--
title: 'Serverless API Star Wars'
description: 'Api realizada en Express desplegada en una función lambda que se integra con la API de Star Wars'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
-->

# Serverless API Star Wars

API realizada en Express desplegada en una función lambda que se integra con la API de Star Wars

## Acerca del proyecto

El proyecto configura una función denominada como API la cual gestiona todas las solicitudes del evento httAPI. 
Dicho evento esta configurado para aceptar todas las solicitud por lo que se utiliza Express Js para para enrutar y manejar
las solicitudes.

## Uso


### Despliegue

En primer lugar se instalan las dependencias con

```
npm install
```

y se puede desplegar el servicio utilizando el siguiente comando

```
serverless deploy
```

Una vez desplegado se presentará dicha url como prueba del serverless API

```bash
endpoint: https://2y52usubzj.execute-api.us-east-1.amazonaws.com

documentacion de la api:
  endpoint: https://2y52usubzj.execute-api.us-east-1.amazonaws.com/api-docs/
```

### Local

Para proceder a ejecutarlo de manera local se procede a realizar el siguiente comando

```
npm run start
```

La url mostrada es la siguiente

```
http://localhost:4040/
```

### Pruebas

Se realizaron pruebas unitarias para cada endpoint mostrando en la API, se pueden encontrar dichas pruebas
en la carpeta src/tests

