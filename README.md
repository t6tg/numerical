# numerical
[![Docker](https://github.com/t6tg/numerical/actions/workflows/docker.yml/badge.svg)](https://github.com/t6tg/numerical/actions/workflows/docker.yml)
[![CodeQL](https://github.com/t6tg/numerical/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/t6tg/numerical/actions/workflows/codeql-analysis.yml)

## Client Side
```
$ npm install / yarn
$ npm start / yarn start
```

## Server Side
```
npm install / yarn
npm run start:dev / yarn start:dev
```

## Docker
```
$ docker-compose up -d --build
```
## Docker repository
```
https://hub.docker.com/repository/docker/t6tg/client-numerical
https://hub.docker.com/repository/docker/t6tg/server-numerical
```

## Swagger
```
http://localhost:5500/docs/
```

## CI/CD ( Build Docker Image and Push to docker repository )
```
├──.github/
│ ├── workflows/
│   ├── docker.yml
```
