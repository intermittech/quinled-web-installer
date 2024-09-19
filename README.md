# QuinLED Web-Installer for WLED

# Development

## Install the dependencies

* Install Node.JS - https://nodejs.org/en
* Install development dependencies `npm install`
* To run the server normally, use `npm start` and browse to http://localhost:8080/
* To run the server with automatic reloading during development, use `npm run dev` and browse to http://localhost:8080/

# Docker

## Build Docker Image

```
docker build -t quinled-install:latest .
```

## Run Docker Image to test

```
docker run -p 8080:80 quinled-install:latest
```

Open browser to `http://localhost:8080/`
