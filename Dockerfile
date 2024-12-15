#import base image
FROM node:22-alpine

#create working directory
WORKDIR /app

#copy package files
COPY package.*json ./

#install dependencies
RUN npm install

#copy project to working directory
COPY . .

#expose port
EXPOSE 5173

#command to run 
CMD ["npm", "run","dev"]
