const Hapi = require('hapi');
const users = require('./users');
const server = new Hapi.Server();

server.connection({ host: 'localhost', port: 8000 });

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: (request, reply) => {
      const response = users.filter(user => user.id == request.params.id);

      if (response.length === 0) return reply('Not found.');

      return reply(response[0]);
    }
});

module.exports = server;
