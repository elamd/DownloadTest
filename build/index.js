"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_static_1 = __importDefault(require("fastify-static"));
const path_1 = __importDefault(require("path"));
const server1 = (0, fastify_1.default)({
    logger: true,
});
server1.register(fastify_static_1.default, {
    root: path_1.default.join(__dirname, '../html'),
    prefix: '/public/'
});
const server2 = (0, fastify_1.default)({
    logger: true,
});
server1.get('/download', (request, reply) => {
    console.log('downloading...!!!');
    reply;
});
server1.listen(3000, (err, address) => {
    if (err)
        throw err;
});
server2.get('/downloadFile', (request, reply) => {
    console.log('getting file...');
});
server2.listen(3001, (err, address) => {
    if (err)
        throw err;
});
