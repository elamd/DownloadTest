import Fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

const server1: FastifyInstance = Fastify({
    logger: true,
});
server1.register(fastifyStatic, {
    root: path.join(__dirname, '../html'),
    prefix: '/public/'
});

const server2: FastifyInstance = Fastify({
    logger: true,
});

server1.get('/download', (request, reply) => {
    console.log('downloading...!!!');
    reply;
});
server1.listen(3000, (err, address) => {
    if(err) throw err;
});

server2.get('/downloadFile', (request, reply) => {  
    console.log('getting file...');

});
server2.listen(3001, (err, address) => {
    if(err) throw err;
});