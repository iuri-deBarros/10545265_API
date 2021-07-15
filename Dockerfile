FROM node:14-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install
COPY ./ /app/
RUN npm start
FROM nginx:alpine as configuration
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/ /usr/share/nginx/html/