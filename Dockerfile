# Dockerfile for React

# Build react
FROM node:14-alpine
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to container
COPY package*.json ./
COPY package-lock*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the app
RUN npm run build

# Expose the port the app is listening on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
