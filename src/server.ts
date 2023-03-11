import express from 'express';
import dotenv from 'dotenv';
import defaultConfig from './config/defaults.json';
import Router from './routes';

dotenv.config();

const server = express();

server.set('port', process.env.PORT ?? defaultConfig.port);

server.use('/', Router)

export default server;