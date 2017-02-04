FROM mhart/alpine-node:7

ENV PORT=81
ENV ENV=production

# Create the dir
RUN mkdir -p /var/www/g.villerez.fr

WORKDIR /var/www/g.villerez.fr

# Copy the repo..
COPY . /var/www/g.villerez.fr

# Prepare node
RUN npm install -g forever && \
    npm install

EXPOSE $PORT

# Start forever
ENTRYPOINT forever --fifo -e /var/log/node/error.log -o /var/log/node/info.log bin/www
