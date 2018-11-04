## install

```
cd node-grpc-caller
npm link
cd ~/.node-red/
sudo npm link node-grpc-caller
```

## sample flow.

```
[{"id":"298c2bf6.524934","type":"tab","label":"フロー 1","disabled":false,"info":""},{"id":"74b12c1f.fc75a4","type":"inject","z":"298c2bf6.524934","name":"","topic":"","payload":"{\"payload\":{\"Left\":0,\"Top\":32,\"Width\":32,\"Height\":49}}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":170,"y":260,"wires":[["14b177c5.380dc8"]]},{"id":"fb59a70.9bfe658","type":"debug","z":"298c2bf6.524934","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":700,"y":280,"wires":[]},{"id":"14b177c5.380dc8","type":"node-grpc-caller","z":"298c2bf6.524934","name":"","server":"192.168.0.10:19003","proto":"/tmp/cutter.proto","service":"Cutter","rpc":"CutImage","x":400,"y":240,"wires":[["fb59a70.9bfe658"]]}]
```
