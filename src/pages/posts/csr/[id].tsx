import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import type { Post } from '@lib/post';
import DateTime from '@components/DateTime';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import styles from '../../../styles/CSRPost.module.scss';

const CRSPost = () => {
    const { query } = useRouter();
    const [post, setPost] = useState<Post>();
    const [date, setDate] = useState<Date>();

    const getPost = async () => {
        try {
            const { data: post } = await axios({
                method: 'GET',
                url: `${process.env.BASE_URL}/post/${query.id}`,
                headers: {
                    'app-id': process.env.APP_ID
                }
            });

            setPost(post);
            setDate(new Date());
        } catch (err) {
            console.log('get post error: ', err);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    if (!post) return <Loading />;

    return (
        <Layout>
            <div className={styles.csrPost}>
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
};

export default CRSPost;
