FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g angular
RUN npm install
COPY ./ /app/
RUN npm start
FROM nginx:alpine