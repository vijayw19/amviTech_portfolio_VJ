# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
COPY index.html ./
COPY src ./src
RUN npm ci
RUN npm run build

# Run stage (serve static files)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

