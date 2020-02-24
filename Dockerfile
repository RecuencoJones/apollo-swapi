FROM node:erbium

ENV NODE_ENV production

WORKDIR /app

COPY . .

RUN npm ci

CMD [ "npm", "start" ]
