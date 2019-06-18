# Containerize a Hello World application using Docker

### Create a Dockerfile for a node.js app

```
FROM node:carbon
WORKDIR <appdirectory>
RUN npm install
COPY package*.json
COPY app.js .
EXPOSE <port>
CMD [ "npm", "start" ]
```

### Create an image containing the application

* build a new docker image in the application directory

```
docker build -t <dockername> .
```

* run the newly created docker image

```
docker run <dockername>
```
