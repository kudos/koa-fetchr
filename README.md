# koa-fetchr

This is untested, but [Fetchr will adding better tests](https://github.com/yahoo/fetchr/issues/63) that this library will use.

## Installation

`npm install koa-fetchr`

## Usage

```
"use strict";
 
const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const koaFetchr = require('koa-fetchr');
const fetchr = require('fetchr');
 
const app = koa();
 
app.use(bodyparser());
 
app.use(koaFetchr(fetchr));

// Register your fetchers
 
app.listen(3000);

```