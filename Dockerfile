FROM mhart/alpine-node:8

ENV PORT=80
ENV ENV=prod

# Create the dir
RUN mkdir -p /var/www/g.villerez.fr
WORKDIR /var/www/g.villerez.fr

# Copy the repo..
COPY . /var/www/g.villerez.fr

# Install forever
RUN npm install forever -g

## Install the server
RUN npm install

# Use the server dir and the provided prot
EXPOSE $PORT

# Start the server
ENTRYPOINT forever --fifo -e /var/www/g.villerez.fr/error.log -o /var/www/g.villerez.fr/info.log -c "npm run start:prod" .
