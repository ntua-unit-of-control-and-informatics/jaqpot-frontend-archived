FROM node:16-alpine AS builder
ARG CONFIGURATION='production'

# Make /app as working directory
WORKDIR /app

# Copy package.json file
COPY package.json .

# Install dependencies
RUN npm install

# Copy the source code to the /app directory
COPY . .

# Build the application
RUN npm run build --  --output-path=dist --configuration=$CONFIGURATION --output-hashing=all


######  Use NgInx alpine image  ######
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config file
COPY default.conf /etc/nginx/conf.d/

# Copy dist folder fro build stage to nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]
