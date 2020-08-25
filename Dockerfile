FROM mhart/alpine-node:14

ENV PORT=80
ENV ENV=prod

# Install forever
RUN npm install forever -g

# Create the dir
RUN mkdir -p /var/www/g.villerez.fr
WORKDIR /var/www/g.villerez.fr

# Copy the repo..
COPY . /var/www/g.villerez.fr

# Install the server
RUN npm install

# Compile the server
RUN npm run build

# Use the server dir and the provided prot
EXPOSE $PORT

# Start the server
ENTRYPOINT forever --fifo -e /var/www/g.villerez.fr/error.log -o /var/www/g.villerez.fr/info.log -c "node dist/bin/index.js" .
