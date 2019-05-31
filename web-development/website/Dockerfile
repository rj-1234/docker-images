# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.0.1 -g

# install bootstrap and reactstrap
COPY requirements.txt /app/requirements.txt
RUN npm install --save bootstrap
RUN npm install --save reactstrap

# start app
CMD ["npm", "start"]
