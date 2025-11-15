FROM node:24-alpine

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install --user -g npm

RUN npm install --user

RUN npm install -g @nestjs/cli

COPY --chown=node:node . .

USER node

CMD [ "npm", "run", "start:dev" ]