import { getPosts } from 'src/lib/post';
import DateTime from '@components/DateTime';
import Layout from '@components/Layout';
import GoHome from '@components/GoHome';
import Posts from '@components/Posts';
import styles from '../../styles/SSR.module.scss';

const SSR = ({ posts, date }) => (
    <Layout>
        <div className={styles.ssr}>
            <h1 className={styles.title}>SSR</h1>
            <section className={styles.section}>
                <span>서버에서 데이터와 화면을 모두 구성</span>
                <span>단, 로딩 화면이 제공되지 않고 약간의 딜레이 발생</span>
            </section>
            <DateTime title={'데이터 받아온 시간'} date={date} />
            <Posts posts={posts} />
            <GoHome />
        </div>
    </Layout>
);

export const getServerSideProps = async () => {
    console.log('[Next.js] SSR running...');
    const posts = await getPosts();

    return { props: { posts, date: new Date().getTime() } };
};

export default SSR;
