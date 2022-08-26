FROM node:12

WORKDIR /usr/app

RUN chown -Rh node:node /usr/app

# install dependencies

USER node
COPY ./app/package*.json .
RUN npm install

# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY ./app .

USER root
RUN chown -Rh node:node /usr/app/node_modules

USER node

CMD [ "npm", "start" ]