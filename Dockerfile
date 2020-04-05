FROM ubuntu 


WORKDIR /home
RUN mkdir fabric

RUN . ./fabric

CMD '/bin/bash'