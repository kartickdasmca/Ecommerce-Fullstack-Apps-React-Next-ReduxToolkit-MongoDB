# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the default port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
