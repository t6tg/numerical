FROM node:14.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./package.json /usr/src/app
RUN npm install
RUN npm install react-scripts -g
RUN npm install serve -g

EXPOSE 3000

CMD ["npm" , "start"]
