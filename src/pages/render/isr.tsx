import { getPosts } from 'src/lib/post';
import DateTime from '@components/DateTime';
import Layout from '@components/Layout';
import GoHome from '@components/GoHome';
import Posts from '@components/Posts';
import styles from '../../styles/ISR.module.scss';

const ISR = ({ posts, date }) => (
    <Layout>
        <div className={styles.isr}>
            <h1 className={styles.title}>ISR</h1>
            <section className={styles.section}>
                <span>페이지 첫 방문 시, SSG와 동일한 시점에 데이터와 화면을 구성한다.</span>
                <span>단, 특정 시간이 경과하면 새롭게 데이터, 화면 재구성</span>
            </section>
            <DateTime title={'데이터 받아온 시간'} date={date} />
            <Posts posts={posts} />
            <GoHome />
        </div>
    </Layout>
);

export const getStaticProps = async () => {
    console.log('[Next.js] ISR running...');
    const posts = await getPosts();

    return { props: { posts, date: new Date().getTime() }, revalidate: 5 };
};

export default ISR;
