import { Suspense } from 'react';
import GoHome from '@components/GoHome';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import CWSContents from '@components/CWSContents';
import styles from '../../styles/CSRWithSuspense.module.scss';

const CSRWithSuspense = () => (
    <Layout>
        <div className={styles.csrWithSuspense}>
            <h1 className={styles.title}>CSR with Suspense</h1>
            <section className={styles.section}></section>
            <Suspense fallback={<Loading />}>
                <CWSContents />
            </Suspense>
            <GoHome />
        </div>
    </Layout>
);

export default CSRWithSuspense;
