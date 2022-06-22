import { credentials } from '@grpc/grpc-js';

import { GreeterClient } from 'src/proto/helloworld_grpc_pb';
import { HelloRequest } from 'src/proto/helloworld_pb';

const CLIENT = new GreeterClient('0.0.0.0:9090', credentials.createInsecure());
const REQUEST = new HelloRequest();

export const sayHello = async (name: string, callback: (name: string) => void) => {
    REQUEST.setName(name);

    CLIENT.sayHello(REQUEST, (err, grpcRes) => {
        if (err) throw err;
        console.log('lib say hello : ', err);
        console.log('lib say hello : ', grpcRes);
        callback(grpcRes.getMessage());
    });
};
