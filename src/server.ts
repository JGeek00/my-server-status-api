import express from 'express';
import dotenv from 'dotenv';
import config from './config/api.json';
import Router from './routes';

dotenv.config();

const server = express();

server.set('port', process.env.PORT ?? config.defaultPort);

server.use('/', Router)

export default server;