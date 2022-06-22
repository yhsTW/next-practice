// grpc-web 기반으로 만들어진 페이지
// 테스트를 위해 사전에 npm run protoc2를 먼저 실행 후, 진행

import { useEffect, useState } from 'react';
import { GreeterClient } from 'src/proto/helloworld_grpc_web_pb';
import { HelloRequest } from 'src/proto/helloworld_pb';

const client = new GreeterClient(process.env.ENDPOINT);

const GRPC3 = () => {
    const [message, setMessage] = useState<string>();

    const getMessage = async () => {
        const req = new HelloRequest();
        req.setName('world');

        client.sayHello(req, {}, (err, res) => {
            if (err) return;
            console.log('say hello: ', res);
            setMessage(res.getMessage());
        });
    };

    useEffect(() => {
        getMessage();
    }, []);

    return (
        <div>
            <h5>GRPC3</h5>
            <span>GRPC3 result: {message}</span>
        </div>
    );
};

export default GRPC3;
