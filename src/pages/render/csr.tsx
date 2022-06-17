import Layout from '@components/Layout';
import CSRContents from '@components/CSRContents';
import GoHome from '@components/GoHome';
import styles from '../../styles/CSR.module.scss';

const CSR = () => (
    <Layout>
        <div className={styles.csr}>
            <h1 className={styles.title}>CSR</h1>
            <section className={styles.section}>
                <span>화면이 완성된 후, 데이터를 가져온다.</span>
                <span>단, 데이터를 가져와 보여주기 전까지 로딩 화면으로 대체된다.</span>
            </section>
            <CSRContents />
            <GoHome />
        </div>
    </Layout>
);

export default CSR;
