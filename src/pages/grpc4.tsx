// grpc-js 기반으로 만들어진 페이지
// 테스트를 위해 사전에 npm run protoc3을 먼저 실행 후, 진행

import axios from 'axios';
import { useEffect, useState } from 'react';

const GRPC4 = () => {
    const [message, setMessage] = useState<string>();

    const getMessage = async () => {
        try {
            const { data: msg } = await axios({ url: `/api/greeter`, params: { name: 'hi' } });
            setMessage(msg);
        } catch (err) {}
    };

    useEffect(() => {
        getMessage();
    }, []);

    return (
        <div>
            <h5>GRPC4</h5>
            <span>GRPC4 result: {message}</span>
        </div>
    );
};

export default GRPC4;
