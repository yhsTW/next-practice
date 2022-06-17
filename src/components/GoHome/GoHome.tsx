import Link from 'next/link';
import { ROUTES } from 'src/constants/routes';
import styles from './GoHome.module.scss';

const GoHome = () => (
    <Link href={ROUTES.home}>
        <a className={styles.goHome}>홈으로</a>
    </Link>
);

export default GoHome;
