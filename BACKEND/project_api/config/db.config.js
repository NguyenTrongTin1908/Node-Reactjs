"use strict";
import express from 'express';
import { Router } from 'express';
const mongoosedb = require('mongoose');
import * as pg from 'pg'
const { Pool } = pg.default





    // connect mongodb


mongoosedb.set('useCreateIndex', true);
mongoosedb.set('useFindAndModify', false);
mongoosedb
  .connect(process.env.DB_CONNECT, {
    dbName: 'local',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response,err) => {
    console.log('Connect database seccess !!!');
    console.log(re)
  });




const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'admin',
  port: 5432,
})




