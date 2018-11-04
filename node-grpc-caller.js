module.exports = function(RED) {
    function NodeGrpcCaller(config) {

        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {

            const caller = require('grpc-caller')
            const PROTO_PATH = config.proto
            const client = caller(config.server, PROTO_PATH, config.service)
            
              console.log(msg.payload)
            client[config.rpc](msg.payload, (err, res) => {
              console.log(res)
              msg.payload = res;
              node.send(msg);
            })
        });
    }
    RED.nodes.registerType("node-grpc-caller", NodeGrpcCaller);
}
