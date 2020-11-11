FROM node:10

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to Docker environment
COPY package*.json ./

# Install node packages
RUN npm install

# Copy everything to Docker environment
COPY . .

EXPOSE 3000

# Run the application
CMD [ "npm", "start" ]