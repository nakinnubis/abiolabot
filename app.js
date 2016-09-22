var tmi = require('tmi.js');
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "nakinnubis",
        password: "oauth:t08jkxs94kc11z91md02jch74wra3e"
    },
    channels: ["omilaju"]
};
var client = new tmi.client(options);

client.connect();
client.on('connected', function(address, port) {
    client.action("omilaju", "Hello welcome to our channel i am the bot and you are the human");
    client.join("omilaju", "Just joined our channel");
});
client.on('chat', function(channel, user, message, self) {
    if (message === '@twitter') {
        client.action("omilaju", "www.twitter.com/nakinnubis");
    }

    client.action("omilaju", user['display-name'] + "You are welcome to our channel today");
});
