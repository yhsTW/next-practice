// @improbable-eng/grpc-web 기반으로 만들어진 페이지
// 테스트를 위해  사전에  npm run protoc를 먼저 실행 후, 진행

import { useEffect, useState } from 'react';
import { HelloRequest } from 'src/proto/helloworld_pb';
// import { GreeterClient } from 'src/proto/helloworld_pb_service';

interface Props {
    // client: GreeterClient;
}

// const GRPC = ({ client }: Props) => {
const GRPC = ({}: Props) => {
    const [message, setMessage] = useState<string>('');

    // const getMessage = () => {
    //     const req = new HelloRequest();
    //     req.setName('world');

    //     client.sayHello(req, null, (err, res) => {
    //         if (err) return;
    //         console.log('grpc msg: ', res.getMessage());

    //         setMessage(res.getMessage());
    //     });
    // };

    // useEffect(() => {
    //     getMessage();
    // }, []);

    return (
        <div>
            <h5>GRPC</h5>
            <span>GRPC result: {message}</span>
        </div>
    );
};

export default GRPC;
