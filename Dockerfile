FROM node:8.11.3

ENV NODE_VERSION 8.11.3

LABEL maintainer="niu_hl@suixingpay.com"

ADD . /home/app

WORKDIR /home/app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
    && cnpm install && cnpm i sqlite3

EXPOSE 3000

CMD ["npm", "start"]
