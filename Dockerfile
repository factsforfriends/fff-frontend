FROM node as build
ENV NODE_OPTIONS --openssl-legacy-provider
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build:prod -- --outputPath=./dist/out

FROM nginx
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
