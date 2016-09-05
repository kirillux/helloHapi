/**
 * Created by Kirill on 9/5/2016.
 */

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port: 3000});

//First route

server.route({
    path: '/hello',
    method: 'GET',
    handler: function (request, reply) {
        reply('Hello World');
    }
});

server.start(function(){
    console.log('Listening on ' + server.info.uri);
});



