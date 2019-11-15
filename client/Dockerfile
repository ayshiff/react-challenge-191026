FROM node:12 as build

WORKDIR /home/node

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /home/node/build /usr/share/nginx/html
COPY serverfront.conf /etc/nginx/conf.d/default.conf