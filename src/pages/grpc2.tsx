// @improbable-eng/grpc-web 기반으로 만들어진 페이지
// 테스트를 위해  사전에  npm run protoc를 먼저 실행 후, 진행

import { useEffect, useState } from 'react';
import { grpc } from '@improbable-eng/grpc-web';
import { HelloRequest } from 'src/proto/helloworld_pb';
// import { Greeter, GreeterClient } from 'src/proto/helloworld_pb_service';

// const client = new GreeterClient(process.env.ENDPOINT);

const GRPC2 = () => {
    const [message, setMessage] = useState<string>('');

    const getMessage = () => {
        // const req = new HelloRequest();
        // req.setName('grpc');
        // grpc.unary(Greeter.SayHello, {
        //     request: req,
        //     host: process.env.ENDPOINT,
        //     onEnd: ({ message }) => {
        //         console.log(message);
        //     }
        // });
    };

    useEffect(() => {
        getMessage();
    }, []);

    return (
        <div>
            <h5>GRPC2</h5>
            <span>GRPC2 result: {message}</span>
        </div>
    );
};

export default GRPC2;
