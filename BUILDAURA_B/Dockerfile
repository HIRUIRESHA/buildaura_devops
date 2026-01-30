# Use Node.js official image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production needed)
RUN npm install --production

# Copy the rest of backend code
COPY . .

# Expose the port backend listens on
EXPOSE 5000

# Command to start the backend server
CMD ["npm", "start"]


