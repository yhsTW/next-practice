import { useState } from 'react';

const GRPCWithSWR = () => {
    const [message, setMessage] = useState<string>();

    return (
        <div>
            <h5>GRPC with SWR</h5>
            <span>GRPC with SWR result: {message}</span>
        </div>
    );
};

export default GRPCWithSWR;
