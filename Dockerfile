FROM node:12

WORKDIR .

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]