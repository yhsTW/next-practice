import { getPosts } from '@lib/post';
import GoHome from '@components/GoHome';
import Layout from '@components/Layout';
import IWSContents from '@components/IWSContents';
import styles from '../../styles/ISRWithSWR.module.scss';

const ISRWithSWR = ({ posts, date }) => (
    <Layout>
        <div className={styles.isrWithSwr}>
            <h1 className={styles.title}>ISR with SWR</h1>
            <section className={styles.section}></section>
            <IWSContents posts={posts} date={date} />
            <GoHome />
        </div>
    </Layout>
);

export const getStaticProps = async () => {
    console.log('[Next.js] ISR with SWR running...');
    const posts = await getPosts();

    return { props: { posts, date: new Date().getTime() }, revalidate: 5 };
};

export default ISRWithSWR;
