import Image from 'next/image';
import { getPost } from '@lib/post';
import DateTime from '@components/DateTime';
import Layout from '@components/Layout';
import styles from '../../../styles/SSGPost.module.scss';

const SSGPost = ({ date, post }) => (
    <Layout>
        <div className={styles.ssgPost}>
            <DateTime title="데이터 받아온 시간" date={date} />
            <Image src={post?.image} width={300} height={300} />
            <span>{post.text}</span>
            <div className={styles.tags}>
                {post.tags.map((t) => (
                    <span key={t}>#{t}</span>
                ))}
            </div>
        </div>
    </Layout>
);

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.id);

    return { props: { post, date: new Date().getTime() } };
};

export default SSGPost;
