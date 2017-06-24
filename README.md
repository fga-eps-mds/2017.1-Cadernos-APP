# 2017.1-Cadernos-APP

Descrição do Projeto:

Repositório oficial do APP do projeto de cadernos digitais do departamento de artes da Universidade de Brasília. O projeto tem como principal objetivo auxiliar os alunos e professores do instituto de artes a organizar e divulgar seus projetos por meio de um aplicativo mobile desenvolvido na plataforma React Native, que será disponibilizado para Android e IOS.

***
[![Build Status](https://travis-ci.org/fga-gpp-mds/2017.1-Cadernos-APP.svg?branch=master)](https://travis-ci.org/fga-gpp-mds/2017.1-Cadernos-APP)
[![Code Climate](https://codeclimate.com/github/fga-gpp-mds/2017.1-Cadernos-APP/badges/gpa.svg)](https://codeclimate.com/github/fga-gpp-mds/2017.1-Cadernos-APP)
[![Coverage Status](https://coveralls.io/repos/github/fga-gpp-mds/2017.1-Cadernos-APP/badge.svg?branch=master)](https://coveralls.io/github/fga-gpp-mds/2017.1-Cadernos-APP?branch=master)
***

## Instalação (Gerando o Apk)

Setting up your gradle properties:

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

replace `*****` with our password.

So run `./buildAPK.sh`. The generated .apk will be into `/android/app/build/outputs/apk`.

## Principais Features
Permitir criar um caderno artístico.
Permitir adicionar colaboradores ao caderno.
Adicionar atividades que descrevam como foi feito o caderno.
Classificar tais atividades em criação, experimento e teórico.
Criar um pdf do caderno.

## Como contribuir

1. Faça primeiramente o fork do projeto, depois o download ou clone do repositório.
```console
$ git clone https://github.com/fga-gpp-mds/2017.1-Cadernos-APP.git
```
2. Você deverá possuir o Android, NodeJS e o React Native instalados.
3. Utilize uma maquina virtual ou o próprio celular para testar suas alterações e faça o Pull Request que será posteriormente analisado.

## Documentação

A documentação e todas as informações sobre o projeto se encontram em: https://github.com/fga-gpp-mds/2017.1-Cadernos-API/wiki
