// grpc-js 기반으로 만들어진 페이지
// 테스트를 위해 사전에 npm run protoc3을 먼저 실행 후, 진행

import axios from 'axios';

const GRPCWithSSR2 = ({ message }) => {
    return (
        <div>
            <h5>GRPC with SSR2</h5>
            <span>GRPC with SSR2 result: {message}</span>
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/greeter',
            params: { name: 'world@@@' }
        });

        return { props: { ...data } };
    } catch (err) {
        console.log(err);
        return { props: { err: err.message } };
    }
};

export default GRPCWithSSR2;
