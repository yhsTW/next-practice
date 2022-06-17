import Layout from '@components/Layout';
import Link from 'next/link';
import { ROUTES } from 'src/constants/routes';
import styles from '../styles/Home.module.scss';

const Home = () => (
    <Layout>
        <div className={styles.home}>
            <h1 className={styles.title}>Next.js</h1>
            <section className={styles.links}>
                <Link href={ROUTES.csr}>
                    <a className={styles.link}>CRS</a>
                </Link>
                <Link href={ROUTES.isrWithSwr}>
                    <a className={styles.link}>ISR with SWR</a>
                </Link>
                <Link href={ROUTES.ssg}>
                    <a className={styles.link}>SSG</a>
                </Link>
                <Link href={ROUTES.isr}>
                    <a className={styles.link}>ISR</a>
                </Link>
                <Link href={ROUTES.ssr}>
                    <a className={styles.link}>SSR</a>
                </Link>
            </section>
        </div>
    </Layout>
);

export default Home;
