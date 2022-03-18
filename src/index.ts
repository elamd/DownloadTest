import Fastify, { FastifyInstance } from 'fastify';

const server1: FastifyInstance = Fastify({
    logger: true,
});

const server2: FastifyInstance = Fastify({
    logger: true,
});

server1.get('/', (request, reply) => {
    
});

server1.get('/download', (request, reply) => {
    console.log('downloading...');
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