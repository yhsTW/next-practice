import { useEffect, useRef, useState } from 'react';
import DateTime from '@components/DateTime';
import styles from './RealTime.module.scss';

const RealTime = () => {
    let timer = useRef(null);
    const [date, setDate] = useState<Date>(null);

    useEffect(() => {
        timer.current = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer.current);
        };
    }, []);

    return (
        <div className={styles.realTime}>
            <DateTime title="현재 시간" date={date} />
        </div>
    );
};

export default RealTime;
