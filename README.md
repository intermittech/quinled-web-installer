# QuinLED Web-Installer for WLED



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
