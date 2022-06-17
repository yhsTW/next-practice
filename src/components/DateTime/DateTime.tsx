import { formatting } from '@utils/date';
import { cls } from '@utils/util';
import styles from './DateTime.module.scss';

interface Props {
    date: Date;
    title?: string;
    className?: string;
}

const DateTime = ({ date, className = '', title }: Props) => (
    <div className={styles.dateTime}>
        {title && <h5 className={styles.title}>{title}</h5>}
        {date && <span className={cls(styles.date, className)}>{formatting(date)}</span>}
    </div>
);

export default DateTime;
