import { getPosts } from 'src/lib/post';
import DateTime from '@components/DateTime';
import Layout from '@components/Layout';
import Posts from '@components/Posts';
import GoHome from '@components/GoHome';
import styles from '../../styles/SSG.module.scss';

const SSG = ({ posts, date }) => (
    <Layout>
        <div className={styles.ssg}>
            <h1 className={styles.title}>SSG</h1>
            <section className={styles.section}>
                <span>
                    소스 코드를 실행 가능한 프로그램으로 변환할 때, 데이터를 가져와 화면을 미리
                    만들어 놓는다.
                </span>
                <span>단, 데이터가 변경점이 있어도 화면에 반영되지 않는다.</span>
            </section>
            <DateTime title={'데이터 받아온 시간'} date={date} />
            <Posts posts={posts} />
            <GoHome />
        </div>
    </Layout>
);

export const getStaticProps = async () => {
    console.log('[Next.js] SSG running...');
    const posts = await getPosts();

    return { props: { posts, date: new Date().getTime() } };
};

export default SSG;
