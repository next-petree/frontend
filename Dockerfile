# 1. For build React app
FROM node:lts AS build

# Set working directory
WORKDIR /app  

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install dependencies and build the React app
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration (default.conf 파일을 복사)
COPY default.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]