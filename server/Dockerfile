#  Dockerfile for Node Express Backend

FROM node:12.20.0-alpine3.10

# Create App Directory

WORKDIR /server

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY ./src ./src

# Exports
EXPOSE 5000

CMD ["npm","start"]