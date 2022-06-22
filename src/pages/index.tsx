import Layout from '@components/Layout';
import Link from 'next/link';
import { ROUTES } from 'src/constants/routes';
import styles from '../styles/Home.module.scss';

const LINKS = [
    { href: ROUTES.csr, name: 'CSR' },
    { href: ROUTES.isrWithSwr, name: 'ISR with SWR' },
    { href: ROUTES.ssg, name: 'SSG' },
    { href: ROUTES.isr, name: 'ISR' },
    { href: ROUTES.ssr, name: 'SSR' },
    { href: ROUTES.grpc, name: 'GRPC' },
    { href: ROUTES.grpc2, name: 'GRPC2' },
    { href: ROUTES.grpc3, name: 'GRPC3' },
    { href: ROUTES.grpc4, name: 'GRPC4' },
    { href: ROUTES.grpcWithSSR, name: 'GRPC with SSR' }
];

const Home = () => (
    <Layout>
        <div className={styles.home}>
            <h1 className={styles.title}>Next.js</h1>
            <section className={styles.links}>
                {LINKS.map(({ href, name }) => (
                    <Link key={name} href={href}>
                        <a className={styles.link}>{name}</a>
                    </Link>
                ))}
            </section>
        </div>
    </Layout>
);

export default Home;
