# 2017.1-Cadernos-APP

Repositório oficial do APP do projeto de cadernos digitais do departamento de artes da Universidade de Brasília

***
[![Build Status](https://travis-ci.org/fga-gpp-mds/2017.1-Cadernos-APP.svg?branch=master)](https://travis-ci.org/fga-gpp-mds/2017.1-Cadernos-APP)
[![Code Climate](https://codeclimate.com/github/fga-gpp-mds/2017.1-Cadernos-APP/badges/gpa.svg)](https://codeclimate.com/github/fga-gpp-mds/2017.1-Cadernos-APP)
[![Coverage Status](https://coveralls.io/repos/github/fga-gpp-mds/2017.1-Cadernos-APP/badge.svg?branch=master)](https://coveralls.io/github/fga-gpp-mds/2017.1-Cadernos-APP?branch=master)
***

## Building Android

Setting up your gradle properties:

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

replace `*****` with our password.

So run `./buildAPK.sh`.
