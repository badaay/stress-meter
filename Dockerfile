FROM node:16-alpine
WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./
# COPY ENV variable
COPY .env ./

COPY src ./src
RUN ls -a
RUN npm install

EXPOSE 4005
CMD ["npm", "run", "dev"]