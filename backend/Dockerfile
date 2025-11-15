FROM node:24-alpine

WORKDIR  /app

COPY --chown=node:node package*.json ./

RUN npm install --user

COPY --chown=node:node . .

USER node

CMD [ "npm", "run", "start:dev" ]