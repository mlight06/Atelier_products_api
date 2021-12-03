FROM node:12
WORKDIR /SDC_PRODUCTS_API

COPY . .

RUN npm install

EXPOSE 1234

CMD npm start