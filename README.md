# Getting Started with our Blockchain Application

The project is Dockerized so just two simple commands and it is good to go

## Pre-requisite

Make sure wherever you are running this you have Docker installed there
It can be your local/laptop or any centos/ubuntu server

### Follow this to get Docker in your system

https://docs.docker.com/get-docker/

### Get the code

Clone this repo, we have already placed Dockerfile and .dockerignore files so steps are straight forward

### Step 1: Build a image out of it

cd to the cloned repository, place where Dockerfile is present

docker build -t <image-name> .

ex: docker build -t blockchainapp/react_app .

### Step 2 : Get your container running using the image you build

docker run -d -it -p 80:80/tcp --name <name-container> <image-name>

ex:-
docker run -d -it -p 80:80/tcp --name blockchain-app blockchainapp/react_app:latest 




## Get it in Browser
Open Chrome
write: http://localhost:80
And it sould be up and running
