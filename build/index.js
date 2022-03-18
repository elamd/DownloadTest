"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true,
});
fastify.get('/', (request, reply) => {
});
fastify.get('/download', (request, reply) => {
    console.log('downloading...');
});
fastify.listen(3000, (err, address) => {
    if (err)
        throw err;
});
