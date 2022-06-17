import { useState } from 'react';

const Countdown = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h5>화면 갱신</h5>
            <span>{count}</span>
        </div>
    );
};

export default Countdown;
