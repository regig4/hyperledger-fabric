#FROM hyperledger/fabric-tools:2.0 
#FROM ubuntu
FROM jpetazzo/dind

WORKDIR /home/fabric

COPY . .

RUN sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
RUN sudo chmod +x /usr/local/bin/docker-compose

CMD './start.sh'
