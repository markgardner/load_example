FROM	centos:centos7
RUN		curl -O http://nodejs.org/dist/v4.2.1/node-v4.2.1-linux-x64.tar.gz && \
		tar --strip-components 1 -xzvf node-v* -C /usr/local
COPY	./ app/
WORKDIR	app
RUN		npm install
CMD		node index