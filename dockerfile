FROM ubuntu:focal

ENV DEBIAN_FRONTEND=noninteractive 

USER root

WORKDIR /home

RUN apt-get update && \
	apt-get -y --no-install-recommends install --fix-missing \
        apt-file \
        apt-utils \
        build-essential \
        bzip2 \
        ca-certificates \
        cmake \
        curl \
        default-jdk \
        default-jre\
        gdb \
        git \
        wget \
        lbzip2 \
        libbz2-dev \
        libcurl4-openssl-dev \
        libgeos-dev \
        libglpk-dev \
        libgsl0-dev \
        libjpeg-dev \
        libjq-dev \
        liblzma-dev \
        libnetcdf-dev \
        libpng-dev \
        libpq-dev \
        libproj-dev \
        libprotobuf-dev \
        libsqlite3-dev \
        libssh2-1-dev \
        libssl-dev \
        libudunits2-dev \
        libxml2-dev \
        libxt-dev \
        libz-dev \
        make \
        python3-pip \
        sqlite3 \
        unzip \
        vim \
        && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN wget http://nodejs.org/dist/v16.13.2/node-v16.13.2.tar.gz \
        && tar -xzf node-v16.13.2.tar.gz \
        && cd node-v16.13.2 \
        && ./configure \
        && make \
        && make install


#COPY . /home/refchef-ember

#RUN apt-get update && \
#        apt-get -y --no-install-recommends install --fix-missing \
#        nvm \
#        npm \
#        vim \
#        && apt-get clean && rm -rf /var/lib/apt/lists/*
