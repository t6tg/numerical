FROM node:14.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/server
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./server /usr/src/app/server
RUN npm install -g nest
RUN npm install

EXPOSE 5500

CMD ["npm" , "run","start:dev"]