FROM node:26.1.0-alpine3.23
WORKDIR /app
COPY package*.json .
RUN npm install -f
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
