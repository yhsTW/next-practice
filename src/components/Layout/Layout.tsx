import RealTime from '@components/RealTime';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
    <div className={styles.layout}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
            <RealTime />
        </footer>
    </div>
);

export default Layout;
