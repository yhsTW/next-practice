import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Post } from '@lib/post';
import DateTime from '@components/DateTime';
import Posts from '@components/Posts';
import Loading from '@components/Loading';
import styles from './CSRContents.module.scss';

const CSRContents = () => {
    const [date, setDate] = useState<Date>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        const {
            data: { data: posts }
        } = await axios({
            method: 'GET',
            url: `${process.env.BASE_URL}/post?limit=1000`,
            headers: {
                'app-id': process.env.APP_ID
            }
        });
        setDate(new Date());
        setPosts(posts);
    };

    useEffect(() => {
        getPosts();

        return () => {
            getPosts();
        };
    }, []);

    if (posts.length === 0) return <Loading />;

    return (
        <section className={styles.contents}>
            <DateTime title={'데이터 받아온 시간'} date={date} />
            <Posts posts={posts} />
        </section>
    );
};

export default CSRContents;
