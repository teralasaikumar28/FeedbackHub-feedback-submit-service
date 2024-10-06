# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .


# Expose the port the app runs on (typically 3000 for Node.js apps)
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
