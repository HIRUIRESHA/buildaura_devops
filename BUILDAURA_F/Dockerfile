# Step 1: Build frontend
FROM node:20 as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy frontend source code
COPY . .

# Build the frontend
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose web server port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
